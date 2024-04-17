import { Avatar, Button, Col, Flex, Form, Input, Modal, Row, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import SuccessModal from './SuccessModal';
import Badge from '../../../../public/images/badge-head.svg';
import DocEffec from '../../../../public/images/doc-date.svg';
import Adduser from '../../../../public/images/add-user.svg';
import AuditMode from '../../../../public/images/audit-mode.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocName from '../../../../public/images/doc-name.svg';
import DepartmentIcon from '../../../../public/images/department.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import ModalLgClose from '../../../../public/images/lg-modal-close.svg';
import DocUser from '../../../../public/images/doc-user.svg';
import AddUser from '../../../../public/images/add-user.svg';
import ConnectionIcon from '../../../../public/images/connecttion.svg';
import RedFlag from '../../../../public/images/red-flag.svg';
import Auditicon from '../../../../public/images/document-added.svg';
// tabs 
import Detail from '../../../../public/images/book.svg';
import Mom from '../../../../public/images/mom.svg';
import AuditRepo from '../../../../public/images/audit-repo.svg';
// avatars 
import DocAva1 from '../../../../public/images/doc-user1.svg';
import DocAva2 from '../../../../public/images/doc-user2.svg';
import DocAva3 from '../../../../public/images/doc-user3.svg';
import DocAva4 from '../../../../public/images/doc-user3.svg';
import Pagination from '../Pagination';

const { TextArea } = Input;
const auditDetails = [
    { id: 1, label: 'Audit Name', value: 'H1 Internal Audit for ISO 1521', icon: <DocName /> },
    { id: 2, label: 'Audit From', value: '23/12/2023 08:00 AM', icon: <DocIssue /> },
    { id: 3, label: 'Audit To', value: '26/12/2023 16:00 PM', icon: <DocIssue /> },
    { id: 4, label: 'Mode of Audit', value: 'H1 Internal Audit for ISO 1521', icon: <AuditMode /> },
    { id: 5, label: 'Audit Type', value: 'Internal', icon: <Auditicon /> },
    { id: 6, label: 'Priority', value: 'Mandatory', icon: <DocIssue /> },
    { id: 7, label: 'Department', value: 'Mandatory', icon: <DepartmentIcon /> },
    {
        id: 8, label: 'Auditors', avatar: true, avatars: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ], value: 'avatars', icon: <Adduser />
    },
    {
        id: 9, label: 'Participants', avatar: true, avatars: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ], value: 'avatars', icon: <Adduser />
    },

];
const pageTabs = [
    {
        icon: <Detail />,
        text: 'Details',
    },
    {
        icon: <Mom />,
        text: 'MOM',
    },
    {
        icon: <AuditRepo />,
        text: 'Audit Report',
    }
];
const openingMeetingData: any = [
    { label: 'Audit From', value: '23/12/2023 08:00 AM' },
    { label: 'Auditor', value: 'John.doe@gmail.com' },
    {
        label: 'Participants', value: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ]
    },
];
const closingMeetingData: any = [
    { label: 'Audit To', value: '23/12/2023 08:00 AM' },
    { label: 'Auditor', value: 'John.doe@gmail.com' },
    {
        label: 'Participants', value: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ]
    },
];
// tables  
const dataSource = [
    {
        key: '1',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '2',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '3',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '4',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '5',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '6',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '7',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '8',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },
    {
        key: '9',
        taskName: { head: 'H1 Internal Audit for ISO 1521', subhead: `1.3.1 Quality System - Responsibility` },
        doctype: 'SOP',
        details: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx',
        nc: '30',
        remark: 'NABH/HR 1 HR Training.docx_1448_4507_1345_2019_8_12_10_14_20_953.docx'
    },

];
const columns = [
    {
        title: 'Name of tasks',
        dataIndex: 'taskName',
        key: '1',
        width: '30%',
        render: (name: { head: string, subhead: string }) => (
            <Flex gap={8} vertical>
                <p className="image-name">{name?.head}</p>
                <Flex gap={4}>
                    <ConnectionIcon />
                    <p>{name?.subhead}</p>
                </Flex>
            </Flex>
        ),
    },
    {
        title: 'Document Type',
        dataIndex: 'doctype',
        key: '2',
        width: '15%',
    },
    {
        title: 'Details',
        dataIndex: 'details',
        key: '3',
        width: '25%',
        render: (text?: string) => (
            <p className='tmax-200'>{text}</p>
        )
    },
    {
        title: 'C/NC ',
        dataIndex: 'nc',
        key: '4',
        width: '10%',
        render: (text: string) => {
            return (
                <p className={text ? "flag" : ''}>
                    {text && <><RedFlag /> {text + ' ' + 'NC'} </>}
                </p>
            )
        },
    },
    {
        title: 'Remark',
        dataIndex: 'remark',
        key: '5',
        width: '20%',
        render: (text?: string) => (
            <p className='tmax-200'>{text}</p>
        )
    }
];

