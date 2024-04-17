'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Dropdown, Flex, Table, Menu, Avatar, Button } from "antd";
import type { TableProps } from 'antd';
import Pagination from './Pagination';
// IMAGES
import Chevron from '../../../public/images/chevron.svg';
import ProfileImage from '../../../public/images/profile.png';
import RedFlag from '../../../public/images/red-flag.svg';
import MenuIcon from '../../../public/images/three-dots.svg';
import ConnectionIcon from '../../../public/images/connecttion.svg';
// avatars 
import DocAva1 from '../../../public/images/doc-user1.svg';
import DocAva2 from '../../../public/images/doc-user2.svg';
import DocAva3 from '../../../public/images/doc-user3.svg';
import DocAva4 from '../../../public/images/doc-user3.svg';



interface TaskListViewProps {
    setOpen?: any;
    setOpenTraining?: any;
    setAddAudit?: any;
    setOpenSopOverview?: any;
    setOpenCheckListOverview?: any;
    setOpenFormOverview?: any;
    setOpenTrainingDetails?: any;
    setIsAuditModalOpen?: any;
}
interface OpenItemsState {
    [key: number]: boolean;
}
// DATA 
const data = [
    {
        key: '1',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'SOP',
        cncStatus: { text: 'NC ', haveNc: true },
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        dueDate: {date: '31/12/2023', dueDate: '(Due by 3 days)'}
    },
    {
        key: '2',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'Checklist',
        cncStatus: { text: 'NC ', haveNc: true },
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        dueDate: {date: '31/12/2023', dueDate: '(Due by 3 days)'}
    },
    {
        key: '3',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'Form',
        cncStatus: { text: 'NC ', haveNc: true },
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        dueDate: {date: '31/12/2023', dueDate: '(Due by 3 days)'}
    }
];
const trainingDataJson = [
    {
        key: '1',
        nameOfTasks: { title: 'H1 Internal Audit for ISO 1521', desc: '1.3.1 Quality System - Responsibility' },
        cncStatus: { text: 'NC ', haveNc: true },
        task: 'General',
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        assignedBy: 'Compliance',
        date: '31/12/2023'
    },
    {
        key: '2',
        nameOfTasks: { title: 'H1 Internal Audit for ISO 1521', desc: '1.3.1 Quality System - Responsibility' },
        cncStatus: { text: 'NC ', haveNc: true },
        task: 'General',
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        assignedBy: 'Compliance',
        date: '31/12/2023'
    },
];
const generalDataJson = [
    {
        key: '1',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'SOP',
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        assignedBy: 'Compliance',
        date: '31/12/2023'
    },
    {
        key: '2',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'Checklist',
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        assignedBy: 'AP',
        date: '31/12/2023'
    },
    {
        key: '3',
        nameOfTasks: { title: 'Waste Bins Clearance', desc: '1.3.1 Quality System - Responsibility' },
        documentType: 'Form',
        assignee: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        frequency: 'Daily',
        assignedBy: 'AP',
        date: '31/12/2023'
    },
];
const auditJson = [
    {
        key: '1',
        auditName: { title: 'H1 Internal Audit for ISO 1521', desc: '1.3.1 Quality System - Responsibility' },
        from: '11/12/2023, 10.30 AM',
        to: '15/12/2023, 03.30 PM',
        type: 'Consultant Site',
        department: 'Half Department',
        auditor: {text: 'John Doe', icon: ProfileImage}
    },
    {
        key: '2',
        auditName: { title: 'H1 Internal Audit for ISO 1521', desc: '1.3.1 Quality System - Responsibility' },
        from: '11/12/2023, 10.30 AM',
        to: '15/12/2023, 03.30 PM',
        type: 'Consultant Site',
        department: 'Half Department',
        auditor: {text: 'John Doe', icon: ProfileImage}
    },
];
const training2Json = [
    {
        key: '1',
        trainingName: { title: 'Orientation Training', desc: '11/12/2023' },
        speaker: {text: 'John Doe', icon: ProfileImage},
        trainingType: 'Consultant Training',
        type: 'Internal',
        attendees: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        venue: 'Room 306, 3rd floor Training room, KD hospital Ahmedabad',
    },
    {
        key: '2',
        trainingName: { title: 'Orientation Training', desc: '11/12/2023' },
        speaker: {text: 'John Doe', icon: ProfileImage},
        trainingType: 'Consultant Training',
        type: 'Internal',
        attendees: {icon: [
            <DocAva1 />,
            <DocAva2 />,
            <DocAva3 />,
            <DocAva4 />
        ]},
        venue: 'Room 306, 3rd floor Training room, KD hospital Ahmedabad',
    },
];
const TaskListView: React.FC<TaskListViewProps> = ({setOpen, setOpenTraining, setAddAudit, setOpenSopOverview, setOpenCheckListOverview, setOpenFormOverview, setOpenTrainingDetails, setIsAuditModalOpen}) => {
    const [activeCollapse, setActiveCollapse] = useState<OpenItemsState>({0: true, 1: false, 2: false, 3: false, 4: false});
    const toggleItem = (index: any) => {
        setActiveCollapse(prevOpenItems => ({
        ...prevOpenItems,
        [index]: !prevOpenItems[index]
        }));
    };
    // TABLE DATA AD FORMAT
    const [displayData, setDisplayData] = useState(data.slice(0, 8));
    const [trainingData, setTrainingData] = useState(trainingDataJson.slice(0, 8));
    const [generalData, setGeneralData] = useState(generalDataJson.slice(0, 8));
    const [auditData, setAuditData] = useState(auditJson.slice(0, 8));
    const [trainingData2, setTrainingData2] = useState(training2Json.slice(0, 8));
    const DropdownMenu: React.FC<{ record: any }> = ({ record }) => {
        const handleMenuClick = (e: any) => {
            // settableClick(false)
            if (e.key === 'delete') {
                const newData = displayData.filter(item => item.key !== record.key);
                setDisplayData(newData);
            }
        };
        const items = [
            {
                label: <p className='drop--item'>Delete</p>,
                key: 'delete',
            },
            {
                label: <p className='drop--item'>Action</p>,
                key: 'action',
            }
        ];
        return (
            <div>
    
            <Dropdown overlay={<Menu onClick={handleMenuClick}>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>} trigger={['click']}>
                <a className="only-icon" onClick={(e) => { e.preventDefault();}}>
                    <MenuIcon />
                </a>
            </Dropdown>
            </div>
        );
    };
    const columns: TableProps<any>['columns'] = [
        {
            title: 'Name of tasks',
            dataIndex: 'nameOfTasks',
            key: '0',
            render: (accreditation: { title: string, desc: string }) => (
                <Flex gap={8} vertical>
                    <p className="image-name">
                        {accreditation.title}
                    </p>
                    <Flex gap={4}>
                        <ConnectionIcon />
                        <p>
                            {accreditation.desc}
                        </p>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: 'Document Type',
            dataIndex: 'documentType',
            key: '1',
        },
        {
            title: 'C/NC Status',
            dataIndex: 'cncStatus',
            key: '2',
            render: (cncStatus: { text: string, haveNc: boolean }) => (
                <p className={cncStatus.haveNc ? "flag" : ''}>{cncStatus.haveNc ? <RedFlag /> : ''}{cncStatus.text}</p>
            ),
        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            key: '3',
            render: (assignee: { icon: any }) => (
                <Flex align="center" gap={10}>
                    <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                        {assignee.icon.map((avatar: any, index: number) => (
                            <Avatar size='small' key={index} src={avatar} />
                        ))}
                    </Avatar.Group>
                </Flex>
            ),
        },
        {
            title: 'Frequency',
            dataIndex: 'frequency',
            key: '4'
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: '5',
            render: (upcomingAudit: { date: string, dueDate: string }) => (
                <p>
                    {upcomingAudit.date} <span className="red">{upcomingAudit.dueDate}</span>
                </p>
            ),
        },
        {
            title: '',
            key: '6',
            width: '2%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    const columnsTraining2: TableProps<any>['columns'] = [
        {
            title: 'Training Name',
            dataIndex: 'trainingName',
            key: '0',
            render: (trainingName: { title: string, desc: string }) => (
                <Flex gap={8} vertical>
                    <p className="image-name">
                        {trainingName.title}
                    </p>
                    <Flex gap={4}>
                        <ConnectionIcon />
                        <p>
                            {trainingName.desc}
                        </p>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: 'Speaker',
            dataIndex: 'speaker',
            key: '1',
            render: (speaker: { text: string, icon: any }) => (
                <Flex align="center" gap={10}>
                    <Image src={speaker.icon} alt={speaker.text} className="icon-table" />
                    <p className="image-name">
                        {speaker.text}
                    </p>
                </Flex>
            ),
        },
        {
            title: 'Training Type',
            dataIndex: 'trainingType',
            key: '2',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: '3'
        },
        {
            title: 'Attendees',
            dataIndex: 'attendees',
            key: '4',
            render: (attendees: { icon: any }) => (
                <Flex align="center" gap={10}>
                    <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                        {attendees.icon.map((avatar: any, index: number) => (
                            <Avatar size='small' key={index} src={avatar} />
                        ))}
                    </Avatar.Group>
                </Flex>
            ),
        },
        {
            title: 'Venue',
            dataIndex: 'venue',
            key: '5',
            width: '20%',
            render: (venue) => (
                <p>
                    {venue}
                </p>
            ),
        },
        {
            title: '',
            key: '6',
            width: '2%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    const columnsTraining: TableProps<any>['columns'] = [
        {
            title: 'Name of tasks',
            dataIndex: 'nameOfTasks',
            key: '0',
            render: (accreditation: { title: string, desc: string }) => (
                <Flex gap={8} vertical>
                    <p className="image-name">
                        {accreditation.title}
                    </p>
                    <Flex gap={4}>
                        <ConnectionIcon />
                        <p>
                            {accreditation.desc}
                        </p>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: 'C/NC Status',
            dataIndex: 'cncStatus',
            key: '1',
            render: (cncStatus: { text: string, haveNc: boolean }) => (
                <p className={cncStatus.haveNc ? "flag" : ''}>{cncStatus.haveNc ? <RedFlag /> : ''}{cncStatus.text}</p>
            ),
        },
        {
            title: 'Task',
            dataIndex: 'task',
            key: '2',
        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            key: '3',
            render: (assignee: { icon: any }) => (
                <Flex align="center" gap={10}>
                    <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                        {assignee.icon.map((avatar: any, index: number) => (
                            <Avatar size='small' key={index} src={avatar} />
                        ))}
                    </Avatar.Group>
                </Flex>
            ),
        },
        {
            title: 'Assigned By',
            dataIndex: 'assignedBy',
            key: '4'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: '5'
        },
        {
            title: '',
            key: '6',
            width: '2%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    const columnsGenral: TableProps<any>['columns'] = [
        {
            title: 'Name of tasks',
            dataIndex: 'nameOfTasks',
            key: '0',
            render: (accreditation: { title: string, desc: string }) => (
                <Flex gap={8} vertical>
                    <p className="image-name">
                        {accreditation.title}
                    </p>
                    <Flex gap={4}>
                        <ConnectionIcon />
                        <p>
                            {accreditation.desc}
                        </p>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: 'Document Type',
            dataIndex: 'documentType',
            key: '1',
        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            key: '2',
            render: (assignee: { icon: any }) => (
                <Flex align="center" gap={10}>
                    <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                        {assignee.icon.map((avatar: any, index: number) => (
                            <Avatar size='small' key={index} src={avatar} />
                        ))}
                    </Avatar.Group>
                </Flex>
            ),
        },
        {
            title: 'Frequency',
            dataIndex: 'frequency',
            key: '3'
        },
        {
            title: 'Assigned By',
            dataIndex: 'assignedBy',
            key: '4'
        },
        {
            title: 'Due Date',
            dataIndex: 'date',
            key: '5'
        },
        {
            title: '',
            key: '6',
            width: '2%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    const columnsAudit: TableProps<any>['columns'] = [
        {
            title: 'Audit Name',
            dataIndex: 'auditName',
            key: '0',
            render: (accreditation: { title: string, desc: string }) => (
                <Flex gap={8} vertical>
                    <p className="image-name">
                        {accreditation.title}
                    </p>
                    <Flex gap={4}>
                        <ConnectionIcon />
                        <p>
                            {accreditation.desc}
                        </p>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: 'From',
            dataIndex: 'from',
            key: '1',
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: '2',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: '3',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: '4',
        },
        {
            title: 'Auditor',
            dataIndex: 'auditor',
            key: '5',
            render: (consultant: { text: string, icon: any }) => (
                <Flex align="center" gap={10}>
                    <Image src={consultant.icon} alt={consultant.text} className="icon-table" />
                    <p className="image-name">
                        {consultant.text}
                    </p>
                </Flex>
            ),
        },
        {
            title: '',
            key: '6',
            width: '2%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    const hanleOpenGeneral = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log('worked')
        } else {
            if(record.documentType === 'SOP') {
                setOpenSopOverview(true)
            } else if (record.documentType === 'Checklist') {
                setOpenCheckListOverview(true)
            } else if (record.documentType === 'Form') {
                setOpenFormOverview(true)
            }
        }
    }
    const hanleOpenTraining = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log('worked')
        } else {
            setOpenTrainingDetails(true)
        }
    }
    const hanleOpenAudit = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log('worked')
        } else {
            setIsAuditModalOpen(true)
        }
    }
    return (
        <Flex gap={24} vertical>
            <div className={activeCollapse[0] ? "list-view--accordian active" : 'list-view--accordian'}>
                <Flex align='center' gap={20}>
                    <Flex gap={8} align="center" className="list-view--accordian--head" onClick={()=> {toggleItem(0)}}>
                        <p>Pending</p><p>(06)</p><Chevron />
                    </Flex>
                </Flex>
                <div className="white-table">
                    <Table
                        dataSource={displayData}
                        columns={columns}
                        pagination={false}
                    />
                    <Pagination setDisplayData={setDisplayData} data={data} />
                </div>
            </div>
            <div className={activeCollapse[1] ? "list-view--accordian active" : 'list-view--accordian'}>
                <Flex align='center' gap={20}>
                    <Flex gap={8} align="center" className="list-view--accordian--head"  onClick={()=> {toggleItem(1)}}>
                        <p>General</p><p>(10)</p><Chevron />
                    </Flex>
                    {activeCollapse[1] && <Button type="text" className='dark' onClick={()=>{setOpen(true)}}>+ Add Task</Button>}
                </Flex>
                <div className="white-table">
                    <Table
                        dataSource={generalData}
                        columns={columnsGenral}
                        pagination={false}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => {hanleOpenGeneral(event, record, rowIndex)}, 
                            };
                        }}
                    />
                    <Pagination setDisplayData={setGeneralData} data={generalDataJson} />
                </div>
            </div>
            <div className={activeCollapse[2] ? "list-view--accordian active" : 'list-view--accordian'}>
                <Flex align='center' gap={20}>
                    <Flex gap={8} align="center" className="list-view--accordian--head"  onClick={()=> {toggleItem(2)}}>
                        <p>Training</p><p>(10)</p><Chevron />
                    </Flex>
                    {activeCollapse[2] && <Button type="text" className='dark' onClick={()=>{setOpenTraining(true)}}>+ Add Task</Button>}
                </Flex>
                <div className="white-table">
                    <Table
                        dataSource={trainingData2}
                        columns={columnsTraining2}
                        pagination={false}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => {hanleOpenTraining(event, record, rowIndex)}, 
                            };
                        }}
                    />
                    <Pagination setDisplayData={setTrainingData2} data={training2Json} />
                </div>
            </div>
            <div className={activeCollapse[3] ? "list-view--accordian active" : 'list-view--accordian'}>
                <Flex align='center' gap={20}>
                    <Flex gap={8} align="center" className="list-view--accordian--head" onClick={()=> {toggleItem(3)}}>
                        <p>Audit</p><p>(06)</p><Chevron />
                    </Flex>
                    {activeCollapse[3] && <Button type="text" className='dark' onClick={()=>{setAddAudit(true)}}>+ Add Task</Button>}
                </Flex>
                <div className="white-table">
                    <Table
                        dataSource={auditData}
                        columns={columnsAudit}
                        pagination={false}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => {hanleOpenAudit(event, record, rowIndex)}, 
                            };
                        }}
                    />
                    <Pagination setDisplayData={setAuditData} data={auditJson} />
                </div>
            </div>
            <div className={activeCollapse[4] ? "list-view--accordian active" : 'list-view--accordian'}>
                <Flex align='center' gap={20}>
                    <Flex gap={8} align="center" className="list-view--accordian--head" onClick={()=> {toggleItem(4)}}>
                        <p>All</p><p>(06)</p><Chevron />
                    </Flex>
                </Flex>
                <div className="white-table">
                    <Table
                        dataSource={trainingData}
                        columns={columnsTraining}
                        pagination={false}
                    />
                    <Pagination setDisplayData={setTrainingData} data={trainingDataJson} />
                </div>
            </div>
        </Flex>
    )
};

export default TaskListView;