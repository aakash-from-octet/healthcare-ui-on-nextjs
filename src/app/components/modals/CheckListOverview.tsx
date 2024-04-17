'use client'
import { useState } from 'react';
import { Modal, Flex, Form, Button, Row, Col, Input, Select, Checkbox, Switch, Tag, Divider, Avatar } from 'antd';
import AiModal from './AiModal';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import Badge from '../../../../public/images/badge-head.svg';
import LargeChevron from '../../../../public/images/large-chevron.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DocRevise from '../../../../public/images/doc-revise.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocEffec from '../../../../public/images/doc-date.svg';
import DeleteIcon from '../../../../public/images/delete.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import DocName from '../../../../public/images/doc-name.svg';
import DocId from '../../../../public/images/doc-id.svg';
import CopyIcon from '../../../../public/images/copy.svg';
import ChevronRight from '../../../../public/images/chevron-right.svg';
import ScheduleIcon from '../../../../public/images/schedule-type.svg';
import DepartmentIcon from '../../../../public/images/department.svg';
import Department from '../../../../public/images/department.svg';
import CategoryIcon from '../../../../public/images/category.svg';
import DocAva1 from '../../../../public/images/doc-user1.svg';
import DocAva2 from '../../../../public/images/doc-user2.svg';
import DocAva3 from '../../../../public/images/doc-user3.svg';
import DocAva4 from '../../../../public/images/doc-user3.svg';
import AddCircleIcon from '../../../../public/images/add-circle.svg';
import AiStars from '../../../../public/images/ai-stars.svg';

interface CheckListOverviewProps {
    setOpen: any;
    open: boolean;
    viewOnly?: boolean;
    handleFinish?: any;
}
// DATA
const documentDetails = [
    { id: 1, label: 'Document Name', value: 'SOP', icon: <DocName /> },
    { id: 2, label: 'Document ID', value: '554545649878', icon: <DocId /> },
    { id: 3, label: 'Define By', value: 'AP', icon: <DocDefine /> },
    { id: 4, label: 'Revised Period', value: '2 Year', icon: <DocRevise /> },
    { id: 5, label: 'Issue Date', value: '22/11/2023', icon: <DocIssue /> },
    { id: 6, label: 'Effective Date', value: '25/11/2023', icon: <DocEffec /> }
];
const checklistData = [
    {
        id: 1,
        label: 'Waste Bins Clearance',
        frequency: 'Daily',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
        ],
    },
    {
        id: 2,
        label: 'Waste Bins Clearance',
        frequency: 'Monthly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
        ],
    },
    {
        id: 3,
        label: 'Waste Bins Clearance',
        frequency: 'Weekly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
        ],
    },
];

