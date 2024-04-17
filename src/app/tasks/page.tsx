'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Flex, Dropdown, Tooltip, Input, Modal, Form, Select } from 'antd';
import type { MenuProps } from 'antd';
import SOPOverview from "../components/modals/SopOverview";
import CheckListOverview from "../components/modals/CheckListOverview";
import FormOverview from "../components/modals/FormOverview";
import TaskListView from "../components/TaskListView";
import TrainingModal from "../components/modals/TrainingModal";
import TrainingDetailsModal from "../components/modals/TrainingDetailsModal";
import UpcomingAuditsModal from "../components/modals/UpcomingAudits";
import AddAudit from "../components/modals/AddAudit";
import TaskBoard from "../components/TaskBoard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// IMAGES
import NabhImage from '../../../public/images/nabh-image.png';
import InfoIcon from '../../../public/images/info.svg';
import UpDown from '../../../public/images/up-down.svg';
import SearchDark from '../../../public/images/search-dark.svg';
import InsightsIcon from '../../../public/images/calendar-new.svg';
import UserSingleIcon from '../../../public/images/board.svg';
import List from '../../../public/images/file-list-dot.svg';
import PlusIcon from '../../../public/images/plus.svg';
import Search from '../../../public/images/search-dark.svg';
import LeftIcon from '../../../public/images/chevron-left-md.svg';
import RightIcon from '../../../public/images/chevron-right-md.svg';
import LeftIconSm from '../../../public/images/chevron-left-sm.svg';
import RightIconSm from '../../../public/images/chevron-right-sm.svg';
import CloseIcon from '../../../public/images/close-small.svg';
import FormPersonIcon from '../../../public/images/doc-user.svg';
import DownIcon from '../../../public/images/chevron.svg'
import FormTextIcon from '../../../public/images/form-text.svg';
import ProfileImage from '../../../public/images/profile.png';
import SectionIcon from '../../../public/images/section-icon.svg';
import DocumentIcon from '../../../public/images/document.svg';
import DocumentIdIcon from '../../../public/images/document-id.svg';
import DepartMentIcon from '../../../public/images/department.svg';
import GenerateIcon from '../../../public/images/generate-id.svg';