const UpcomingAuditsModal = ({ isAuditModalOpen, setIsAuditModalOpen, reviewAudit }: { isAuditModalOpen?: any; setIsAuditModalOpen?: any; reviewAudit?: any }) => {
    const [form] = Form.useForm();
    const [pageTabsActive, setPageTabsActive] = useState(0);
    const [value, setValue] = useState('');
    const [displayData, setDisplayData] = useState<any>([]);
    const [success, setSuccess] = useState<boolean>(false);
    useEffect(() => {
        setDisplayData(dataSource.slice(0, 8));
    }, [dataSource]);
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk();
    };
    const handleOk = () => {
        if(reviewAudit === true) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            setTimeout(() => {
                setIsAuditModalOpen(false);
            }, 3100);
        } else {
            setIsAuditModalOpen(false);
        }
    }
    const handleCancel = () => {
        setIsAuditModalOpen(false);
    };

    return (
        <Modal
            centered
            open={isAuditModalOpen}
            onOk={() => setIsAuditModalOpen(false)}
            onCancel={() => setIsAuditModalOpen(false)}
            className='full-screen--modal'
            footer={false}
            closeIcon={<ModalLgClose />}
        >
            <div className="modal-lg--header">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <Badge />
                    <p className="modal-lg--title">Daily cleaning</p>
                </Flex>
            </div>
            {/* tabs  */}
            <Flex justify='center' className='audit-modal--tabs'>
                {pageTabs.map((tab: any, index: any) => (
                    <div className={pageTabsActive === index ? "custom-tab active" : 'custom-tab'} key={index} onClick={() => { setPageTabsActive(index) }}>
                        <Flex align="center" gap={10}>
                            {tab.icon}
                            <p>{tab.text}</p>
                        </Flex>
                    </div>
                ))}
            </Flex>
            <div className="modal-lg--body">
                {pageTabsActive === 0 ? (
                    <Flex gap={24} className='form-container sec' vertical>
                        {/* audit details */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Audit Details</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    {auditDetails.map((item) => (
                                        <Col span={8} key={item.id}>
                                            <Flex gap={6} vertical className='section-details'>
                                                <Flex gap={6} align='center'>
                                                    {item.icon}
                                                    <p className='label'>{item.label}</p>
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
                    </Flex>
                ) : pageTabsActive === 1 ? (
                    <Flex gap={24} className='form-container sec' vertical>
                        {/* opening meeting  */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Opening Meeting</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <DocIssue />
                                                <p className='label'>Audit From</p>
                                            </Flex>
                                            <p className='value'>{openingMeetingData[0]?.value}</p>
                                        </Flex>
                                    </Col>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <AddUser />
                                                <p className='label'>Auditor</p>
                                            </Flex>
                                            <Tag className='value value-tag'>{openingMeetingData[1]?.value}</Tag>
                                        </Flex>
                                    </Col>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <AddUser />
                                                <p className='label'>Participants</p>
                                            </Flex>
                                            <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                                                {openingMeetingData[2].value.map((avatar?: any) => (
                                                    <Avatar size='small' key={avatar.avatarId} src={avatar.src} />
                                                ))}
                                            </Avatar.Group>
                                        </Flex>
                                    </Col>
                                    <Col span={24}>
                                        <Flex gap={10} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <DocName />
                                                <p className='label'>Remark</p>
                                            </Flex>
                                            <TextArea
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                placeholder="Name"
                                                autoSize={{ minRows: 5, maxRows: 8 }}
                                            />
                                        </Flex>
                                    </Col>
                                </Row>
                            </div>
                        </Flex>

                        {/* closed meeting */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Closing Meeting</p>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <DocIssue />
                                                <p className='label'>Audit To</p>
                                            </Flex>
                                            <p className='value'>{closingMeetingData[0]?.value}</p>
                                        </Flex>
                                    </Col>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <AddUser />
                                                <p className='label'>Auditor</p>
                                            </Flex>
                                            <Tag className='value value-tag'>{closingMeetingData[1]?.value}</Tag>
                                        </Flex>
                                    </Col>
                                    <Col span={8}>
                                        <Flex gap={6} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <AddUser />
                                                <p className='label'>Participants</p>
                                            </Flex>
                                            <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                                                {closingMeetingData[2].value.map((avatar?: any) => (
                                                    <Avatar size='small' key={avatar.avatarId} src={avatar.src} />
                                                ))}
                                            </Avatar.Group>
                                        </Flex>
                                    </Col>
                                    <Col span={24}>
                                        <Flex gap={10} vertical className='section-details'>
                                            <Flex gap={6} align='center'>
                                                <DocName />
                                                <p className='label'>Remark</p>
                                            </Flex>
                                            <TextArea
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                placeholder="Name"
                                                autoSize={{ minRows: 5, maxRows: 8 }}
                                            />
                                        </Flex>
                                    </Col>



                                </Row>
                            </div>
                        </Flex>
                    </Flex>
                ) : (
                    <div className="form-container sec">
                        <Table
                            dataSource={displayData}
                            columns={columns}
                            pagination={false}
                        />
                        <Pagination setDisplayData={setDisplayData} data={dataSource} />
                    </div>
                )}
                <div className='modal-lg--footer sec'>
                    <Flex justify='space-between' className='footer-content'>
                        <Button key="back" onClick={handleCancel}>
                            Back
                        </Button>
                        <Button
                            type="primary"
                            onClick={handleOk}
                        >
                            {reviewAudit ? 'Mark As Completed' : 'Done'}
                        </Button>
                    </Flex>
                </div>
            </div>
            {reviewAudit && <SuccessModal open={success} setOpen={setSuccess} title='Audit Successfully Completed' text='Lorim ipsume is simplly dummy text that will go here dummy text '/>}
        </Modal >
    );
};

export default UpcomingAuditsModal;
