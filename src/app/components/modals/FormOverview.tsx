'use client'
import { useState } from 'react';
import { Modal, Flex, Form, Button, Row, Col, Input, Select, Checkbox, Avatar, Switch, DatePicker, TimePicker } from 'antd';
import AiModal from './AiModal';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import Badge from '../../../../public/images/badge-head.svg';
import LargeChevron from '../../../../public/images/large-chevron.svg';
import FormTextIcon from '../../../../public/images/form-text.svg';
import ScheduleIcon from '../../../../public/images/schedule-type.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DepartmentIcon from '../../../../public/images/department.svg';
import DocRevise from '../../../../public/images/doc-revise.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocEffec from '../../../../public/images/doc-date.svg';
import DocReview from '../../../../public/images/doc-review.svg';
import DocEdit from '../../../../public/images/category.svg';
import DocUser from '../../../../public/images/doc-user.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import ClockIcon from '../../../../public/images/clock.svg';
import CalendarIcon from '../../../../public/images/calendar.svg';
import DeleteIcon from '../../../../public/images/delete.svg';
import CopyIcon from '../../../../public/images/copy.svg';
import ChevronRight from '../../../../public/images/chevron-right.svg';
import AddCircleIcon from '../../../../public/images/add-circle.svg';
import AiStars from '../../../../public/images/ai-stars.svg';

// avatars 
import DocAva1 from '../../../../public/images/doc-user1.svg';
import DocAva2 from '../../../../public/images/doc-user2.svg';
import DocAva3 from '../../../../public/images/doc-user3.svg';
import DocAva4 from '../../../../public/images/doc-user3.svg';

interface FormOverviewProps {
    setOpen: any;
    open: boolean;
    viewOnly?: boolean;
    handleFinish?: any;
}
const { TextArea } = Input;

// DATA
const documentDetails = [
    { id: 1, label: 'Form Name', value: 'Daily Cleaning', icon: <FormTextIcon /> },
    { id: 2, label: 'Define By', value: 'AP', icon: <DocDefine /> },
    { id: 3, label: 'Issue Date', value: '22/11/2023', icon: <DocIssue /> },
    { id: 4, label: 'Effective Date', value: '25/11/2023', icon: <DocEffec /> },
    { id: 5, label: 'Revised Period', value: '2 Year', icon: <DocRevise /> },
    { id: 6, label: 'Review Date', value: '25/11/2023', icon: <DocReview /> },
    { id: 7, label: 'Category', value: 'General', icon: <DocEdit /> },
    { id: 8, label: 'Department', value: 'Accounting', icon: <DepartmentIcon /> },
    { id: 9, label: 'Schedule Type', value: 'Daily', icon: <ScheduleIcon /> },
    {
        id: 10, label: 'User', avatar: true, avatars: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
            { avatarId: 6, src: <DocAva2 /> },
            { avatarId: 7, src: <DocAva3 /> },
        ], value: 'avatars', icon: <DocUser />
    },
];

