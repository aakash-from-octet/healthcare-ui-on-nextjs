'use client'
import { useState } from "react";
import Link from "next/link";
import { Form, Input, Button, Checkbox, Flex } from 'antd';
import { useRouter } from "next/navigation";
// IMAGES
import Logo from '../../../public/images/logo.svg'
import LockIcon from '../../../public/images/lock.svg'
import EmailIcon from '../../../public/images/email.svg'
import BoxesTrack from '../../../public/images/boxes-track.svg'


export default function Login() {
    const router = useRouter();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values, form ,'test');
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        router.push('/');
    };
    return (
        <main>
            <div className="onboarding login">
                <div className="onboarding-content">
                    <Logo />
                    <h1>Login</h1>
                    <p className="title-desc">Lorem ipsum dolor sit amet consectetur. A urna sit.</p>
                    <Form
                        className="account-stup"
                        form={form}
                        onFinish={onFinish}
                        style={{ maxWidth: 384 }}
                        name="login-form"
                        layout="vertical"
                    >
                        <div className="account-stup--feilds">
                            <Form.Item name="email" label="Email Id" rules={[{ required: true }]}>
                                <Input type="email" prefix={<EmailIcon />} placeholder="John.Doe@gmail.com" />
                            </Form.Item>
                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input.Password placeholder="******" prefix={<LockIcon />} />
                            </Form.Item>
                            <Flex justify="space-between" className="remember" align="center">
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link href={'/login'} >Forget Password?</Link>
                            </Flex>
                        </div>
                        <Button type="primary" htmlType="submit" className="w-100">Log in</Button>
                    </Form>
                </div>
                <div className="onboarding-screen">
                    <div className="onboarding-screen--track">
                        <BoxesTrack />
                    </div>
                    <div className="login-content">
                        <p>Welcome</p>
                        <p>Tracking Realtime Accreditation Compliance is now super easy with Accreditation point.</p>
                        <p>Get to know your accreditation non compliances real time from a single platform just @ click.</p>
                    </div>
                    <div className="onboarding-screen--track">
                        <BoxesTrack />
                    </div>
                </div>
            </div>
        </main>
    );
}
