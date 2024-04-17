'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Flex, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Inter } from "next/font/google";
import ComplianceModal from "./ComplianceModal";
// IMAGES
import AddIcon from '../../../public/images/add.svg'
import InfoIcon from '../../../public/images/info.svg'
import ChevronIcon from '../../../public/images/chevron.svg';
import PlusIcon from '../../../public/images/add.svg';
import MenuIcon from '../../../public/images/three-dots.svg';
import ConnectionIcon from '../../../public/images/connecttion.svg';


interface ComplianceCardProps {
    tabListItem: any; 
    setTabItemlist: any;
    tabList: any;
    setTablist: any;
    tabListItemInner: any;
    setTabItemlistInner: any;
}
const inter = Inter({ subsets: ["latin"] });

const items: MenuProps['items'] = [
    {
        label: <p className='drop--item' onClick={() => {console.log('action')}}>Edtit</p>,
        key: '1',
    },
    {
        label: <p className='drop--item' onClick={() => {console.log('action')}}>Delete</p>,
        key: '2',
    }
];

const ComplianceCard: React.FC<ComplianceCardProps> = ({tabListItem, setTabItemlist, setTablist, tabList, setTabItemlistInner, tabListItemInner}) => {
    const router = useRouter();
    const [formData, setFormData] = useState(0)
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        // setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const [briefDescription, setBriefDescription] = useState('')
    const [detailedDescription, setDetailedDescription] = useState('')
    const onFinish = (values: any) => {
        console.log(values, 'Create New Section');
        const qlEditors = document.querySelectorAll('.ql-editor');
        qlEditors.forEach((qlEditor, index) => {
            if(index === 0) {
                console.log(`Brief Description :`, qlEditor.innerHTML);
                setBriefDescription(qlEditor.innerHTML)
            } else {
                console.log(`Detailed Description :`, qlEditor.innerHTML);
                setDetailedDescription(qlEditor.innerHTML)
            }
        });
        handleOk();
        // THIS IS ONLY FOR F.E
        if (formData === 1) {
            const newItem = {
                key: String(tabList.length + 1),
                tab: values.sectionName,
                nc: '02'
            };
            setTablist([...tabList, newItem]);
        } else if (formData === 2) {
            const newItem = {
                key: String(`1.${tabListItem.length + 1}`),
                tab: values.sectionName,
                nc: '02'
            };
            setTabItemlist([...tabListItem, newItem]);
        } else if (formData === 3) {
            const newItem = {
                key: String(`1.1.${tabListItemInner.length + 1}`),
                tab: values.sectionName,
                nc: '02'
            };
            setTabItemlistInner([...tabListItemInner, newItem]);
        }
    };
    const handleTab = (e: any, index: any) => {
        e.preventDefault()
        setActiveTab(index)
    };
    const [activeIndex, setActiveIndex] = useState(0);
    const handleAccordionClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const handleSendRoute = (routeLink: any) => {
        router.push(routeLink)
    }
    return (
        <div>
            <div className="compliance-card">
                <div className="compliance-card--sidebar">
                    <Flex vertical gap={10}>
                        {tabList.map((item: any, index: number) => (
                            <div className={`compliance-card--tab ${activeTab === index ? 'active' : ''}`} key={index} onClick={(e) => { handleTab(e, index) }}>
                                <Flex gap={10} align="center" justify="space-between">
                                    <p className="compliance-card--tab-title">{item.key}. {item.tab}</p>
                                    <Flex gap={10} align="center">
                                        <Button className="only-icon" onClick={() => { showModal(); setFormData(1) }}><InfoIcon /></Button>
                                        {
                                            tabListItemInner.length !== 0 && 
                                            <div className={`nc-tag ${inter.className}`}>
                                                {item.nc}
                                            </div>
                                        }
                                        <Dropdown menu={{ items }} trigger={['click']}>
                                            <a onClick={(e) => e.preventDefault()} style={{display: 'flex'}}>
                                                <MenuIcon />
                                            </a>
                                        </Dropdown>
                                    </Flex>
                                </Flex>
                            </div>
                        ))}
                        <Button className="compliance-card--add-icon" onClick={() => { showModal(); setFormData(1) }}><AddIcon /> Add Section</Button>
                    </Flex>
                </div>
                <div className="compliance-card--content">
                    {tabList.length !== 0 ?
                        <Flex gap={12} vertical>
                            <Button className="compliance-card--add-icon small" onClick={() => { showModal(); setFormData(2) }}><AddIcon /> Add Sub Section</Button>
                            <Flex gap={12} vertical>
                                {tabListItem.map((item: any, index: number) => (
                                    <div key={index} className="custom--acordian">
                                        <Flex gap={10} align="center" justify="space-between" className={`custom--accordion--head ${activeIndex === index ? 'active' : ''}`}>
                                            <Flex align="center" gap={8}>
                                                <Flex align="center" gap={8} onClick={() => handleAccordionClick(index)}>
                                                    <Flex align="center" className="rotate">
                                                        <ChevronIcon />
                                                    </Flex>
                                                    <p className="compliance-card--tab-title">{item.key} {item.tab}</p>
                                                </Flex>
                                                <Button className="only-icon" onClick={() => { showModal(); setFormData(3) }}><PlusIcon /></Button>
                                            </Flex>
                                            <Flex gap={10} align="center">
                                                <Button className="only-icon" onClick={() => { showModal(); setFormData(2) }}><InfoIcon /></Button>
                                                {
                                                    tabListItemInner.length !== 0 && activeIndex !== index &&
                                                    <div className={`nc-tag ${inter.className}`}>
                                                        {item.nc}
                                                    </div>
                                                }
                                                <Dropdown menu={{ items }} trigger={['click']}>
                                                    <a onClick={(e) => e.preventDefault()}>
                                                        <MenuIcon />
                                                    </a>
                                                </Dropdown>
                                            </Flex>
                                        </Flex>
                                        <div className={`custom--accordion--body ${activeIndex === index ? '' : 'd-none'}`}>
                                            <Flex vertical>
                                                {
                                                    tabListItemInner.map((item: any, index: number)=> (
                                                        <div className="custom--acordian--body--item" key={index}>
                                                            <Flex gap={10} align="center" justify="space-between">
                                                                <Flex align="center" gap={8} onClick={() => handleSendRoute('/accreditation-inner')}>
                                                                    <ConnectionIcon />
                                                                    <p className="compliance-card--tab-title">{item.key} {item.tab}</p>
                                                                </Flex>
                                                                <Flex gap={10} align="center">
                                                                    <Button className="only-icon" onClick={() => { showModal(); setFormData(3) }}><InfoIcon /></Button>
                                                                    <p>ok</p>
                                                                    <div className={`nc-tag ${inter.className}`}>
                                                                        {item.nc}
                                                                    </div>
                                                                    <Dropdown menu={{ items }} trigger={['click']}>
                                                                        <a onClick={(e) => e.preventDefault()}>
                                                                            <MenuIcon />
                                                                        </a>
                                                                    </Dropdown>
                                                                </Flex>
                                                            </Flex>
                                                        </div>
                                                    ))
                                                }
                                            </Flex>
                                        </div>
                                    </div>
                                ))}
                            </Flex>
                        </Flex>
                        : ''
                    }
                </div>
            </div>
            <ComplianceModal open={open} handleOk={handleOk} handleCancel={handleCancel} formData={formData} onFinish={onFinish} briefDescription={briefDescription} detailedDescription={detailedDescription} confirmLoading={confirmLoading} />
        </div>
    )
};

export default ComplianceCard;