const FormOverview: React.FC<FormOverviewProps> = ({ setOpen, open, viewOnly, handleFinish }) => {
    const [steps, setSteps] = useState(viewOnly ? 1 : 0);
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
    function dropdownRender2(menu: any) {
        return (
          <div>
            {menu}
            <div className="divider-menu select-option">
                <Button onClick={()=>{console.log('added')}} type="text">
                    + Add New
                </Button>
            </div>
          </div>
        );
    }
    const [range, setRange] = useState(false);
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
                    <p className="modal-lg--title">Daily cleaning</p>
                </Flex>
                {!viewOnly ?
                    <Flex gap={8} align='center' className='modal-header--breadcrumbs'>
                        <p className={steps === 0 ? 'active' : ''} onClick={()=>{setSteps(0)}}>From</p>
                        <ChevronRight />
                        <p className={steps === 1 ? 'active' : ''} onClick={()=>{setSteps(1)}}>Overview</p>
                    </Flex> : ''
                }
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="form-overview"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        <Flex vertical className='modal-lg-forms'>
                            <Flex className="modal-lg-forms--header" justify='space-between' align='center'>
                                <p>Document Details</p>
                                <Button onClick={()=>{setOpenAi(true)}} className='icon ai'><AiStars />Use AI</Button>
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
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={28} className='select-group--body--info'>
                                                        <Checkbox className='no-border-checkbox small-check'>Add Remarks</Checkbox>
                                                        <Flex align='center' gap={6}>
                                                            <Switch className='custom-switch' defaultChecked size='small' />
                                                            <p>Mandatory</p>
                                                        </Flex>
                                                    </Flex>
                                                    <Select
                                                        className='select-group--option-select'
                                                        placeholder="CAP"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-1'}
                                                        options={[
                                                            { value: 'option-1', label: 'Checkbox' },
                                                            { value: 'option-2', label: 'Dropdown' },
                                                            { value: 'option-3', label: 'Text Input' },
                                                            { value: 'option-4', label: 'Textbox Numeric' },
                                                            { value: 'option-5', label: 'Date & time' },
                                                        ]}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Flex gap={16} vertical>
                                                <Flex align='center'>
                                                    <Checkbox className='no-border-checkbox'>Option 1</Checkbox>
                                                    <Flex className='delete--input'>
                                                        <CloseIcon />
                                                    </Flex>
                                                </Flex>
                                                <Flex align='center' gap={10} className='w-fit'>
                                                    <Input placeholder='Enter Option 1' className='select-group--add-option--input' />
                                                    <Flex className='delete--input'>
                                                        <CloseIcon />
                                                    </Flex>
                                                </Flex>
                                                <div>
                                                    <Button style={{padding: 0, height: 'fit-content'}} type="text">+ Add Option</Button>
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add Information to help users' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex align='center' gap={6} className='select-group--footer--mandotory'>
                                            <p>Mandatory</p>
                                            <Switch className='custom-switch' defaultChecked size='small' />
                                        </Flex>
                                        <Input placeholder='Add amy remarks (optional)' />
                                    </div>
                                </div>
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
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={28} className='select-group--body--info'>
                                                        <Checkbox className='no-border-checkbox small-check'>Add Remarks</Checkbox>
                                                        <Flex align='center' gap={6}>
                                                            <Switch className='custom-switch' defaultChecked size='small' />
                                                            <p>Mandatory</p>
                                                        </Flex>
                                                    </Flex>
                                                    <Select
                                                        className='select-group--option-select'
                                                        placeholder="CAP"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-2'}
                                                        options={[
                                                            { value: 'option-1', label: 'Checkbox' },
                                                            { value: 'option-2', label: 'Dropdown' },
                                                            { value: 'option-3', label: 'Text Input' },
                                                            { value: 'option-4', label: 'Textbox Numeric' },
                                                            { value: 'option-5', label: 'Date & time' },
                                                        ]}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Flex gap={16} vertical>
                                                <Flex align='center' gap={10} className='w-fit'>
                                                    <Input placeholder='Enter Option 1' className='select-group--add-option--input' />
                                                    <Flex className='delete--input'>
                                                        <CloseIcon />
                                                    </Flex>
                                                </Flex>
                                                <div>
                                                    <Button style={{padding: 0, height: 'fit-content'}} type="text">+ Add Option</Button>
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add Information to help users' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex align='center' gap={6} className='select-group--footer--mandotory'>
                                            <p>Mandatory</p>
                                            <Switch className='custom-switch' defaultChecked size='small' />
                                        </Flex>
                                        <Input placeholder='Add amy remarks (optional)' />
                                    </div>
                                </div>
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
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={28} className='select-group--body--info'>
                                                        <Checkbox className='no-border-checkbox small-check'>Add Remarks</Checkbox>
                                                        <Flex align='center' gap={6}>
                                                            <Switch className='custom-switch' defaultChecked size='small' />
                                                            <p>Mandatory</p>
                                                        </Flex>
                                                    </Flex>
                                                    <Select
                                                        className='select-group--option-select'
                                                        placeholder="CAP"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-3'}
                                                        options={[
                                                            { value: 'option-1', label: 'Checkbox' },
                                                            { value: 'option-2', label: 'Dropdown' },
                                                            { value: 'option-3', label: 'Text Input' },
                                                            { value: 'option-4', label: 'Textbox Numeric' },
                                                            { value: 'option-5', label: 'Date & time' },
                                                        ]}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Input className='select-group--body--input' placeholder='Enter a text Input Holder' />
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add Information to help users' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex align='center' gap={6} className='select-group--footer--mandotory'>
                                            <p>Mandatory</p>
                                            <Switch className='custom-switch' defaultChecked size='small' />
                                        </Flex>
                                        <Input placeholder='Add amy remarks (optional)' />
                                    </div>
                                </div>
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
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={28} className='select-group--body--info'>
                                                        <Checkbox className='no-border-checkbox small-check'>Add Remarks</Checkbox>
                                                        <Flex align='center' gap={6}>
                                                            <Switch className='custom-switch' defaultChecked size='small' />
                                                            <p>Mandatory</p>
                                                        </Flex>
                                                    </Flex>
                                                    <Select
                                                        className='select-group--option-select'
                                                        placeholder="CAP"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-4'}
                                                        options={[
                                                            { value: 'option-1', label: 'Checkbox' },
                                                            { value: 'option-2', label: 'Dropdown' },
                                                            { value: 'option-3', label: 'Text Input' },
                                                            { value: 'option-4', label: 'Textbox Numeric' },
                                                            { value: 'option-5', label: 'Date & time' },
                                                        ]}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Flex vertical gap={16} className='select-group--range'>
                                                <Flex gap={12} align='center'>
                                                    <p>{range ? 'From' : 'Value'}</p>
                                                    <Input
                                                        type="number"
                                                        addonAfter={
                                                            <Select
                                                                defaultValue={'option-1'}
                                                                placeholder="value"
                                                                suffixIcon={<DownIcon />}
                                                                dropdownRender={dropdownRender2}
                                                                options={[
                                                                    { value: 'option-1', label: 'mg' },
                                                                    { value: 'option-2', label: 'ph' },
                                                                    { value: 'option-3', label: 'kg' },
                                                                ]}
                                                            />
                                                        }
                                                        placeholder={`Enter a numeric value`}
                                                    />
                                                </Flex>
                                                {range &&
                                                    <Flex gap={12} align='center'>
                                                        <p style={{minWidth: '33px'}}>to</p>
                                                        <Input
                                                            type="number"
                                                            addonAfter={
                                                                <Select
                                                                    defaultValue={'option-1'}
                                                                    placeholder="value"
                                                                    suffixIcon={<DownIcon />}
                                                                    dropdownRender={dropdownRender2}
                                                                    options={[
                                                                        { value: 'option-1', label: 'mg' },
                                                                        { value: 'option-2', label: 'ph' },
                                                                        { value: 'option-3', label: 'kg' },
                                                                    ]}
                                                                />
                                                            }
                                                            placeholder={`Enter a numeric value`}
                                                        />
                                                    </Flex>
                                                }
                                                <div>
                                                    <Button onClick={()=>{setRange(!range)}} style={{padding: 0, height: 'fit-content'}} type="text">Add Range</Button>
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add error text if range doesn’t match' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add Information to help users' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex align='center' gap={6} className='select-group--footer--mandotory'>
                                            <p>Mandatory</p>
                                            <Switch className='custom-switch' defaultChecked size='small' />
                                        </Flex>
                                        <Input placeholder='Add amy remarks (optional)' />
                                    </div>
                                </div>
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
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                                <Flex gap={16} align='center'>
                                                    <Flex align='center' gap={28} className='select-group--body--info'>
                                                        <Checkbox className='no-border-checkbox small-check'>Add Remarks</Checkbox>
                                                        <Flex align='center' gap={6}>
                                                            <Switch className='custom-switch' defaultChecked size='small' />
                                                            <p>Mandatory</p>
                                                        </Flex>
                                                    </Flex>
                                                    <Select
                                                        className='select-group--option-select'
                                                        placeholder="CAP"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-5'}
                                                        options={[
                                                            { value: 'option-1', label: 'Checkbox' },
                                                            { value: 'option-2', label: 'Dropdown' },
                                                            { value: 'option-3', label: 'Text Input' },
                                                            { value: 'option-4', label: 'Textbox Numeric' },
                                                            { value: 'option-5', label: 'Date & time' },
                                                        ]}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Input className='select-group--body--input' placeholder='Enter a title' />
                                            <Flex gap={16} vertical className='select-group-date'>
                                                <DatePicker allowClear={false} suffixIcon={<CalendarIcon />} />
                                                <TimePicker allowClear={false} suffixIcon={<ClockIcon />} />
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add error text if range doesn’t match' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Input placeholder='Add Information to help users' />
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex align='center' gap={6} className='select-group--footer--mandotory'>
                                            <p>Mandatory</p>
                                            <Switch className='custom-switch' defaultChecked size='small' />
                                        </Flex>
                                        <Input placeholder='Add amy remarks (optional)' />
                                    </div>
                                </div>
                                <Flex className='select-group--add' justify='center' align='center' gap={8}>
                                    <AddCircleIcon />
                                    <p>Add New Section</p>
                                </Flex>
                            </>
                            :
                            <>
                               <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={8} vertical>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 1</Checkbox>
                                                    </Flex>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 2</Checkbox>
                                                    </Flex>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 3</Checkbox>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex gap={6} align='center' className='footer'>
                                            <InfoOutline />
                                            <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={8} vertical>
                                                    <Input className='select-group--body--input' placeholder='Enter a text' />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex gap={6} align='center' className='footer'>
                                            <InfoOutline />
                                            <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <div>
                                                    <Select
                                                        style={{minWidth: '181px'}}
                                                        placeholder="Select Group"
                                                        suffixIcon={<DownIcon />}
                                                        defaultValue={'option-1'}
                                                        options={[
                                                            { value: 'option-1', label: 'Option 1' },
                                                            { value: 'option-2', label: 'Option 2' },
                                                            { value: 'option-3', label: 'Option 3' },
                                                        ]}
                                                    />
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex gap={6} align='center' className='footer'>
                                            <InfoOutline />
                                            <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={8} vertical>
                                                    <Input className='select-group--body--input' type='number' placeholder='Enter a value (In Mg)' />
                                                </Flex>
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Remarks *</p>
                                                <Flex gap={8} vertical>
                                                    <Input className='select-group--body--input' placeholder='Enter a remark' />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex gap={6} align='center' className='footer'>
                                            <InfoOutline />
                                            <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={16} vertical className='select-group-date'>
                                                    <DatePicker allowClear={false} suffixIcon={<CalendarIcon />} />
                                                    <TimePicker allowClear={false} suffixIcon={<ClockIcon />} />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                    <div className="select-group--footer">
                                        <Flex gap={6} align='center' className='footer'>
                                            <InfoOutline />
                                            <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                        </Flex>
                                    </div>
                                </div>
                            </>
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
                                {steps === 0 ? 'Save & Next' : viewOnly ? 'Submit' : 'Create Form'}
                            </Button>
                        </Flex>
                    </div>
                </Form>
            </div>
            <AiModal mode="form" open={openAi} setOpen={setOpenAi} aiData={aiData} setAiData={setAiData} />
        </Modal>
    )
};

export default FormOverview;