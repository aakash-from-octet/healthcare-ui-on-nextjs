'use client'
import React, { useState } from 'react';
import { Modal, Flex, Form, Row, Col, Select, DatePicker, Button, Checkbox } from "antd";
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import DownIcon from '../../../../public/images/chevron.svg';
import DepartmentIcon from '../../../../public/images/department.svg';
import AddUserIcon from '../../../../public/images/add-user.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import AuditMode from '../../../../public/images/audit-mode.svg';
import Auditicon from '../../../../public/images/document-added.svg';


interface AddAuditProps {
    open: any; 
    setOpen: any; 
}
const AddAudit: React.FC<AddAuditProps> = ({open, setOpen}) => {
    const onFinish = (values: any) => {
        console.log(values, 'values');
        setOpen(false);
    }
    const onCancel = () => {
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onOk={onFinish}
            onCancel={onCancel}
            closeIcon={<CloseIcon />}
            footer={false}
            centered
            className='full-screen--modal overlay'
        >
            <div className="modal-lg--header">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <p className="modal-lg--title">Define Evidence</p>
                </Flex>
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="add-audit-form"
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Schedule Audit</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <DocIssue />
                                                <p className="form-feild--custom">Audit From</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="auditFrom" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <DocIssue />
                                                <p className="form-feild--custom">Audit To</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="auditTo" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <AuditMode />
                                                <p className="form-feild--custom">Mode of Audit</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="modeOfAudit" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="Select mode"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <Auditicon />
                                                <p className="form-feild--custom">Audit Type</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="auditType" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="Select type"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <DocIssue />
                                                <p className="form-feild--custom">Priority</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="priority" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="priority"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <DepartmentIcon />
                                                <p className="form-feild--custom">Department</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="department" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="Select department"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <AddUserIcon />
                                                <p className="form-feild--custom">Auditor</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="auditor" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="Select auditor"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="center" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <AddUserIcon />
                                                <p className="form-feild--custom">Participants</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="participants" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <Select
                                                        placeholder="Select user"
                                                        allowClear
                                                        suffixIcon={<DownIcon />}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'option 2' },
                                                            { value: 'option-3', label: 'option 3' },
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                </Row>
                                <Form.Item name="description" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                    <textarea className='in-textarea' placeholder="Type description..." />
                                </Form.Item>
                            </div>
                        </Flex>
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Required Fields</p>
                            <Flex className='body-content' vertical gap={15}>
                                <Checkbox className='checklist-checkbox'>MOM</Checkbox>
                                <Checkbox className='checklist-checkbox'>Opening Meeting</Checkbox>
                                <Checkbox className='checklist-checkbox'>Closing Meeting</Checkbox>
                                <Checkbox className='checklist-checkbox'>Upload Images</Checkbox>
                            </Flex>
                        </Flex>
                    </Flex>
                    <div className='modal-lg--footer'>
                        <Flex justify='space-between' className='footer-content'>
                            <Button key="back" onClick={onCancel}>
                                Back
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Create
                            </Button>
                        </Flex>
                    </div>
                </Form>
            </div>
        </Modal>
    )
};

export default AddAudit;