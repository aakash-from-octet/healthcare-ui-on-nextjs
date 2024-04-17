import React, { useEffect, useState, useRef } from 'react';
import { Button, Form, Flex, Modal, Row, Col, Avatar, Input, Table, DatePicker, Select } from 'antd';
import Pagination from '../Pagination';

import Badge from '../../../../public/images/badge-head.svg';
import ModalLgClose from '../../../../public/images/lg-modal-close.svg';
import DocName from '../../../../public/images/doc-name.svg';
import DocId from '../../../../public/images/doc-id.svg';
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DocRevise from '../../../../public/images/doc-revise.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocEffec from '../../../../public/images/doc-date.svg';
import DocUser from '../../../../public/images/doc-user.svg';
import DocTemp from '../../../../public/images/doc-template.svg';
import DocSave from '../../../../public/images/doc-template-2.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import Doc from '../../../../public/images/document.svg';
import FormTextIcon from '../../../../public/images/form-text.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import DocReview from '../../../../public/images/doc-review.svg';
import DocEdit from '../../../../public/images/document-edit.svg';
import UploadIcon from '../../../../public/images/upload.svg';
import CrossIcon from '../../../../public/images/cross.svg';

// avatars 
import DocAva1 from '../../../../public/images/doc-user1.svg';
import DocAva2 from '../../../../public/images/doc-user2.svg';
import DocAva3 from '../../../../public/images/doc-user3.svg';
import DocAva4 from '../../../../public/images/doc-user3.svg';



const documentDetails = [
    { id: 1, label: 'Document Name', value: 'SOP', icon: <DocName /> },
    { id: 2, label: 'Document ID', value: '554545649878', icon: <DocId /> },
    { id: 3, label: 'Define By', value: 'AP', icon: <DocDefine /> },
    { id: 4, label: 'Revised Period', value: '2 Year', icon: <DocRevise /> },
    { id: 5, label: 'Issue Date', value: '22/11/2023', icon: <DocIssue /> },
    { id: 6, label: 'Effective Date', value: '25/11/2023', icon: <DocEffec /> },
    {
        id: 7, label: 'User Name', avatar: true, avatars: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ], value: 'avatars', icon: <DocUser />
    },
    { id: 8, label: 'Template', value: 'Abc.filename.pdf', icon: <DocTemp />, icon2: <DocSave /> },
];
const { TextArea } = Input;