export default function Page() {
    const [startDate, setStartDate] = useState<any>(new Date());
    const [segmented, setSegmented] = useState<number>(2);
    const [open, setOpen] = useState(false);
    const [addTraining, setAddTraining] = useState(false);
    const [addAudit, setAddAudit] = useState(false);
    const [openTraining, setOpenTraining] = useState(false);
    const [openTrainingDetails, setOpenTrainingDetails] = useState(false);
    const [openSopOverview, setOpenSopOverview] = useState(false);
    const [openCheckListOverview, setOpenCheckListOverview] = useState(false);
    const [openFormOverview, setOpenFormOverview] = useState(false);
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const [isAuditDetailOpen, setIsAuditDetailOpen] = useState(false);
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const showModal = () => {
        setOpen(true);
    };
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM','NABH'];
    const [showDrop, setShowDrop] = useState(false);
    const pageTabs = [
        {
            icon: <List />,
            text: 'List',
        },
        {
            icon: <InsightsIcon />,
            text: 'Calendar',
        },
        {
            icon: <UserSingleIcon />,
            text: 'Users',
        }
    ];
    const [pageTabsActive, setPageTabsActive] = useState(0);
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
                <Button onClick={()=>{console.log('added')}} type="text">
                    + Add New
                </Button>
            </div>
          </div>
        );
    }
    const onFinish = (values: any) => {
        if(values.documentType === 'document') {
            setOpenSopOverview(true)
        } else if (values.documentType === 'checklist') {
            setOpenCheckListOverview(true)
        } else if (values.documentType === 'form') {
            setOpenFormOverview(true)
        } else {
            console.log('not decided')
        }
        handleOk()
    };
    const addMonth = () => {
        setStartDate((prevDate?: any) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };
    const subtractMonth = () => {
        setStartDate((prevDate?: any) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };
    const items: MenuProps['items'] = [
        {
            label: <p className='drop--item' onClick={showModal}>General Task</p>,
            key: '0',
        },
        {
            label: <p className='drop--item' onClick={()=>{setAddTraining(true)}}>Training</p>,
            key: '1',
        },
        {
            label: <p className='drop--item' onClick={()=>{setAddAudit(true)}}>Audit</p>,
            key: '2',
        }
    ];
    const handleFinish = () => {
        console.log('document');
    }
    const handleFinishChecklist = () => {
        console.log('Checklist');
    }
    const handleFinishForm = () => {
        console.log('Form');
    }
    const handleOkTraining = () => {
        setAddTraining(false);
        setOpenTraining(true);
    }
    const handleOkAudit = (value: any) => {
        console.log(value)
        setAddAudit(false);
        setIsAuditModalOpen(true);
    }
    return (
        <main>
            <div className={'page-head tabs'}>
                <div className="container">
                    <Flex vertical className="w-full" gap={16}>
                        <Flex justify="space-between">
                            <Flex align="center" gap={14}>
                                <Flex align="center" gap={10} className="relative">
                                    <Image className="page-head--image" src={NabhImage} alt="NABH" />
                                    <h1 className="mb-0">NABH</h1>
                                    <Tooltip title="Lorem ipsum dolor">
                                        <Button className="only-icon"><InfoIcon /></Button>
                                    </Tooltip>
                                    <Button onClick={()=>{setShowDrop(!showDrop)}} className="only-icon"><UpDown /></Button>
                                    {
                                        showDrop &&
                                        <div className="custom-drop">
                                            <div className="custom-drop--search">
                                                <Input prefix={<SearchDark />} type="text" placeholder="Search any page" />
                                            </div>
                                            <Flex align="center" vertical>
                                                {dropList.map((drop, index) =>(
                                                    <div className="custom-drop--item" key={index}>
                                                        <Link href="/new-accreditation?data=true">{drop}</Link>
                                                    </div>
                                                ))}
                                            </Flex>
                                        </div>
                                    }
                                </Flex>
                            </Flex>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Button type="primary" className="icon"><PlusIcon />Add Task</Button>
                            </Dropdown>
                        </Flex>
                        <Flex>
                            {pageTabs.map((tab: any, index: any) => (
                                <div className={pageTabsActive === index ? "custom-tab active" : 'custom-tab'} key={index} onClick={()=>{setPageTabsActive(index)}}>
                                    <Flex align="center" gap={10}>
                                        {tab.icon}
                                        <p>{tab.text}</p>
                                    </Flex>
                                </div>
                            ))}
                        </Flex> 
                    </Flex>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    <Flex vertical gap={24}>
                        <Flex justify='space-between' align='center' className='w-full'>
                            <div>
                                <Input
                                    width={260}
                                    placeholder="Search by name, department, email"
                                    allowClear
                                    prefix={<Search />}
                                    className='search--table'
                                />
                            </div>
                            <Flex align="center" gap={12}>
                                <Flex justify="space-between" align="center">
                                    <div className="segmented fit">
                                        <div className={segmented === 0 ? "active" : ''} onClick={()=>setSegmented(0)}><p>Day</p></div>
                                        <div className={segmented === 1 ? "active" : ''} onClick={()=>setSegmented(1)}><p>Week</p></div>
                                        <div className={segmented === 2 ? "active" : ''} onClick={()=>setSegmented(2)}><p>Month</p></div>
                                    </div>
                                </Flex>
                                <Flex align='center' className='custom-monthpicker--outer'>
                                    <div className="fill-chevron left" onClick={subtractMonth}>
                                        <LeftIcon />
                                    </div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="MMM, yyyy"
                                        showMonthYearPicker
                                        className='custom-monthpicker'
                                        onKeyDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        popperClassName='custom-monthpicker-popper'
                                        renderCustomHeader={({
                                            date,
                                            changeYear,
                                            prevMonthButtonDisabled,
                                            nextMonthButtonDisabled,
                                        }) => (
                                            <div className='custom-header'>
                                                <span>{date.getFullYear()}</span>
                                                <Flex gap={8} >
                                                    <button onClick={() => changeYear(date.getFullYear() - 1)} className="fill-chevron-header" disabled={prevMonthButtonDisabled}>
                                                        <LeftIconSm />
                                                    </button>
                                                    <button onClick={() => changeYear(date.getFullYear() + 1)} className="fill-chevron-header" disabled={nextMonthButtonDisabled}>
                                                        <RightIconSm />
                                                    </button>
                                                </Flex>
                                            </div>
                                        )}
                                    />
                                    <div className="fill-chevron right" onClick={addMonth}>
                                        <RightIcon />
                                    </div>
                                </Flex>
                            </Flex>
                        </Flex>
                        {
                            pageTabsActive === 0 ? 
                            <TaskListView setOpenTrainingDetails={setOpenTrainingDetails} setIsAuditModalOpen={setIsAuditDetailOpen} setOpenSopOverview={setOpenSopOverview} setOpenCheckListOverview={setOpenCheckListOverview} setOpenFormOverview={setOpenFormOverview} setOpen={setOpen} setOpenTraining={setAddTraining} setAddAudit={setAddAudit} /> :
                            pageTabsActive === 1 ? '' : 
                            <TaskBoard /> 
                        }
                    </Flex>
                </div>
            </div>

            {/* General MODAL */}
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                closeIcon={<CloseIcon />}
                footer={false}
                centered
                className="darkIconModal"
            >
                <div className="modal--header">
                    <p className="modal--title">Create General Task</p>
                </div>
                <div className="modal--body">
                    <Form
                        className="modal-from-general"
                        onFinish={onFinish}
                        name="create-general-task"
                    >
                        <Flex gap={14} vertical>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="section" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Sub section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="subSection" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select sub section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Sub 2 section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="sub2Section" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select sub section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <DocumentIcon />
                                    <p className="form-feild--custom">Document Type</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="documentType" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Document Type"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'document', label: 'Document' },
                                                { value: 'checklist', label: 'CheckList' },
                                                { value: 'form', label: 'Form' },
                                                { value: 'report', label: 'Report' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Form.Item name="documentName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                <Flex align="center" gap={12}>
                                    <Flex style={{ minWidth: '151px' }} gap={6}>
                                        <FormTextIcon />
                                        <p className="form-feild--custom">Document Name</p>
                                    </Flex>
                                    <p className="form-feild--seprator">:</p>
                                    <Input placeholder="Type..." />
                                </Flex>
                            </Form.Item>
                            <Form.Item name="documentId" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                <Flex align="center" gap={12}>
                                    <Flex style={{ minWidth: '151px' }} gap={6}>
                                        <DocumentIdIcon />
                                        <p className="form-feild--custom">Document ID</p>
                                    </Flex>
                                    <p className="form-feild--seprator">:</p>
                                    <div className="relative full">
                                        <Input placeholder="Type..." style={{paddingRight: '40px'}} />
                                        <div className="generate-icon">
                                            <GenerateIcon />
                                        </div>
                                    </div>
                                </Flex>
                            </Form.Item>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <DepartMentIcon />
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
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <FormPersonIcon />
                                    <p className="form-feild--custom">User Name</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="userName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select User"
                                            allowClear
                                            mode="multiple"
                                            maxTagCount={2}
                                            maxTagPlaceholder={(omittedValues) => (
                                                <p>+{omittedValues.length}</p>
                                            )}
                                            dropdownRender={dropdownRender}
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'John Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="John Doe" /></div><p>John Doe</p> </div>, title: 'John Doe' },
                                                { value: 'Anirudh Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Anirudh Doe" /></div><p>Anirudh Doe</p></div>, title: 'Anirudh Doe' },
                                                { value: 'Dhruvil Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Dhruvil Doe" /></div><p>Dhruvil Doe</p></div>, title: 'Dhruvil Doe' },
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
                                >
                                    Create
                                </Button>
                            </Flex>
                        </Flex>
                    </Form>
                </div>
            </Modal>
             {/* Training MODAL */}
            <Modal
                open={addTraining}
                onOk={handleOkTraining}
                onCancel={()=>{setAddTraining(false)}}
                closeIcon={<CloseIcon />}
                footer={false}
                centered
                className="darkIconModal"
            >
                <div className="modal--header">
                    <p className="modal--title">Training</p>
                </div>
                <div className="modal--body">
                    <Form
                        className="modal-from-training"
                        onFinish={handleOkTraining}
                        name="create-training"
                    >
                        <Flex gap={14} vertical>
                            <Form.Item name="trainingName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                <Flex align="center" gap={12}>
                                    <Flex style={{ minWidth: '151px' }} gap={6}>
                                        <FormTextIcon />
                                        <p className="form-feild--custom">Training Name</p>
                                    </Flex>
                                    <p className="form-feild--seprator">:</p>
                                    <Input placeholder="Type here..." />
                                </Flex>
                            </Form.Item>
                            <Flex justify="flex-end" gap={10} align="center">
                                <Button key="back" onClick={()=>{setAddTraining(false)}}>
                                    Cancel
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Create
                                </Button>
                            </Flex>
                        </Flex>
                    </Form>
                </div>
            </Modal>
            {/* Audit MODAL */}
            <Modal
                open={addAudit}
                onOk={handleOkAudit}
                onCancel={()=>{setAddAudit(false)}}
                closeIcon={<CloseIcon />}
                footer={false}
                centered
                className="darkIconModal"
            >
                <div className="modal--header">
                    <p className="modal--title">Audit Scope</p>
                </div>
                <div className="modal--body">
                    <Form
                        className="modal-from"
                        onFinish={handleOkAudit}
                        name="create-general-task"
                    >
                        <Flex gap={24} vertical>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="section" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Sub section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="subSection" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select sub section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <SectionIcon />
                                    <p className="form-feild--custom">Sub 2 section</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="sub2Section" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Select sub section name"
                                            allowClear
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'option-1', label: 'Option 1' },
                                                { value: 'option-2', label: 'Option 2' },
                                                { value: 'option-3', label: 'Option 3' },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                            </Flex>
                            <Form.Item name="auditName" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                <Flex align="center" gap={12}>
                                    <Flex style={{ minWidth: '151px' }} gap={6}>
                                        <FormTextIcon />
                                        <p className="form-feild--custom">Audit Name</p>
                                    </Flex>
                                    <p className="form-feild--seprator">:</p>
                                    <Input placeholder="Type here..." />
                                </Flex>
                            </Form.Item>
                            <Flex justify="flex-end" gap={10} align="center">
                                <Button key="back" onClick={()=>{setAddAudit(false)}}>
                                    Cancel
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Create
                                </Button>
                            </Flex>
                        </Flex>
                    </Form>
                </div>
            </Modal>
            {/*General Inner MODALS */}
            <SOPOverview viewOnly={true} handleFinish={handleFinish} setOpen={setOpenSopOverview} open={openSopOverview} />
            <CheckListOverview viewOnly={true} handleFinish={handleFinishChecklist} setOpen={setOpenCheckListOverview} open={openCheckListOverview} />
            <FormOverview viewOnly={true} handleFinish={handleFinishForm} setOpen={setOpenFormOverview} open={openFormOverview} />
            {/*Training MODALS */}
            <TrainingModal setOpen={setOpenTraining} open={openTraining} />
            <TrainingDetailsModal setOpen={setOpenTrainingDetails} open={openTrainingDetails} />
            {/*Audit MODALS */}
            <AddAudit open={isAuditModalOpen} setOpen={setIsAuditModalOpen} />
            <UpcomingAuditsModal reviewAudit={true} isAuditModalOpen={isAuditDetailOpen} setIsAuditModalOpen={setIsAuditDetailOpen} />
        </main>
    );
}
