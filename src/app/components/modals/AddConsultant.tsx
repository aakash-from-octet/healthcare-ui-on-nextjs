import { Button, Flex, Form, Modal, Select } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';


import ModalLgClose from '../../../../public/images/lg-modal-close.svg';
import FormPersonIcon from '../../../../public/images/form-person.svg';
import DownIcon from '../../../../public/images/chevron.svg';
import ProfileImage from '../../../../public/images/profile.png';


const AddConsultantModal = ({ addConsultant, setAddConsultant }: { addConsultant?: any; setAddConsultant?: any }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const router = useRouter();
    const [form] = Form.useForm();

    const handleOk = () => {
        setConfirmLoading(true);
        // custom loading
        setTimeout(() => {
            setAddConsultant(false);
            setConfirmLoading(false);
            router.push('consultant/add-consultant');
        }, 1000);
    }
    const handleCancel = () => {
        setAddConsultant(false);
    };

    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk()
    };
    function labelRender(option: any) {
        return (
            <p>
                {option.title}
            </p>
        );
    }
    function dropdownRender(menu: any) {
        return (
            <div>
                {menu}
                <div className="divider-menu">
                    <Button onClick={() => { console.log('added') }} type="text">
                        + Add New
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <Modal
            open={addConsultant}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={<ModalLgClose />}
            footer={false}
            centered
            className='modal-sm'
        >
            <div className="modal--header">
                <p className="modal--title">Add Consultant</p>
            </div>
            <div className="modal--body">
                <Form
                    className="modal-from"
                    onFinish={onFinish}
                    name="add-consultant"
                    form={form}
                // initialValues={{
                //     consultant: 'nabh'                            
                // }}
                >
                    <Flex gap={24} vertical>
                        <Flex align="center" gap={12}>
                            <Flex style={{ minWidth: '151px' }} gap={6}>
                                <FormPersonIcon />
                                <p className="form-feild--custom">Select Guideline</p>
                            </Flex>
                            <p className="form-feild--seprator">:</p>
                            <div className="full">
                                <Form.Item name="selectGuideline" label="" rules={[{ required: true }]} style={{ marginBottom: 0 }}>
                                    <Select
                                        placeholder="Consultant"
                                        allowClear
                                        mode="multiple"
                                        maxTagCount={2}
                                        maxTagPlaceholder={(omittedValues) => (
                                            <p>+{omittedValues.length}</p>
                                        )}
                                        dropdownRender={dropdownRender}
                                        suffixIcon={<DownIcon />}
                                        options={[
                                            // { value: 'nabh', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="John Doe" /></div><p>NABH</p> </div>, title: 'nabhjphn@gmail.com' },
                                            { value: 'John Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="John Doe" /></div><p>Anirudh Doe</p> </div>, title: 'jphn@gmail.com' },
                                            { value: 'Anirudh Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Anirudh Doe" /></div><p>Anirudh Doe</p></div>, title: 'amirudh@gmail.com' },
                                            { value: 'Dhruvil Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Dhruvil Doe" /></div><p>Dhruvil Doe</p></div>, title: 'dhruvil@gmail.com' },
                                        ]}
                                        labelRender={labelRender}
                                    />
                                </Form.Item>
                            </div>
                        </Flex>
                        <Flex justify="flex-end" gap={10} align="center">
                            <Button key="back" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={confirmLoading}
                            >
                                Continue
                            </Button>
                        </Flex>
                    </Flex>
                </Form>
            </div>
        </Modal>
    )
}

export default AddConsultantModal;
