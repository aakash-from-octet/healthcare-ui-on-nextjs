'use client'
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { Button, Flex, Modal, Tooltip, Input, Table, Dropdown, Menu } from 'antd';
import type { TableProps } from 'antd';
import ComplianceCard from "../components/ComplianceCard";
import Pagination from "../components/Pagination";
import SuccessModal from "../components/modals/SuccessModal";
// IMAGES
import BackIcon from '../../../public/images/chevron-left.svg'
import CloseIcon from '../../../public/images/close-small.svg';
import CheckSuccess from '../../../public/images/check-success.svg';
import NabhImage from '../../../public/images/nabh-image.png';
import InfoIcon from '../../../public/images/info.svg'
import UpDown from '../../../public/images/up-down.svg'
import SearchDark from '../../../public/images/search-dark.svg'
import ConnectionIcon from '../../../public/images/connection-2.svg';
import InsightsIcon from '../../../public/images/insights.svg';
import UserSingleIcon from '../../../public/images/user-single.svg';
import RedFlag from '../../../public/images/red-flag.svg';
import ProfileImage from '../../../public/images/profile.png';
import MenuIcon from '../../../public/images/three-dots.svg';


// THIS IS FOR THE FRONTEND DEVELOPMENT (CAN BE USED DIRECTLY IN COMPONENT, WHEN APIs ARE CONNECTED) - START
const MyComponent = ({ setSearchNew, setTablist, setTabItemlist, setTabItemlistInner }: {
    setSearchNew: (value: string) => void,
    setTablist: (value: any) => void,
    setTabItemlist: (value: any) => void,
    setTabItemlistInner: (value: any) => void,
}) => {
    const searchParams: any = useSearchParams();
    const search: any = searchParams?.get('data');
    const page: any = searchParams?.get('page');
    const defaultTablist = [
        {
            key: '1',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '2',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '3',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '4',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '5',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '6',
            tab: 'Organisation and management',
            nc: '02'
        }
    ];
    const defaultTabItemlist = [
        {
            key: '1.1',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.2',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.3',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.4',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.5',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.6',
            tab: 'Organisation and management',
            nc: '02'
        }
    ];
    const defaultTabItemlistInner = [
        {
            key: '1.1.1',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.1.2',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.1.3',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.1.4',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.1.5',
            tab: 'Organisation and management',
            nc: '02'
        },
        {
            key: '1.1.6',
            tab: 'Organisation and management',
            nc: '02'
        }
    ];
    useEffect(() => {
        if(search === 'true' || page === 'true') {
            setSearchNew('true')
            setTablist(defaultTablist);
            setTabItemlist(defaultTabItemlist);
            setTabItemlistInner(defaultTabItemlistInner);
        }
    }, [search]);
    return (
        <div>
            {/* <h1>Hello World</h1> */}
        </div>
    );
};
// ---- END

