'use client'
import ProtectedRoute from "./components/ProtectedRoutes";
import HomeTabs from "./components/HomeTabs";

import PendingWork from '../../public/images/file-list.svg';
import FileIcon from '../../public/images/blue-file.svg';
import ExpiredFile from '../../public/images/expired-file.svg';
import AuditBars from '../../public/images/audit-bars.svg';
import MenuIcon from '../../public/images/three-dots.svg';
import RedFlag from '../../public/images/red-flag.svg';
import ConnectionIcon from '../../public/images/connecttion.svg';


import { Dropdown, Flex, Menu } from "antd";


interface DataType {
    key: string;
    deptName: string;
    pendingTask: number;
    nc: string;
}
export default function Home() {
    const DropdownMenu: React.FC<{ record: DataType }> = ({ record }) => {
        const handleMenuClick = (e: any) => {
            // settableClick(false)
            if (e.key === 'delete') {
                console.log('delete clicked');
                // const newData = .filter((item: any) => item.key !== record.key);
                // setDisplayData(newData);
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
            <div className="justify-end">
                <Dropdown overlay={<Menu onClick={handleMenuClick}>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>} trigger={['click']}>
                    <a className="only-icon" onClick={(e) => { e.preventDefault(); }}>
                        <MenuIcon />
                    </a>
                </Dropdown>
            </div>
        );
    };

    const homeTabsData = [
        {
            id: 1,
            label: 'Department with pending work',
            count: '05',
            icon: <PendingWork />,
            content: [
                {
                    data: [
                        {
                            key: '1',
                            deptName: 'Emergency Department (ER)',
                            pendingTask: 50,
                            nc: '30',
                        },
                        {
                            key: '2',
                            deptName: 'Internal Medicine Department',
                            pendingTask: 20,
                            nc: '30',
                        },
                        {
                            key: '3',
                            deptName: 'Surgery Department',
                            pendingTask: 56,
                            nc: '30',
                        },
                        {
                            key: '4',
                            deptName: 'Pediatrics Department',
                            pendingTask: 33,
                            nc: '30',
                        },
                        {
                            key: '5',
                            deptName: 'Obstetrics and Gynecology Department (OB/GYN)',
                            pendingTask: 18,
                            nc: '30',
                        },
                        {
                            key: '6',
                            deptName: 'Orthopedics Department',
                            pendingTask: 0,
                            nc: '30',
                        },
                        {
                            key: '7',
                            deptName: 'Radiology Department',
                            pendingTask: 12,
                            nc: '30',
                        },
                        {
                            key: '8',
                            deptName: 'Cardiology Department',
                            pendingTask: 10,
                            nc: '30',
                        },
                        {
                            key: '9',
                            deptName: 'Radiology Department',
                            pendingTask: 19,
                            nc: '30',
                        },
                    ],
                    columns: [
                        {
                            title: 'Department Name',
                            dataIndex: 'deptName',
                            key: '1',

                        },
                        {
                            title: 'Number of pending task',
                            dataIndex: 'pendingTask',
                            key: '2',
                        },
                        {
                            title: 'Status',
                            dataIndex: 'nc',
                            key: '3',
                            render: (text: string) => {
                                return (
                                    <p className={text ? "flag" : ''}>
                                        {text && <><RedFlag /> {text + ' ' + 'NC'} </>}
                                    </p>
                                )
                            },
                        },
                        {
                            title: 'Action',
                            key: '4',
                            className: 'text-right',
                            render: (record?: any) => (
                                <DropdownMenu record={record} />
                            ),
                        },
                    ],

                }
            ]
        },
        {
            id: 2, label: 'Total Non-Compliances', count: '05', icon: <FileIcon />, content: [
                {
                    data: [
                        {
                            key: '1',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '2',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '3',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '4',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '5',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '6',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '7',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '8',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },
                        {
                            key: '9',
                            name: { head: 'Re Calibration Checklist is required', subhead: `1.3.1 Quality System - Responsibility` },
                            id: 2222212,
                            type: `Quality Checklist`,
                            schedule: `Daily`,
                            status: 30,
                            dateFrom: `31/12/2023`,
                            dateTo: `31/12/2023`,
                        },

                    ],
                    columns: [
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: '1',
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
                            title: 'ID',
                            dataIndex: 'id',
                            key: '2',
                        },
                        {
                            title: 'Type',
                            dataIndex: 'type',
                            key: '3',
                        },
                        {
                            title: 'Schedule',
                            dataIndex: 'schedule',
                            key: '4',
                        },
                        {
                            title: 'Status',
                            dataIndex: 'status',
                            key: '5',
                            render: (text: number) => {
                                return (
                                    <p className={text ? "flag" : ''}>
                                        {text && <><RedFlag /> {text + ' ' + 'NC'} </>}
                                    </p>
                                )
                            }
                            ,
                        },
                        {
                            title: 'Date From',
                            dataIndex: 'dateFrom',
                            key: '6',
                        },
                        {
                            title: 'Date To',
                            dataIndex: 'dateTo',
                            key: '7',
                        },
                        {
                            title: 'Action',
                            className: 'text-right',
                            key: '8',
                            render: (record?: any) => (
                                <DropdownMenu record={record} />
                            ),
                        },
                    ],

                }
            ]
        },
        {
            id: 3, label: 'Expired Documents', count: '05', icon: <ExpiredFile />, content: [
                {
                    data: [
                        {
                            key: '1',
                            docName: 'Document 1',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '2',
                            docName: 'Document 2',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '3',
                            docName: 'Document 3',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '4',
                            docName: 'Document 4',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '5',
                            docName: 'Document 5',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '6',
                            docName: 'Document 6',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '7',
                            docName: 'Document 7',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '8',
                            docName: 'Document 8',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                        {
                            key: '9',
                            docName: 'Document 9',
                            expiry: '31/12/2023',
                            revise: '11/01/2024',
                        },
                    ],
                    columns: [
                        {
                            title: 'Document Name',
                            dataIndex: 'docName',
                            key: '1',
                            width: '30%'
                        },
                        {
                            title: 'Expired On',
                            dataIndex: 'expiry',
                            key: '2',
                            width: '33%'
                        },
                        {
                            title: 'Next Revise On',
                            dataIndex: 'revise',
                            key: '3',
                            width: '33%'
                        },
                        {
                            title: 'Action',
                            className: 'text-right',
                            key: '4',
                            width: '4%',
                            render: (record?: any) => (
                                <DropdownMenu record={record} />
                            ),
                        },
                    ],

                }
            ]
        },
        {
            id: 4, label: 'Upcoming Audits', count: '05', icon: <AuditBars />, content: [
                {
                    data: [
                        {
                            key: '1',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '2',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '3',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '4',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '5',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '6',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '7',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '8',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },
                        {
                            key: '9',
                            audit: 'H1 Internal Audit for ISO 1521',
                            guideline: '1.3.1 Quality System - Responsibility',
                            date: '11/01/2024',
                            dept: 'Pediatrics Department',
                        },

                    ],
                    columns: [
                        {
                            title: 'Audits',
                            dataIndex: 'audit',
                            key: '1',
                        },
                        {
                            title: 'Guideline ',
                            dataIndex: 'guideline',
                            key: '2',
                            render: (text: string) => (
                                <Flex gap={4} align="center">
                                    <ConnectionIcon />
                                    <p>{text}</p>
                                </Flex>
                            )

                        },
                        {
                            title: 'Date ',
                            dataIndex: 'date',
                            key: '3',
                        },
                        {
                            title: 'Department ',
                            dataIndex: 'dept',
                            key: '4',
                        },
                        {
                            title: '',
                            key: '5',
                            className: 'text-right',
                            render: (record?: any) => (
                                <DropdownMenu record={record} />
                            ),
                        },
                    ],

                }
            ]
        },
    ];

    return (
        <ProtectedRoute>
            <main>
                <div className='page-head'>
                    <div className="container">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container">
                        <div className="hometabs-container">
                            <HomeTabs data={homeTabsData} />
                        </div>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    );
}
