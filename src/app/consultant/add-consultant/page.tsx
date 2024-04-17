"use client";
import ProtectedRoute from '@/app/components/ProtectedRoutes';
import { Button, Checkbox, Col, Flex, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


import Search from '../../../../public/images/search-dark.svg';
import SearchDark from '../../../../public/images/search-dark.svg'
import BackIcon from '../../../../public/images/chevron-left.svg';
import UpDown from '../../../../public/images/chevron.svg'
import InviteConsultant from '@/app/components/modals/InviteConsultant';


const consultantsList = [
    { id: 1, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 2, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 3, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 4, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 5, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 6, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 7, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 8, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 9, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
    { id: 10, name: 'Arlene McCoy', status: 'Available', sub: 'Environmental Management Systems (ISO 14001)', desc: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.' },
];

const AddConsultant = () => {
    const router = useRouter();
    const [sendInvite, setSendInvite] = useState(false);
    const [showDrop, setShowDrop] = useState(0);
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM', 'NABH'];

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
                        <Flex gap={14} align='center' className='pointer' onClick={() => router.back()}>
                            <BackIcon />
                            <h1 className='m-0'>Consultant</h1>
                        </Flex>

                        <Button type="primary" onClick={() => setSendInvite(true)} className="icon">Send Invite</Button>
                        <InviteConsultant
                            sendInvite={sendInvite}
                            setSendInvite={setSendInvite}
                        />
                    </div>
                </div>
                <div className="page-body">
                    <div className="container">
                        <Flex gap={20} className='add-consultant--body' vertical>
                            <Flex justify='space-between' align='center' className='w-full'>
                                <div>
                                    <Input
                                        placeholder="Search here"
                                        allowClear
                                        prefix={<Search />}
                                        className='search--table gray-bg'
                                    />
                                </div>
                                <Flex gap={10}>
                                    <div className="relative">
                                        <Button className="outlined" onClick={() => { handleAccordionClick(1) }} >Standard focus <Flex className={showDrop === 1 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
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


                            <div className="grid-container">
                                {consultantsList.map((detail) => (
                                    <div key={detail.id} className="consultant-list">
                                        <Checkbox className='right-checkbox' onChange={(e) => console.log(`checked = ${e.target.checked}`)}>
                                            <Flex gap={20} className='consultant-list--item'>
                                                <Image src={`https://rb.gy/k33lgs`} alt="user" width={60} height={60} className='consultant-user--img' />
                                                <Flex vertical gap={6}>
                                                    <Flex gap={12}>
                                                        <h2>{detail.name}</h2>
                                                        <Flex align='center' gap={6}>
                                                            <div className='dot-div green' />
                                                            <p className='active'>{detail.status}</p>
                                                        </Flex>
                                                    </Flex>
                                                    <h3>{detail.sub}</h3>
                                                    <p>{detail.desc}</p>
                                                </Flex>
                                            </Flex>
                                        </Checkbox>
                                    </div>

                                ))}
                            </div>

                        </Flex>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    )
}

export default AddConsultant;
