'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Modal, Flex, Form, Button, Row, Col, Input, Select, Checkbox, Switch, DatePicker, TimePicker } from 'antd';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import Badge from '../../../../public/images/badge-head.svg';
import LargeChevron from '../../../../public/images/large-chevron.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocReview from '../../../../public/images/doc-review.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import ClockIcon from '../../../../public/images/clock.svg';
import CalendarIcon from '../../../../public/images/calendar.svg';
import DeleteIcon from '../../../../public/images/delete.svg';
import CopyIcon from '../../../../public/images/copy.svg';
import ChevronRight from '../../../../public/images/chevron-right.svg';
import AddCircleIcon from '../../../../public/images/add-circle.svg';
import Mike from '../../../../public/images/mike.svg';
import Location from '../../../../public/images/location.svg';
import ProfileImage from '../../../../public/images/profile.png';

interface TrainingModalProps {
    setOpen: any;
    open: boolean;
}
const { TextArea } = Input;

// DATA
const documentDetails = [
    { id: 1, label: 'Training Date', value: '12/04/2023', icon: <DocIssue /> },
    { id: 2, label: 'Participants', value: 'Entire Company', icon: <DocDefine /> },
    { id: 3, label: 'Training Type', value: 'Training Type', icon: <DocReview /> },
    { id: 4, label: 'Speaker', value: 'Ronald Richards', icon: <Mike />, image: ProfileImage },
    { id: 5, label: 'Time', value: '16 : 00', icon: <DocIssue /> },
    { id: 6, label: 'Venue', value: 'Shanti gram auditorium, Noida', icon: <Location /> },
];

const TrainingModal: React.FC<TrainingModalProps> = ({ setOpen, open }) => {
    const [steps, setSteps] = useState(0);
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        if(steps === 2) {
            setOpen(false);
            setSteps(0);
        } else {
            setSteps(steps + 1);
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
                    <p className="modal-lg--title">Orientation Training</p>
                </Flex>
                <Flex gap={8} align='center' className='modal-header--breadcrumbs'>
                    <p className={steps === 0 ? 'active' : ''} onClick={()=>{setSteps(0)}}>Details</p>
                    <ChevronRight />
                    <p className={steps === 1 ? 'active' : ''} onClick={()=>{setSteps(1)}}>Assessment</p>
                    <ChevronRight />
                    <p className={steps === 2 ? 'active' : ''} onClick={()=>{setSteps(2)}}>Overview</p>
                </Flex>
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="training-form"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        { steps === 2 ?
                            <Flex vertical className='modal-lg-forms'>
                                <Flex className="modal-lg-forms--header" justify='space-between' align='center'>
                                    <p>Training Details</p>
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
                                                    <Flex align='center' gap={8} style={{paddingLeft: 26}}>
                                                        {
                                                            item.image ? 
                                                                <div className='avatar'><Image src={item.image} alt={item.value} /></div> 
                                                            : ''
                                                        }
                                                        <p className='value' style={{paddingLeft: 0}}>{item.value}</p>
                                                    </Flex>
                                                </Flex>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                <Flex gap={6} align='center' className='footer'>
                                    <InfoOutline />
                                    <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                </Flex>
                            </Flex> : ''
                        }
                        {/* SELECT GROUPS */}
                        {
                            steps === 1 ?
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
                                                        { value: 'option-1', label: 'Q1' },
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
                                                        { value: 'option-1', label: 'Q2' },
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
                                                        { value: 'option-1', label: 'Q3' },
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
                                                        { value: 'option-1', label: 'Q4' },
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
                                                        { value: 'option-1', label: 'Q5' },
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
                            : steps === 2 ?
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
                                                        { value: 'option-1', label: 'Q1' },
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
                            </> : 
                            <Flex vertical className='modal-lg-forms'>
                                <p className='header'>Training Details</p>
                                <div className='body-content'>
                                    <Row gutter={[20, 20]}>
                                        <Col span={12}>
                                            <Flex align="center" gap={12}>
                                                <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                    <DocIssue />
                                                    <p className="form-feild--custom">Training Date</p>
                                                </Flex>
                                                <p className="form-feild--seprator">:</p>
                                                <div className="full">
                                                    <Form.Item name="trainingDate" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                        <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                    </Form.Item>
                                                </div>
                                            </Flex>
                                        </Col>
                                        <Col span={12}>
                                            <Flex align="center" gap={12}>
                                                <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                    <DocReview />
                                                    <p className="form-feild--custom">Training Type</p>
                                                </Flex>
                                                <p className="form-feild--seprator">:</p>
                                                <div className="full">
                                                    <Form.Item name="trainingType" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                        <DatePicker placeholder='dd/mm/yyyy' format="DD/MM/YYYY" suffixIcon={<DownIcon />} />
                                                    </Form.Item>
                                                </div>
                                            </Flex>
                                        </Col>
                                        <Col span={12}>
                                            <Flex align="center" gap={12}>
                                                <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                    <DocIssue />
                                                    <p className="form-feild--custom">Time</p>
                                                </Flex>
                                                <p className="form-feild--seprator">:</p>
                                                <div className="full">
                                                    <Form.Item name="time" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                        <TimePicker placeholder='hh : mm' allowClear={false} suffixIcon={<DownIcon />} />
                                                    </Form.Item>
                                                </div>
                                            </Flex>
                                        </Col>
                                        <Col span={12}>
                                            <Flex align="center" gap={12}>
                                                <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                    <Mike />
                                                    <p className="form-feild--custom">Speaker</p>
                                                </Flex>
                                                <p className="form-feild--seprator">:</p>
                                                <div className="full">
                                                    <Form.Item name="speaker" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                        <Select
                                                            placeholder="Select User"
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
                                                    <DocDefine />
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
                                        <Col span={12}>
                                            <Form.Item name="trainingName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                                <Flex align="center" gap={12}>
                                                    <Flex style={{ minWidth: '120px' }} gap={6} className="icon-dark">
                                                        <Location />
                                                        <p className="form-feild--custom">Venue</p>
                                                    </Flex>
                                                    <p className="form-feild--seprator">:</p>
                                                    <Input placeholder="Type here..." />
                                                </Flex>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item name="description" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <textarea className='in-textarea' placeholder="Add Training detail" />
                                    </Form.Item>
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
                                {steps === 2 ? 'Create Training' : 'Save & Next' }
                            </Button>
                        </Flex>
                    </div>
                </Form>
            </div>
        </Modal>
    )
};

export default TrainingModal;