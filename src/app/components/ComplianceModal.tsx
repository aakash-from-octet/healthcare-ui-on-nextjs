'use client'
import { Form, Input, Button, Modal, Flex } from 'antd';
// IMAGES
import CloseIcon from '../../../public/images/close-small.svg';
import FormTextIcon from '../../../public/images/form-text.svg';
import DocumentIcon from '../../../public/images/document-edit.svg';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

interface ComplianceModalProps {
    open: boolean; 
    handleOk: any;
    handleCancel: any;
    formData: any;
    onFinish: any;
    briefDescription: any;
    detailedDescription: any;
    confirmLoading: boolean
}
const ComplianceModal: React.FC<ComplianceModalProps> = ({open, handleOk, handleCancel, formData, onFinish, briefDescription, detailedDescription, confirmLoading}) => {
    // TEXT EDITOR
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],,
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link']
        ]
    };
    const DynamicReactQuill = dynamic(() => import("react-quill"), {
        ssr: false,
    });
    return (
        <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={<CloseIcon />}
            footer={false}
            centered
        >
                <div className="modal--header">
                <p className="modal--title">{formData === 1 ? 'Create New Section' : formData === 2 ?'Create New Sub Section' : 'Create Sub2 Section'}</p>
            </div>
            <div className="modal--body">
                <Form
                    className="modal-from-small"
                    onFinish={onFinish}
                    name="create-new-section"
                >
                    <Form.Item name="sectionName" label="" rules={[{ required: true }]}>
                        <Flex align="center" gap={12}>
                            <Flex style={{ minWidth: '151px' }} gap={6}>
                                <FormTextIcon />
                                <p className="form-feild--custom">Section Name</p>
                            </Flex>
                            <p className="form-feild--seprator">:</p>
                            <Input placeholder="Type..." />
                        </Flex>
                    </Form.Item>
                    <Form.Item label="">
                        <Flex gap={12}>
                            <Flex style={{ minWidth: '151px' }} gap={6}>
                                <DocumentIcon />
                                <p className="form-feild--custom">Brief Description</p>
                            </Flex>
                            <p className="form-feild--seprator">:</p>
                            <div className="w-full">
                                <DynamicReactQuill
                                    defaultValue={briefDescription}
                                    theme="snow"
                                    modules={modules}
                                    placeholder="Type.."
                                />
                            </div>
                        </Flex>
                    </Form.Item>
                    <Form.Item label="">
                        <Flex gap={12}>
                            <Flex style={{ minWidth: '151px' }} gap={6}>
                                <DocumentIcon />
                                <p className="form-feild--custom">Detailed Description</p>
                            </Flex>
                            <p className="form-feild--seprator">:</p>
                            <div className="w-full">
                                <DynamicReactQuill
                                    theme="snow"
                                    defaultValue={detailedDescription}
                                    modules={modules}
                                    placeholder="Type.."
                                />
                            </div>
                        </Flex>
                    </Form.Item>
                    <Flex justify="flex-end" gap={10} align="center">
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={confirmLoading}
                        >
                            Create
                        </Button>
                    </Flex>
                </Form>
            </div>
        </Modal>
    )
};

export default ComplianceModal;