"use client";
import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoutes';
import { Dropdown, Flex, Input, Menu, Table } from 'antd';
import Search from '../../../public/images/search-dark.svg';
import LeftIcon from '../../../public/images/chevron-left-md.svg';
import RightIcon from '../../../public/images/chevron-right-md.svg';
import LeftIconSm from '../../../public/images/chevron-left-sm.svg';
import RightIconSm from '../../../public/images/chevron-right-sm.svg';
import RedFlag from '../../../public/images/red-flag.svg';

import EyeOpen from '../../../public/images/eye-open.svg';
import EyeClose from '../../../public/images/eye-close.svg';
import Download from '../../../public/images/download.svg';
import MenuIcon from '../../../public/images/three-dots.svg';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from '../components/Pagination';


const dataSource = [
    {
        key: '1',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date',
    },
    {
        key: '2',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '3',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '4',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '5',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '6',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '7',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '8',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
    {
        key: '9',
        name: `License-Form 26 G`,
        type: 'Document - Quality Document',
        nc: '30',
        date: '31/12/2023, 10.00 AM',
        remark: 'Non-compliance Due to Review Date'
    },
];



const Reports = () => {
    const [startDate, setStartDate] = useState<any>(new Date());
    const [displayData, setDisplayData] = useState<any>([]);

    const subtractMonth = () => {
        setStartDate((prevDate?: any) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const addMonth = () => {
        setStartDate((prevDate?: any) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const DropdownMenu: any = ({ record }: any) => {
        const handleMenuClick = (e: any) => {
            // settableClick(false)
            if (e.key === 'delete') {
                const newData = displayData.filter((item: any) => item.key !== record.key);
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
                    <a className="only-icon" onClick={(e) => { e.preventDefault(); }}>
                        <MenuIcon />
                    </a>
                </Dropdown>
            </div>
        );
    };

    const rowClassName = (record: any, index: number) => {
        if (record.nc) {
            return 'highlight';
        }
        return '';
    };

    // tables  
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '1',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: '2',
        },
        {
            title: 'C/NC ',
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
            title: 'Date',
            dataIndex: 'date',
            key: '4',
            render: (text?: string) => (
                <p className='tmax-200'>{text}</p>
            )
        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: '5',
            render: (text?: string) => (
                <p className='tmax-200'>{text}</p>
            )
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: '6',
            render: (record?: any) => {
                const ToggleEye = () => {
                    const [isActive, setIsActive] = useState(false);
                    return (
                        <div onClick={() => setIsActive(!isActive)}>
                            {isActive ? <EyeOpen /> : <EyeClose />}
                        </div>
                    );
                };
                return (
                    <Flex gap={10}>
                        <ToggleEye />
                        <Download />
                        <DropdownMenu record={record} />
                    </Flex>
                )
            }
        }
    ];

    useEffect(() => {
        setDisplayData(dataSource.slice(0, 8));
    }, [dataSource]);

    return (
        <ProtectedRoute>
            <main>
                <div className='page-head'>
                    <div className="container">
                        <h1>Report</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container">
                        <Flex gap={24} vertical>
                            {/* Header  */}
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
                            <div>
                                <Table
                                    dataSource={displayData}
                                    columns={columns}
                                    pagination={false}
                                    rowClassName={rowClassName}
                                />
                                <Pagination setDisplayData={setDisplayData} data={dataSource} />
                            </div>
                        </Flex>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    )
}

export default Reports;