export default function Page() {
    const [searchNew, setSearchNew] = useState('false')
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
        setTimeout(() => {
            setOpen(false);
            router.push('/accreditation');
        }, 3000);
    };
    const showModal = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            router.push('/accreditation');
        }, 3000);
    };
    const handleGoBack = () => {
        router.back();
    };
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM','NABH']
    const [tabList, setTablist] = useState<any>([]); 
    const [tabListItem, setTabItemlist] = useState<any>([]); 
    const [tabListItemInner, setTabItemlistInner] = useState<any>([]); 
    const [showDrop, setShowDrop] = useState(false);
    const pageTabs = [
        {
            icon: <ConnectionIcon />,
            text: 'Section',
        },
        {
            icon: <InsightsIcon />,
            text: 'Insights',
        },
        {
            icon: <UserSingleIcon />,
            text: 'Users',
        }
    ];
    const [pageTabsActive, setPageTabsActive] = useState(0);
    const frequentList = [
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        },
        {
            text: '1.1.3 Ethics in blood bank/ blood centre',
            nc: '30 NC',
        }
    ];
    // TABLE DATA AD FORMAT
    interface DataType {
        key: string;
        user: {
            text: string,
            icon: any
        };
        department: string;
        role: string;
        task: string;
        compliance: string;
        nonCompliance: {
            text: string,
            haveNc: any
        };
        lastActivity: string
    }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'User',
            dataIndex: 'user',
            key: '0',
            width:'15%',
            render: (user: { text: string, icon: any }) => (
                <Flex align="center" gap={10}>
                    <Image src={user.icon} alt={user.text} className="icon-table" />
                    <p className="image-name">
                        {user.text}
                    </p>
                </Flex>
            ),
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: '1',
            width:'15%',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: '2',
            width:'15%',
        },
        {
            title: 'Task',
            dataIndex: 'task',
            key: '3',
        },
        {
            title: 'Compliance',
            dataIndex: 'compliance',
            key: '4',
            render: (text) => (
                <p className="green">{text}</p>
            ),
        },
        {
            title: 'Non Compliance',
            dataIndex: 'nonCompliance',
            key: '5',
            render: (nonCompliance: { text: string, haveNc: boolean }) => (
                <p className={nonCompliance.haveNc ? "flag" : ''}>{nonCompliance.haveNc ? <RedFlag /> : ''}{nonCompliance.text}</p>
            ),
        },
        {
            title: 'Last Activity',
            dataIndex: 'lastActivity',
            key: '6',
        },
        {
            title: '',
            key: '7',
            width: '4%',
            render: (_, record) => (
                <DropdownMenu record={record}   />
            ),
        },
    ];
    
    const data: DataType[] = [
        {
            key: '1',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '04 NC ', haveNc: true },
            lastActivity: '31/12/2023',
        },
        {
            key: '2',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '04 NC ', haveNc: true },
            lastActivity: '31/12/2023',
        },
        {
            key: '3',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '04 NC ', haveNc: true },
            lastActivity: '31/12/2023',
        },
        {
            key: '4',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '00 ', haveNc: false },
            lastActivity: '31/12/2023',
        },
        {
            key: '5',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '04 NC ', haveNc: true },
            lastActivity: '31/12/2023',
        },
        {
            key: '6',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '04 NC ', haveNc: true },
            lastActivity: '31/12/2023',
        },
        {
            key: '7',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '00 ', haveNc: false },
            lastActivity: '31/12/2023',
        },
        {
            key: '8',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '00 ', haveNc: false },
            lastActivity: '31/12/2023',
        },
        {
            key: '9',
            user: { text: 'John Doe', icon: ProfileImage },
            department: 'Eye',
            role: 'Cleaner',
            task: '10',
            compliance: '20',
            nonCompliance: { text: '00 ', haveNc: false },
            lastActivity: '31/12/2023',
        }
    ];
    const [displayData, setDisplayData] = useState<any>([]);
    useEffect(() => {
        if (pageTabsActive === 2) {
            setDisplayData(data.slice(0, 8))
        } else {
            setDisplayData([])
        }
    }, [pageTabsActive])
    const DropdownMenu: React.FC<{ record: DataType }> = ({ record }) => {
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
                <a className="only-icon" onClick={(e) => { e.preventDefault();}}>
                    <MenuIcon />
                </a>
            </Dropdown>
            </div>
        );
    };
    const handleChangeRoute = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log(event.target.tagName.toLowerCase())
        } else {
            router.push('/');
        }
    }
    return (

        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent setSearchNew={setSearchNew} setTablist={setTablist} setTabItemlist={setTabItemlist} setTabItemlistInner={setTabItemlistInner}  />
            </Suspense>
            <div className={searchNew === "true" ? 'page-head tabs' : 'page-head'}>
                <div className="container">
                    <Flex vertical className="w-full" gap={16}>
                        <Flex justify="space-between">
                            <Flex align="center" gap={14}>
                                <Button onClick={handleGoBack} className="only-icon back-icon" ><BackIcon /></Button>
                                {searchNew === "true" ?
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
                                    </Flex> :
                                    <h2>New Accreditation Name</h2>
                                }
                            </Flex>
                            <Button onClick={showModal} type="primary" >Publish</Button>
                        </Flex>
                        {
                            searchNew === "true" ?
                            <Flex>
                                {pageTabs.map((tab: any, index: any) => (
                                    <div className={pageTabsActive === index ? "custom-tab active" : 'custom-tab'} key={index} onClick={()=>{setPageTabsActive(index)}}>
                                        <Flex align="center" gap={10}>
                                            {tab.icon}
                                            <p>{tab.text}</p>
                                        </Flex>
                                    </div>
                                ))}
                            </Flex> : ''
                        }
                    </Flex>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    {
                        pageTabsActive === 0 ?
                        <ComplianceCard tabListItem={tabListItem} setTabItemlist={setTabItemlist} tabList={tabList} setTablist={setTablist} setTabItemlistInner={setTabItemlistInner} tabListItemInner={tabListItemInner} />: pageTabsActive === 1 ?
                        <Flex gap={'24px 20px'} className="w-full" wrap="wrap">
                            <div className="insight-div">
                                <p>Most Frequent NC</p>
                                <div className="compliance-card small-card no-scroll">
                                    <Flex vertical gap={2} className="w-full">
                                        {frequentList.map((item, index)=>(
                                            <div className="compliance-card--item" key={index}>
                                                <Flex gap={20} justify="space-between" align="center">
                                                    <p>{item.text}</p>
                                                    <p className="nc">{item.nc}</p>
                                                </Flex>
                                            </div>
                                        ))}
                                    </Flex>
                                </div>
                            </div>
                            <div className="insight-div">
                                <p>Defaulter Users</p>
                                <div className="compliance-card small-card no-scroll">
                                    <Flex vertical gap={2} className="w-full">
                                        {frequentList.map((item, index)=>(
                                            <div className="compliance-card--item" key={index}>
                                                <Flex gap={20} justify="space-between" align="center">
                                                    <Flex gap={10} align="center">
                                                        <div className="avatar big">
                                                            <Image src={ProfileImage} alt="Jenny Wilson" />
                                                        </div>
                                                        <p>Jenny Wilson</p>
                                                    </Flex>
                                                    <p className="nc">{item.nc}</p>
                                                </Flex>
                                            </div>
                                        ))}
                                    </Flex>
                                </div>
                            </div>
                            <div className="insight-div">
                                <p>Document Expiring</p>
                                <div className="compliance-card small-card no-scroll">
                                    <Flex vertical gap={2} className="w-full">
                                        {frequentList.map((item, index)=>(
                                            <div className="compliance-card--item" key={index}>
                                                <Flex vertical gap={4}>
                                                    <Flex gap={20} justify="space-between" align="center">
                                                        <p>License-Form 26 G</p>
                                                        <p className="small">24/12/2023</p>
                                                    </Flex>
                                                    <p className="normal-text">Document - Quality Document</p>
                                                </Flex>
                                            </div>
                                        ))}
                                    </Flex>
                                </div>
                            </div>
                            <div className="insight-div">
                                <p>Upcoming Audit</p>
                                <div className="compliance-card small-card no-scroll">
                                    <Flex vertical gap={2} className="w-full">
                                        {frequentList.map((item, index)=>(
                                            <div className="compliance-card--item" key={index}>
                                               <Flex vertical gap={4}>
                                                    <Flex gap={20} justify="space-between" align="center">
                                                        <p>1. Organisation and management</p>
                                                        <p className="small">24/12/2023</p>
                                                    </Flex>
                                                    <p className="nc small">NC - 23</p>
                                                </Flex>
                                            </div>
                                        ))}
                                    </Flex>
                                </div>
                            </div>
                        </Flex> :
                        <div>
                            <Table
                                dataSource={displayData}
                                columns={columns}
                                pagination={false}
                                onRow={(record, rowIndex) => {
                                    return {
                                        onClick: (event) => {handleChangeRoute(event, record, rowIndex)}, 
                                    };
                                }}
                            />
                            <Pagination setDisplayData={setDisplayData} data={data} />
                        </div>
                    }
                </div>
            </div>
            <SuccessModal open={open} setOpen={setOpen} title="CAP_HEM Successfully Added" text='Lorim ipsume is simplly dummy text that will go here dummy text' />
        </main>
    );
}