const CheckListOverview: React.FC<CheckListOverviewProps> = ({ setOpen, open, viewOnly, handleFinish }) => {
    const [steps, setSteps] = useState(viewOnly === true ? 1 : 0);
    const [openAi, setOpenAi] = useState(false);
    const [aiData, setAiData] = useState<any>('');
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleFinish()
        if(steps === 1) {
            setOpen(false);
            setSteps(0);
        } else {
            setSteps(1);
        }
    };
    const onCancel = () => {
        setOpen(false);
    };
    function dropdownRender(menu: any) {
        return (
          <div>
            {menu}
            <Input type="text" placeholder='Enter Group Name' className='select-option--input' />
            <div className="divider-menu select-option">
                <Button onClick={()=>{console.log('added')}} type="text">
                    + Add New
                </Button>
            </div>
          </div>
        );
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
            <div className="modal-lg--header relative">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <Badge />
                    <p className="modal-lg--title">License-Form 26 G</p>
                </Flex>
                {
                    !viewOnly ? 
                    <Flex gap={8} align='center' className='modal-header--breadcrumbs'>
                        <p className={steps === 0 ? 'active' : ''} onClick={()=>{setSteps(0)}}>Checklist</p>
                        <ChevronRight />
                        <p className={steps === 1 ? 'active' : ''} onClick={()=>{setSteps(1)}}>Overview</p>
                    </Flex> : ''
                }
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="checklist-overview"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        <Flex vertical className='modal-lg-forms'>
                            <Flex className="modal-lg-forms--header" justify='space-between' align='center'>
                                <p>Checklist Details</p>
                                <Button className='icon ai' onClick={()=>setOpenAi(true)}><AiStars />Use AI</Button>
                            </Flex>
                            <div className='body-content'>
                                <Row gutter={[20, 20]}>
                                    {documentDetails.map((item) => (
                                        <Col span={6} key={item.id}>
                                            <Flex gap={6} vertical className='section-details'>
                                                <Flex gap={6} align='center'>
                                                    {item.icon}
                                                    <p className='label'>{item.label}</p>
                                                </Flex>
                                                <p className='value'>{item.value}</p>
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
                        {/* SELECT GROUPS */}
                        {
                            steps === 0 ?
                            <>
                                <div className='select-group'>
                                    <Flex vertical gap={10} className='outside-icons'>
                                        <DeleteIcon />
                                        <CopyIcon />
                                    </Flex>
                                    <div className="select-group--body">
                                        <Flex gap={24} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'Task 1' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={6}>
                                                        <Switch className='custom-switch' defaultChecked size='small' />
                                                        <p>Images</p>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Row gutter={[20, 20]}>
                                                <Col span={12}>
                                                    <Flex align="center" gap={12}>
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <ScheduleIcon />
                                                            <p className="form-feild--custom">Schedule Type</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="scheduleType" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Select"
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
                                                        <Flex style={{ minWidth: '130px' }} gap={6} className="icon-dark">
                                                            <CategoryIcon />
                                                            <p className="form-feild--custom">Category</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="category" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                                <Select
                                                                    placeholder="Select"
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
                                                            <p className="form-feild--custom">User Name</p>
                                                        </Flex>
                                                        <p className="form-feild--seprator">:</p>
                                                        <div className="full">
                                                            <Form.Item name="userName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
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
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add remarks' />
                                    </div>
                                </div>
                                <Flex className='select-group--add' justify='center' align='center' gap={8}>
                                    <AddCircleIcon />
                                    <p>Add Checklist Task</p>
                                </Flex>
                            </>
                            :
                            <Flex vertical className='modal-lg-forms'>
                                <p className='header'>Your checklists</p>
                                <div className='body-content p-0'>
                                    <Row>
                                        {checklistData?.map((item) => (
                                            <Col span={24} className='checklist-data' key={item.id}>
                                                <Flex gap={16} vertical>
                                                    <Flex className='checklist-upper--sec' gap={10} vertical>
                                                        <Flex gap={10} align='center'>
                                                            <Checkbox onChange={() => console.log('Checkbox here')} className='checklist-checkbox'>{item.label}</Checkbox>
                                                            <Tag className={`checklist-tag tag-${item.frequency}`}>{item.frequency}</Tag>
                                                            <Divider className='m-0' type='vertical' />
                                                            <Flex gap={6} align='center'>
                                                                <p className='images-switch'>Images</p>
                                                                <Switch className='custom-switch' defaultChecked size='small' onChange={() => console.log('Switch here')} />
                                                            </Flex>
                                                        </Flex>
                                                        <p className='checklist-desc'>{item.desc}</p>
                                                    </Flex>
                                                    <Row gutter={[20, 20]} className='checklist-lower--sec' >
                                                        {/* department  */}
                                                        <Col span={5}>
                                                            <Flex gap={6} vertical className='section-details'>
                                                                <Flex gap={6} align='center'>
                                                                    <Department />
                                                                    <p className='label'>Department</p>
                                                                </Flex>
                                                                <p className='value'>{item.department}</p>
                                                            </Flex>
                                                        </Col>
                                                        {/* category   */}
                                                        <Col span={5}>
                                                            <Flex gap={6} vertical className='section-details'>
                                                                <Flex gap={6} align='center'>
                                                                    <CategoryIcon />
                                                                    <p className='label'>Category</p>
                                                                </Flex>
                                                                <p className='value'>{item.category}</p>
                                                            </Flex>
                                                        </Col>
                                                        {/* user name   */}
                                                        <Col span={5}>
                                                            <Flex gap={6} vertical className='section-details'>
                                                                <Flex gap={6} align='center'>
                                                                    <DocDefine />
                                                                    <p className='label'>User Name</p>
                                                                </Flex>
                                                                <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                                                                    {item.users.map((avatar) => (
                                                                        <Avatar size='small' key={avatar.avatarId} src={avatar.src} />
                                                                    ))}
                                                                </Avatar.Group>
                                                            </Flex>
                                                        </Col>
                                                    </Row>
                                                </Flex>
                                            </Col>
                                        ))}

                                    </Row>
                                </div>
                            </Flex>
                        }
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
                                {steps === 0 ? 'Save & Next' : viewOnly ? 'Submit' : 'Create Checklist'}
                            </Button>
                        </Flex>
                    </div>
                </Form>
            </div>
            <AiModal mode="checklist" open={openAi} setOpen={setOpenAi} aiData={aiData} setAiData={setAiData} />
        </Modal>
    )
};

export default CheckListOverview;