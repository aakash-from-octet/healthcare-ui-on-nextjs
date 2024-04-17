'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Flex, Input, Button, Checkbox } from 'antd';
import Link from "next/link";
// IMAGES
import BackIcon from '../../../public/images/chevron-left.svg'
import NABHImage from '../../../public/images/nabh.png'
import SearchIcon from '../../../public/images/search-dark.svg'
import SearchDark from '../../../public/images/search-dark.svg'
import UpDown from '../../../public/images/chevron.svg'


export default function Page() {
    const router = useRouter();
    const handleChangeRoute = () => {
        router.push('/new-accreditation?data=true');
    };
    const templates = [
        {
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },
        {
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },
        {
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },{
            title: 'CAP_HEM',
            text: 'Lorem ipsum dolor sit amet consectetur. Vel diam convallis interdum duis est. Volutpat.',
            link: '/new-accreditation'
        },
    ];
    const handleGoBack = () => {
        router.back();
    };
    const [showDrop, setShowDrop] = useState(0);
    const handleAccordionClick = (index: any) => {
        setShowDrop(index === showDrop ? null : index);
    };
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM','NABH'];
    const onChange = () => {
       console.log('onChange')
    }
    return (
        <main>
            <div className='page-head'>
                <div className="container">
                    <Flex align="center" gap={14}>
                        <Button onClick={handleGoBack} className="only-icon back-icon" ><BackIcon /></Button>
                        <h2>Template</h2>
                    </Flex>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    <div className="common-card">
                        <Flex vertical gap={20}>
                            <Flex justify="space-between" gap={20}>
                                <div style={{width: '329px'}}>
                                    <Input placeholder="Search here" prefix={<SearchIcon />} />
                                </div>
                                <Flex gap={10}>
                                    <div className="relative">
                                        <Button className="outlined" onClick={()=>{handleAccordionClick(1)}} >Standard focus <Flex className={showDrop === 1 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 1 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) =>(
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={()=>{handleAccordionClick(2)}} >All Issuing body <Flex className={showDrop === 2 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 2 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) =>(
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={()=>{handleAccordionClick(3)}} >Department <Flex className={showDrop === 3 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 3 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) =>(
                                                        <div className="custom-drop--item" key={index}>
                                                            <Checkbox onChange={onChange}>{drop}</Checkbox>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <div className="relative">
                                        <Button className="outlined" onClick={()=>{handleAccordionClick(4)}} >Industry <Flex className={showDrop === 4 ? "rotate-btn" : ''}><UpDown /></Flex></Button>
                                        {
                                            showDrop === 4 &&
                                            <Flex className="custom-drop default" gap={12} vertical>
                                                <div className="custom-drop--search">
                                                    <Input prefix={<SearchDark />} type="text" placeholder="Search here" />
                                                </div>
                                                <Flex align="center" vertical>
                                                    {dropList.map((drop, index) =>(
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
                            <Flex gap={16} wrap="wrap" className="template-cards">
                                {templates.map((template, index) => (
                                    <Flex gap={20} className="template-card" onClick={handleChangeRoute} key={index}>
                                        <div className="template-card--img">
                                            <Image src={NABHImage} alt="CAP_HEM" />
                                        </div>
                                        <Flex vertical gap={8}>
                                            <h3>{template.title}</h3>
                                            <p>{template.text}</p>
                                        </Flex>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </div>
        </main>
    );
}