const dataSource = [
    {
        key: '1',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '2',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '3',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '4',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '5',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '6',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '7',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '8',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '9',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
    {
        key: '10',
        fileName: 'Abc.filename.pdf',
        version: 1,
        date: '31/12/2023',
    },
];

const columns = [
    {
        title: 'File',
        dataIndex: 'fileName',
        key: 'fileName',
        width: '40%',
        render: (text?: string) => (
            <Flex gap={4} align='center'>
                <Doc />
                <p>{text}</p>
            </Flex>
        )
    },
    {
        title: 'Version No.',
        dataIndex: 'version',
        key: 'version',
        width: '25%',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: '25%',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: '10%',
        render: () => (
            <Button icon={<DocSave />} type='default' className='outline'>Download</Button>
        ),
    },
];

const LicenseFormModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen?: any; setIsModalOpen?: any; }) => {
    const [form] = Form.useForm();
    const [displayData, setDisplayData] = useState<any>([]);

    useEffect(() => {
        setDisplayData(dataSource.slice(0, 8));
    }, [dataSource]);

    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk();
    };

    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // FILES
    const [files, setFiles] = useState<File[]>([]);
    const [droping, setDroping] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
       e.preventDefault();
       const filesArray = Array.from(e.dataTransfer.files) as File[];
       setFiles(prevFiles => [...prevFiles, ...filesArray]);
       setDroping(false)
     };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
       e.preventDefault();
       setDroping(true)
     };
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const newFilesArray = Array.from(e.target.files as FileList) as File[];
         setFiles(prevFiles => [...prevFiles, ...newFilesArray]);
         if (fileInputRef.current) {
             fileInputRef.current.value = '';
         }
     };
    const handleFileRemove = (index: number) => {
       const newFiles = [...files];
       newFiles.splice(index, 1);
       setFiles(newFiles);
     };
    const openFileDialog = () => {
       if (fileInputRef.current) {
         fileInputRef.current.click();
       }
     };
    return (
        <Modal
            centered
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            className='full-screen--modal'
            footer={false}
            closeIcon={<ModalLgClose />}
        >
            <div className="modal-lg--header">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <Badge />
                    <p className="modal-lg--title">License-Form 26 G</p>
                </Flex>
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="license-form"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container' vertical>

                        {/* document details  */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Document Details</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    {documentDetails.map((item) => (
                                        <Col span={6} key={item.id}>
                                            <Flex gap={6} vertical className='section-details'>
                                                <Flex gap={6} align='center'>
                                                    {item.icon}
                                                    <p className='label'>{item.label}</p>
                                                    {item.icon2 && item.icon2}
                                                </Flex>
                                                {item.avatar && item.avatars.length > 0 ? (
                                                    <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                                                        {item.avatars.map((avatar) => (
                                                            <Avatar size='small' key={avatar.avatarId} src={avatar.src} />
                                                        ))}
                                                    </Avatar.Group>
                                                ) : (
                                                    <p className='value'>{item.value}</p>
                                                )}
                                            </Flex>
                                        </Col>
                                    ))}

                                </Row>
                            </div>
                            <Flex gap={6} align='center' className='footer'>
                                <InfoOutline />
                                <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                            </Flex>
                        </Flex>

                        {/* Version History  */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Upload Version</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    <Col span={12}>
                                        <Form.Item name="versionNo" label="" rules={[{ required: true }]}>
                                            <Flex align="center" gap={12}>
                                                <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                    <FormTextIcon />
                                                    <p className="form-feild--custom">Version No</p>
                                                </Flex>
                                                <p className="form-feild--seprator">:</p>
                                                <Input placeholder="Type..." />
                                            </Flex>
                                        </Form.Item>
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
                                                <p className="form-feild--custom">Review Date</p>
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
                                                <DocReview />
                                                <p className="form-feild--custom">Next Reminder</p>
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
                                    <Col span={24}>
                                        <Flex align="" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <DocEdit />
                                                <p className="form-feild--custom">Amendment</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="Amendment" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                    <TextArea placeholder="Type..." autoSize={{ minRows: 3, }} />
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                    <Col span={24}>
                                        <Flex align="" gap={12}>
                                            <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                <Doc />
                                                <p className="form-feild--custom">Select File</p>
                                            </Flex>
                                            <p className="form-feild--seprator">:</p>
                                            <div className="full">
                                                <Form.Item name="selectedFiles" label="" style={{marginBottom: 0}}>
                                                    <Flex vertical gap={14}>
                                                        <Flex
                                                            className={droping ? "drop-zone--custom drop" : "drop-zone--custom"}
                                                            onMouseLeave={()=>{setDroping(false)}}
                                                            onDrop={handleDrop}
                                                            onDragOver={handleDragOver}
                                                            onClick={openFileDialog}
                                                            align='center'
                                                            gap={8}
                                                        >
                                                            <Button>
                                                                <UploadIcon />
                                                                Choose File
                                                            </Button>
                                                            <input
                                                                ref={fileInputRef}
                                                                type="file"
                                                                style={{ display: 'none' }}
                                                                onChange={handleFileInputChange}
                                                                multiple
                                                            />
                                                            <p>(Drag & Drop file or upload by clicking button)</p>
                                                        </Flex>
                                                        <Flex className="file-list" gap={12} wrap='wrap'>
                                                            {files.map((file, index) => (
                                                                <Flex key={index} className="file-item" gap={10} align='center'>
                                                                    <Flex key={index} gap={4} align='center'>
                                                                        <Doc />
                                                                        <p>{file.name}</p>
                                                                    </Flex>
                                                                    <Button className='only-icon' onClick={() => handleFileRemove(index)}><CrossIcon /></Button>
                                                                </Flex>
                                                            ))}
                                                        </Flex>
                                                    </Flex>
                                                </Form.Item>
                                            </div>
                                        </Flex>
                                    </Col>
                                </Row>
                            </div>
                        </Flex>
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Version History</p>
                            <div className='body-content'>
                                <Table
                                    dataSource={displayData}
                                    columns={columns}
                                    className='form-outline--table'
                                    pagination={false}
                                />
                                <Pagination setDisplayData={setDisplayData} data={dataSource} />

                            </div>

                        </Flex>

                    </Flex>

                    <div className='modal-lg--footer'>
                        <Flex justify='space-between' className='footer-content'>
                            <Button key="back" onClick={handleCancel}>
                                Reset
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Flex>
                    </div>

                </Form>
            </div>
        </Modal >

    );
};

export default LicenseFormModal;
