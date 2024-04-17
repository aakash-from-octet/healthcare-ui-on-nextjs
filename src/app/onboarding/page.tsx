'use client'
import { useState } from "react";
import Image from "next/image";
import { Form, Input, Button, Select, Flex, Radio, DatePicker } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useRouter } from "next/navigation";
// IMAGES
import DownIcon from '../../../public/images/chevron.svg'
import Logo from '../../../public/images/logo.svg'
import Setup from '../../../public/images/set-up-image.png'
import PricingImage from '../../../public/images/pricing-image.png'
import BoxesTrack from '../../../public/images/boxes-track.svg'
import Right from '../../../public/images/right.svg'
import Visa from '../../../public/images/visa.svg'
import Paypal from '../../../public/images/paypal.svg'
import Gpay from '../../../public/images/gpay.svg'
import InvitationTeam from '../../../public/images/invitation-team.png'

interface EmailInput {
    email: string;
    role: string;
    [key: string]: string;
}
const { Option } = Select;

export default function Onboarding() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [steps, setSteps] = useState(1);
    const [subStep, setSubStep] = useState(1);
    const [plan, setPlan] = useState(3);
    const [paymentValue, setPaymentValue] = useState(1);
    const [billingValue, setBillingValue] = useState(400);

    const onChangeRadio = (e: RadioChangeEvent) => {
        setPaymentValue(e.target.value);
    };
    const onFinish = (values: any) => {
        console.log(values, form, 'test');

        if (steps == 3 && subStep == 1) {
            handleNextSubStep();
        }
        else {
            setSteps(steps + 1);
        }
    };
    // Send Invitation to Team
    const [items, setItems] = useState<EmailInput[]>([{ email: '', role: '' }]);
    const handleInputChange = (index: number, value: string, type: string) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index][type] = value;
            return updatedItems;
        });
    };
    const handleAddMore = () => {
        setItems(prevItems => [...prevItems, { email: '', role: '' }]);
    };

    const handleRoleChange = (value: string, index: number) => {
        handleInputChange(index, value, 'role');
    };

    const handleNextSubStep = () => {
        if (subStep < 2) { // Assuming there are 2 sub-steps in step 3
            setSubStep(subStep + 1);
        } else {
            setSteps(4); // Proceed to step 4 after completing sub-steps
            setSubStep(1); // Reset subStep for potential future use
        }
    };


    // HANDLE NEXT FROM 2ND STEP
    const handleStepForward = () => {
        if (steps === 2) {
            if (plan === 1) {
                console.log('Payment card', 'standard')
            } else if (plan === 2) {
                console.log('Payment card', 'premium')
            } else {
                console.log('Payment card', 'enterprise')
            }
        } else if (steps === 3) {
            if (paymentValue === 1) {
                console.log('Payment method', 'visa')
            } else if (paymentValue === 2) {
                console.log('Payment method', 'paypal')
            } else {
                console.log('Payment method', 'gpay')
            }
        } else {
            console.log('Emails', items);
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            router.push('/');
        }
        setSteps(steps + 1)
    }

    const handleStepBack = () => {
        if (steps === 3 && subStep > 1) {
            // If in step 3 and not at the first sub-step, go back a sub-step
            setSubStep(prevSubStep => prevSubStep - 1);
        } else if (steps === 3 && subStep === 1) {
            // If at the first sub-step of step 3, go back to the previous main step
            setSteps(prevSteps => prevSteps - 1);
        } else {
            // For all other cases, just go back a main step
            setSteps(prevSteps => prevSteps - 1);
        }
    };
    return (
        <main>
            <div className="onboarding">
                <div className="onboarding-content">
                    <Logo />
                    <h1>{steps === 1 ? `Let’s set up your account` : steps === 2 ? 'Pricing plans according to your needs' : steps === 3 ? 'Pricing plans according to your needs' : steps === 4 ? 'Send Invitation to Team' : 'Login'}</h1>
                    <p className="title-desc">Lorem Ipsum is a dummy text</p>
                    <div className="steps-count">
                        <div className="step active"></div>
                        <div className={`step ${steps > 1 ? 'active' : ''}`}></div>
                        <div className={`step ${steps > 2 ? 'active' : ''}`}></div>
                        <div className={`step ${steps > 3 ? 'active' : ''}`}></div>
                    </div>
                    {
                        steps === 1 ?
                            <Form
                                className="account-stup"
                                form={form}
                                onFinish={onFinish}
                                style={{ maxWidth: 384 }}
                                name="account-form"
                                layout="vertical"
                            >
                                <div className="account-stup--feilds">
                                    <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                                        <Input placeholder="Type here" />
                                    </Form.Item>
                                    <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}>
                                        <Input placeholder="Type here" />
                                    </Form.Item>
                                    <Form.Item name="industry" label="Industry" rules={[{ required: true }]}>
                                        <Select
                                            placeholder="Industry"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'ind-1', label: 'Indusrty 1' },
                                                { value: 'ind-2', label: 'Indusrty 2' },
                                                { value: 'ind-3', label: 'Indusrty 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item name="companySize" label="Company Size" rules={[{ required: true }]}>
                                        <Select
                                            placeholder="Company Size"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'small', label: 'Small' },
                                                { value: 'medium', label: 'Medium' },
                                                { value: 'large', label: 'Large' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                                <Flex justify="space-between" style={{ marginTop: '40px' }}>
                                    <Button>{'Back'}</Button>
                                    <Button type="primary" htmlType="submit" className="ml-auto">Next</Button>
                                </Flex>
                            </Form> :
                            <div className="w-fit">
                                {
                                    steps === 2 ?
                                        <div className="pricing-cards">
                                            <div className="pricing-card">
                                                <div className="pricing-card-header">
                                                    <p>Free</p>
                                                    <h6>Details</h6>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Admin & Security Controls</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <p>Lorem ipsum</p>
                                                </div>
                                            </div>
                                            <div className={`${plan === 1 ? 'active' : ''} pricing-card`} onClick={() => { setPlan(1) }}>
                                                <div className="pricing-card-header">
                                                    <h6>Standard</h6>
                                                    <p><span>$10</span>/month</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">

                                                </div>
                                                <div className="pricing-card--data">

                                                </div>
                                                <div className="pricing-card--data">

                                                </div>
                                            </div>
                                            <div className={`${plan === 2 ? 'active' : ''} pricing-card`} onClick={() => { setPlan(2) }}>
                                                <div className="pricing-card-header">
                                                    <h6>Premium</h6>
                                                    <p><span>$20</span>/month</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">

                                                </div>
                                                <div className="pricing-card--data">

                                                </div>
                                            </div>
                                            <div className={`${plan === 3 ? 'active' : ''} pricing-card`} onClick={() => { setPlan(3) }}>
                                                <div className="pricing-card-header">
                                                    <h6>Enterprise</h6>
                                                    <p><span>$60</span>/month</p>
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                                <div className="pricing-card--data">
                                                    <Right />
                                                </div>
                                            </div>
                                        </div> : steps === 3 ?
                                            <>
                                                {subStep === 1 && (
                                                    <>
                                                        <p className="payment-option">Payment Option</p>
                                                        <Radio.Group onChange={onChangeRadio} value={paymentValue}>
                                                            <div className="payment-method-cards">
                                                                <Radio value={1}>
                                                                    <Flex justify="space-between">
                                                                        <p>Using Debit/Credit Card</p>
                                                                        <Visa />
                                                                    </Flex>
                                                                </Radio>
                                                                <Radio value={2}>
                                                                    <Flex justify="space-between">
                                                                        <p>Using Paypal</p>
                                                                        <Paypal />
                                                                    </Flex>
                                                                </Radio>
                                                                <Radio value={3}>
                                                                    <Flex justify="space-between">
                                                                        <p>Using UPI</p>
                                                                        <Gpay />
                                                                    </Flex>
                                                                </Radio>
                                                            </div>
                                                        </Radio.Group>
                                                    </>
                                                )}
                                                {subStep === 2 && (
                                                    <>
                                                        <Flex gap={20} vertical>


                                                            <Form
                                                                form={form}
                                                                onFinish={onFinish}
                                                                style={{ maxWidth: 384 }}
                                                                name="billing-form"
                                                                layout="vertical"
                                                                initialValues={{
                                                                    billing_freq: 400,
                                                                    country: 'ind'
                                                                }}
                                                            >
                                                                <div className="billing-form--feilds">
                                                                    <Form.Item name="billing_freq">
                                                                        <Radio.Group onChange={(e: any) => setBillingValue(e.target.value)} value={billingValue}>
                                                                            <div className="billing-methods">
                                                                                <Radio value={400}>
                                                                                    <Flex gap={8} vertical>
                                                                                        <p>Billed Monthly</p>
                                                                                        <p className="subs-price">&#8377; 400</p>
                                                                                    </Flex>
                                                                                </Radio>
                                                                                <Radio value={2400}>
                                                                                    <Flex gap={8} vertical>
                                                                                        <p>Billed Annually</p>
                                                                                        <p className="subs-price">&#8377; 2400</p>
                                                                                    </Flex>
                                                                                </Radio>
                                                                            </div>
                                                                        </Radio.Group>
                                                                    </Form.Item>

                                                                    <Form.Item name="card_number" label="Card Number" rules={[{ required: true }]}>
                                                                        <Input placeholder="**** **** ****" maxLength={12} />
                                                                    </Form.Item>
                                                                    <Flex justify="space-between" gap={20}>
                                                                        <Form.Item name="expiryDate" label="Expiry date" className="w-full" rules={[{ required: true }]}>
                                                                            <DatePicker
                                                                                picker={'month'}
                                                                                format="MM/YYYY"
                                                                                placeholder="MM/YYYY"
                                                                                suffixIcon={null}
                                                                                className="expiry-datepicker"
                                                                                size="small"
                                                                            />
                                                                        </Form.Item>
                                                                        <Form.Item name="cvv" label="CVV" rules={[{ required: true }]} className="w-full">
                                                                            <Input placeholder="***" />
                                                                        </Form.Item>
                                                                    </Flex>
                                                                    <Flex justify="space-between" gap={20}>
                                                                        <Form.Item name="country" label="Country" className="w-full" rules={[{ required: true }]}>
                                                                            <Select
                                                                                placeholder="Country"
                                                                                allowClear
                                                                                suffixIcon={<DownIcon />}
                                                                                className="input-select"
                                                                                options={[
                                                                                    { value: 'ind', label: 'India' },
                                                                                    { value: 'usa', label: 'USA' },
                                                                                    { value: 'uae', label: 'UAE' },
                                                                                ]}
                                                                            />
                                                                        </Form.Item>
                                                                        <Form.Item name="zipCode" label="Zip Code" className="w-full" rules={[{ required: true }]}>
                                                                            <Input placeholder="Type...." />
                                                                        </Form.Item>
                                                                    </Flex>
                                                                </div>
                                                                <Flex justify="space-between" style={{ marginTop: '40px' }}>
                                                                    <Button onClick={() => setSubStep(prevSubStep => prevSubStep - 1)}>{'Back'}</Button>
                                                                    <Button type="primary" htmlType="submit" className="ml-auto">Next</Button>
                                                                </Flex>
                                                            </Form>

                                                        </Flex>

                                                    </>
                                                )}
                                            </>


                                            : steps === 4 ?
                                                <>
                                                    <p className="payment-option">Email Address</p>
                                                    <Flex gap={8} vertical align="start">
                                                        <>
                                                            {items.map((item, index) => (
                                                                <Input
                                                                    key={index}
                                                                    type="email"
                                                                    name={`inviteEmail_${index + 1}`}
                                                                    value={item.email}
                                                                    onChange={(e) => handleInputChange(index, e.target.value, 'email')}
                                                                    addonAfter={<Select
                                                                        value={item.role}
                                                                        onChange={(value) => handleRoleChange(value, index)}
                                                                        placeholder="Invite as"
                                                                    >
                                                                        <Option disabled value="">Invite as</Option>
                                                                        <Option value="manager">Manager</Option>
                                                                        <Option value="type-1">type 1</Option>
                                                                        <Option value="type-2">type 2</Option>
                                                                    </Select>}
                                                                    placeholder={`name@gmail.com`}
                                                                />
                                                            ))}
                                                            <Button type="text" onClick={handleAddMore}>+Add More</Button>
                                                        </>
                                                    </Flex>
                                                </> : ''
                                }
                                <Flex justify="space-between" style={{ marginTop: '40px' }} className={` ${steps == 3 && subStep == 2 ? 'd-none' : 'account-stup'} `}>
                                    <Button onClick={handleStepBack}>{steps === 2 ? `Skip` : 'Back'}</Button>
                                    <Button onClick={steps == 3 ? handleNextSubStep : handleStepForward} type="primary" className="ml-auto">{steps === 2 ? 'Start Plan' : steps === 3 ? 'Next' : 'Get Started'}</Button>
                                </Flex>
                            </div>
                    }
                </div>
                <div className="onboarding-screen">
                    <div className="onboarding-screen--track">
                        <BoxesTrack />
                    </div>
                    <Image src={steps === 1 ? Setup : steps === 4 ? InvitationTeam : PricingImage} alt="Setup" className="setup" />
                    <p>Get all Compliance/ Non Compliance Status of your accreditation at one place</p>
                    <div className="onboarding-screen--track">
                        <BoxesTrack />
                    </div>
                </div>
            </div>
        </main>
    );
}
