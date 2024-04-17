"use client";
import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoutes';
import { Button, Checkbox, Dropdown, Flex, Input, Menu, Table } from 'antd';
import Pagination from '../components/Pagination';
import Image from 'next/image';

import Plus from "../../../public/images/plus.svg";
import Search from '../../../public/images/search-dark.svg';
import SearchDark from '../../../public/images/search-dark.svg'
import UpDown from '../../../public/images/chevron.svg'
import MenuIcon from '../../../public/images/three-dots.svg';
import ProfileDetailModal from '../components/modals/ProfileDetail';
import AddConsultantModal from '../components/modals/AddConsultant';

const dataSource = [
    {
        key: '1',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Courtney Henry' },
        accreditation: '',
        status: 'Requested',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '2',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Savannah Nguyen' },
        accreditation: 'NABH',
        status: 'Active',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '3',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Darlene Robertson' },
        accreditation: 'NABH',
        status: 'Active',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '4',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Albert Flores' },
        accreditation: '',
        status: 'Requested',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '5',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Albert Flores' },
        accreditation: '',
        status: 'Requested',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '6',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Albert Flores' },
        accreditation: '',
        status: 'Requested',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '7',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Albert Flores' },
        accreditation: '',
        status: 'Requested',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '8',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Wade Warren' },
        accreditation: 'NABH',
        status: 'Active',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
    {
        key: '9',
        cname: { img: `https://rb.gy/k33lgs`, name: 'Jake Wilson' },
        accreditation: 'NABH',
        status: 'Active',
        email: 'John.doe@gmail.com',
        date: '31/12/2023',
    },
];

const Consultant = () => {
    const [showDrop, setShowDrop] = useState(0);
    const [addConsultant, setAddConsultant] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM', 'NABH'];
    const [displayData, setDisplayData] = useState<any>([]);
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
                label: <p className='drop--item'>Deactivate</p>,
                key: 'deactivate',
            },
            {
                label: <p className='drop--item'>Edit</p>,
                key: 'edit',
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

    const columns = [
        {
            title: 'Consultant Name',
            dataIndex: 'cname',
            key: '1',
            render: (user: { img: any, name: string }) => (
                <Flex align="center" gap={10}>
                    <Image src={user.img} alt={'user'} width={24} height={24} className="icon-table-lg" />
                    <p className="image-name">
                        {user.name}
                    </p>
                </Flex>
            ),
        },
        {
            title: 'Accreditation',
            dataIndex: 'accreditation',
            key: '2',
            render: (text?: string) => (
                <p>{text == '' ? '-' : text}</p>
            ),
        },
        {
            title: 'Status ',
            dataIndex: 'status',
            key: '3',
            render: (text?: string) => (
                <Flex align='center' gap={6}>
                    <div className='dot-div' style={{ backgroundColor: (text == 'active' || text == 'Active') ? '#09863F' : '#1B5ABD' }} />
                    <p style={{ color: (text == 'active' || text == 'Active') ? '#09863F' : '#1B5ABD' }}>{text}</p>
                </Flex>
            ),
        },
        {
            title: 'Email ',
            dataIndex: 'email',
            key: '4',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: '5',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: '6',
            render: (record?: any) => {
                return (
                    <DropdownMenu record={record} />
                )
            }
        }
    ];

    useEffect(() => {
        setDisplayData(dataSource.slice(0, 8));
    }, [dataSource]);
    const handleChangeTable = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log(event.target.tagName.toLowerCase())
        } else {
            setProfileModal(true);
        }
    }
    const handleAccordionClick = (index: any) => {
        setShowDrop(index === showDrop ? null : index);
    };
    const onChange = () => {
        console.log('onChange')
    }
    return (
        <ProtectedRoute>
            <main>
                <div className='page-head'>
                    <div className="container">
                        <h1>Consultant</h1>
                        <Button type="primary" onClick={() => setAddConsultant(true)} className="icon"><Plus />Add Consultant</Button>
                        <AddConsultantModal
                            addConsultant={addConsultant}
                            setAddConsultant={setAddConsultant}
                        />
                    </div>
                </div>
                <div className="page-body">
                    <div className="container">
                        <Flex gap={24} vertical>
                            <Flex justify='space-between' align='center' className='w-full'>
                                <div>
                                    <Input
                                        placeholder="Search here"
                                        allowClear
                                        prefix={<Search />}
                                        className='search--table'
                                    />
                                </div>
                                <Flex gap={10}>
                                    <div className="relative">
                                        <Button className="outlined" onClick={() => { handleAccordionClick(1) }} >Status <Flex className={showDrop === 1 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 1 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) => (
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={() => { handleAccordionClick(2) }} >Filter 2 <Flex className={showDrop === 2 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 2 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) => (
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={() => { handleAccordionClick(3) }} >Filter 3 <Flex className={showDrop === 3 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 3 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) => (
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={() => { handleAccordionClick(4) }} >Industry <Flex className={showDrop === 4 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 4 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) => (
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                </Flex>


                            </Flex>
                            <div>
                                <Table
                                    dataSource={displayData}
                                    columns={columns}
                                    pagination={false}
                                    onRow={(record, rowIndex) => {
                                        return {
                                            onClick: (event) => {handleChangeTable(event, record, rowIndex)}, 
                                        };
                                    }}
                                />
                                <Pagination setDisplayData={setDisplayData} data={dataSource} />
                                <ProfileDetailModal
                                    profileModal={profileModal}
                                    setProfileModal={setProfileModal}
                                />
                            </div>
                        </Flex>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    )
}

export default Consultant;
