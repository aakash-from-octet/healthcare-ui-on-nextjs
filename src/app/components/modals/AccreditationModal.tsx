'use client'
import { useState } from 'react';
import { Modal, Flex, Form, Button, Row, Col, Input, Select, DatePicker } from 'antd';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import AddForm from '../../../../public/images/add-form.svg';
import AddChecklist from '../../../../public/images/add-checklist.svg';
import AddDocuments from '../../../../public/images/add-documents.svg';
import AddAlerts from '../../../../public/images/add-alert.svg';
import AddReports from '../../../../public/images/add-report.svg';
import FormTextIcon from '../../../../public/images/form-text.svg';
import ScheduleIcon from '../../../../public/images/schedule-type.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import DocId from '../../../../public/images/doc-id.svg';
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DepartmentIcon from '../../../../public/images/department.svg';
import DocRevise from '../../../../public/images/doc-revise.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocEffec from '../../../../public/images/doc-date.svg';
import DocReview from '../../../../public/images/doc-review.svg';
import DocEdit from '../../../../public/images/document-edit.svg';


interface AccreditationModalProps {
    handleOk: any;
    handleCancel: any;
    open: boolean;
}
const { TextArea } = Input;
const AccreditationModal: React.FC<AccreditationModalProps> = ({ handleOk, handleCancel, open }) => {
    const [form] = Form.useForm();
    const formtypes = [
        { label: 'Form', value: 'form', icon: <AddForm/> },
        { label: 'Checklist', value: 'checklist', icon: <AddChecklist/> },
        { label: 'Documents', value: 'document', icon: <AddDocuments/> },
        { label: 'Alert', value: 'alert', icon: <AddAlerts/> },
        { label: 'Report', value: 'report', icon: <AddReports/> }
    ];
    const [formType, setFormType] = useState<any>([]);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk();
        setFormType([])
    };
    const onCancel = () => {
        setFormType([]);
        handleCancel();
    };
    return (
        <Modal
            open={open}
            onOk={handleOk}
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
                    name="acceditation-form"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        {
                            formType.length === 0 ?
                            <Flex gap={24} vertical align='center' justify='center'>
                                <Flex vertical gap={20} className='formType-select'>
                                    <h2>Select the evidence type in order to define the evidence.</h2>
                                    <div className="info--card">
                                        <div className="info--card--head">
                                            <p>Type list</p>
                                        </div>
                                        <Flex gap={4} vertical className="info--card--body">
                                            {formtypes.map((item, index) => (
                                                <Flex gap={8} align='center' className="formType-select--item" key={index} onClick={() => { setFormType([...formType, item.value])}}>
                                                    {item.icon}
                                                    <p>{item.label}</p>
                                                </Flex>
                                            ))}
                                        </Flex>
                                    </div>
                                </Flex>
                            </Flex> : 
                            <>
                                <Flex className='define-forms' gap={8} align='center' justify='center' onClick={()=>setShowOptions(true)}>
                                    <p>Define New Evidence</p>
                                    <DownIcon />
                                </Flex>
                                {
                                    formType.includes('form') ?
                                    <Flex vertical className='modal-lg-forms'>
                                        <p className='header'>Form Details</p>
                                        <div className='body-content'>
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Form.Item name="formName" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Form Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item name="formId" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                                <DocId />
                                                                <p className="form-feild--custom">Form ID</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Define By</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="defineBy" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                                    placeholder="Account"
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
                                                            <ScheduleIcon />
                                                            <p className="form-feild--custom">Schedule Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="scheduleType" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Account"
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
                                                            <DocRevise />
                                                            <p className="form-feild--custom">Revised Period</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="revisedPeriod" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Input
                                                                    type="number"
                                                                    addonAfter={
                                                                        <Select
                                                                            suffixIcon={<DownIcon />}
                                                                            placeholder="Invite as"
                                                                            options={[
                                                                                { value: 'option-2', label: 'Year' },
                                                                                { value: 'option-1', label: 'Month' },
                                                                                { value: 'option-3', label: 'Week' },
                                                                            ]}
                                                                        />
                                                                    }
                                                                    placeholder={`Enter a period`}
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocIssue />
                                                            <p className="form-feild--custom">Issue Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="issueDate" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocEffec />
                                                            <p className="form-feild--custom">Effective Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="effectiveDate" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocReview />
                                                            <p className="form-feild--custom">Next Review</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="nextReview" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">User Name</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="userName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Account"
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
                                    </Flex> :  ''
                                }
                                {
                                    formType.includes('report') ?
                                    <Flex vertical className='modal-lg-forms'>
                                        <p className='header'>Create Report</p>
                                        <div className='body-content'>
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Form.Item name="documentNameReport" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Document Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocIssue />
                                                            <p className="form-feild--custom">Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="typeReport" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="S/W Alert"
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
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Define By</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="defineByReport" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                    <Form.Item name="documentIDReport" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <DocId />
                                                                <p className="form-feild--custom">Document ID</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Source </p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="sourceReport" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                    <Form.Item name="alertNameReport" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Alert Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item name="remarkReport" label="" rules={[{ required: true }]}>
                                                        <Flex gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <DocEdit />
                                                                <p className="form-feild--custom">Remark</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <TextArea
                                                                placeholder="Type..."
                                                                autoSize={{ minRows: 4, }}
                                                            />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Flex> : ''
                                }
                                {
                                    formType.includes('alert') ?
                                    <Flex vertical className='modal-lg-forms'>
                                        <p className='header'>Create Alert</p>
                                        <div className='body-content'>
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Form.Item name="documentNameAlert" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Document Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocIssue />
                                                            <p className="form-feild--custom">Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="typeAlert" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="S/W Alert"
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
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Define By</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="defineByAlert" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                    <Form.Item name="documentIDAlert" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <DocId />
                                                                <p className="form-feild--custom">Document ID</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Source </p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="sourceAlert" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                    <Form.Item name="alertNameAlert" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Alert Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item name="remarkAlert" label="" rules={[{ required: true }]}>
                                                        <Flex gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <DocEdit />
                                                                <p className="form-feild--custom">Remark</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <TextArea
                                                                placeholder="Type..."
                                                                autoSize={{ minRows: 4, }}
                                                            />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Flex> : ''
                                }
                                {
                                    formType.includes('checklist') ?
                                    <Flex vertical className='modal-lg-forms'>
                                        <p className='header'>Checklist Details</p>
                                        <div className='body-content'>
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Form.Item name="checklistName" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Checklist Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item name="checklistId" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                                <DocId />
                                                                <p className="form-feild--custom">Checklist ID</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Define By</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="defineByChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                            <p className="form-feild--custom">Issue Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="issueDateChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocEffec />
                                                            <p className="form-feild--custom">Effective Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="effectiveDateChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocRevise />
                                                            <p className="form-feild--custom">Revised Period</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="revisedPeriodChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Input
                                                                    type="number"
                                                                    addonAfter={
                                                                        <Select
                                                                            suffixIcon={<DownIcon />}
                                                                            placeholder="Invite as"
                                                                            options={[
                                                                                { value: 'option-2', label: 'Year' },
                                                                                { value: 'option-1', label: 'Month' },
                                                                                { value: 'option-3', label: 'Week' },
                                                                            ]}
                                                                        />
                                                                    }
                                                                    placeholder={`Enter a period`}
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                            <DocReview />
                                                            <p className="form-feild--custom">Review Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="nextReviewChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                            </Row>
                                            <Form.Item name="descriptionChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                <textarea className='in-textarea' placeholder="Type description..." />
                                            </Form.Item>
                                            <Form.Item name="remarksChecklist" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                <textarea className='in-textarea' placeholder="Type Remarks..." />
                                            </Form.Item>
                                        </div>
                                    </Flex>  : ''
                                }
                                {
                                    formType.includes('document') ?
                                    <Flex vertical className='modal-lg-forms'>
                                        <p className='header'>Document Details</p>
                                        <div className='body-content'>
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Form.Item name="documentName" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <FormTextIcon />
                                                                <p className="form-feild--custom">Document Name</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item name="docuementId" label="" rules={[{ required: true }]}>
                                                        <Flex align="center" gap={12}>
                                                            <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                                <DocId />
                                                                <p className="form-feild--custom">Document ID</p>
                                                            </Flex>
                                                            <p className="form-feild--seprator">:</p>
                                                            <Input placeholder="Type..." />
                                                        </Flex>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocDefine />
                                                            <p className="form-feild--custom">Define By</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="defineByDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="CAP"
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
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DepartmentIcon />
                                                            <p className="form-feild--custom">Document Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="departmentDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Account"
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
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocIssue />
                                                            <p className="form-feild--custom">Issue Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="issueDateDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocEffec />
                                                            <p className="form-feild--custom">Effective Date</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="effectiveDateDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <DocRevise />
                                                            <p className="form-feild--custom">Revised Period</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="revisedPeriodDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Input
                                                                    type="number"
                                                                    addonAfter={
                                                                        <Select
                                                                            suffixIcon={<DownIcon />}
                                                                            placeholder="Invite as"
                                                                            options={[
                                                                                { value: 'option-2', label: 'Year' },
                                                                                { value: 'option-1', label: 'Month' },
                                                                                { value: 'option-3', label: 'Week' },
                                                                            ]}
                                                                        />
                                                                    }
                                                                    placeholder={`Enter a period`}
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <ScheduleIcon />
                                                            <p className="form-feild--custom">Schedule Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="scheduleTypeDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Account"
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
                                            <Form.Item name="descriptionDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                <textarea className='in-textarea' placeholder="Type description..." />
                                            </Form.Item>
                                        </div>
                                    </Flex> : ''
                                }
                            </>
                        }
                    </Flex>
                    {
                        formType.length !== 0 &&
                        <div className='modal-lg--footer'>
                            <Flex justify='space-between' className='footer-content'>
                                <Button key="back" onClick={onCancel}>
                                    Reset
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Define
                                </Button>
                            </Flex>
                        </div>
                    }
                </Form>
            </div>
            {
                showOptions ?
                <div className='modal-overlay-custom'>
                    <div className="info--card">
                        <div className="info--card--head">
                            <p>Type list</p>
                        </div>
                        <Flex gap={4} vertical className="info--card--body">
                            {formtypes.map((item, index) => (
                                <Flex gap={8} align='center' className="formType-select--item" key={index} onClick={() => { setFormType([...formType, item.value]); setShowOptions(false)}}>
                                    {item.icon}
                                    <p>{item.label}</p>
                                </Flex>
                            ))}
                        </Flex>
                    </div>
                </div> : ''
            }
        </Modal>
    )
};

export default AccreditationModal;