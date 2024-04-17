'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Table, Dropdown, Flex, Menu, Modal, Form, Input, Select } from "antd";
import type { TableProps } from 'antd';
import type { MenuProps } from 'antd';
import ProtectedRoute from "../components/ProtectedRoutes";
import Pagination from "../components/Pagination";
// IMAGES
import Plus from "../../../public/images/plus.svg";
import NabhIcon from '../../../public/images/nabh-image.png';
import ProfileImage from '../../../public/images/profile.png';
import RedFlag from '../../../public/images/red-flag.svg';
import MenuIcon from '../../../public/images/three-dots.svg';
import CloseIcon from '../../../public/images/close-small.svg';
import FormTextIcon from '../../../public/images/form-text.svg';
import FormPersonIcon from '../../../public/images/form-person.svg';
import DownIcon from '../../../public/images/chevron.svg'


export default function Page() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [tableClick, settableClick] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const items: MenuProps['items'] = [
        {
            label: <Link className='drop--item' href={'/templates'}>Browse Templates</Link>,
            key: '0',
        },
        {
            label: <p className='drop--item' onClick={showModal}>Start Blank</p>,
            key: '1',
        }
    ];
    const handleOk = () => {
        setConfirmLoading(true);
        // custom loading
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            router.push('/new-accreditation');
        }, 1000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk()
    };

    // TABLE DATA AD FORMAT
    interface DataType {
        key: string;
        accreditation: {
            text: string,
            icon: any
        };
        totalCompliance: string;
        compliance: string;
        nonCompliance: {
            text: string,
            haveNc: any
        };
        consultant: {
            text: string,
            icon: any
        };
        upcomingAudit: {
            date: string,
            pastDate: string
        };
    }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Accreditation',
            dataIndex: 'accreditation',
            key: '0',
            render: (accreditation: { text: string, icon: any }) => (
                <Flex align="center" gap={8}>
                    <Image src={accreditation.icon} alt={accreditation.text} className="icon-table" />
                    <p className="image-name">
                        {accreditation.text}
                    </p>
                </Flex>
            ),
        },
        {
            title: 'Total Compliance',
            dataIndex: 'totalCompliance',
            key: '1',
        },
        {
            title: 'Compliance',
            dataIndex: 'compliance',
            key: '2',
            render: (text) => (
                <p className="green">{text}</p>
            ),
        },
        {
            title: 'Non Compliance',
            dataIndex: 'nonCompliance',
            key: '3',
            render: (nonCompliance: { text: string, haveNc: boolean }) => (
                <p className={nonCompliance.haveNc ? "flag" : ''}>{nonCompliance.haveNc ? <RedFlag /> : ''}{nonCompliance.text}</p>
            ),
        },
        {
            title: 'Consultant',
            dataIndex: 'consultant',
            key: '4',
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
            title: 'Upcoming Audit',
            dataIndex: 'upcomingAudit',
            key: '5',
            render: (upcomingAudit: { date: string, pastDate: string }) => (
                <p>
                    {upcomingAudit.date} <span className="small">{upcomingAudit.pastDate}</span>
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
    const data: DataType[] = [
        {
            key: '1',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '2',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '3',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '30 NC', haveNc: true },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '4',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '5',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '6',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '7',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '8',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        },
        {
            key: '9',
            accreditation: { text: 'NABH', icon: NabhIcon },
            totalCompliance: '100',
            compliance: '70 C',
            nonCompliance: { text: '00', haveNc: false },
            consultant: { text: 'John Doe', icon: ProfileImage },
            upcomingAudit: { date: '31/12/2023', pastDate: '(In 36 days)' }
        }
    ];
    // DEFAULT PAGINATION
    const [displayData, setDisplayData] = useState(data.slice(0, 8));
    // TABLE HIHLIGHTED ROWS
    const rowClassName = (record: DataType, index: number) => {
        if (record.nonCompliance.haveNc) {
            return 'highlight';
        }
        return '';
    };
    // TABLE ACTIONS
    const DropdownMenu: React.FC<{ record: DataType }> = ({ record }) => {
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
    const [form] = Form.useForm();
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
    const handleChangeRoute = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log(event.target.tagName.toLowerCase())
        } else {
            router.push('/new-accreditation?page=true');
        }
    }
    return (
        <ProtectedRoute>
            <main>
                <div className='page-head'>
                    <div className="container">
                        <h1 className="mb-0">Your obtained Accreditations</h1>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <Button type="primary" className="icon"><Plus />Add Accreditation</Button>
                        </Dropdown>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container">
                        <Table
                            dataSource={displayData}
                            columns={columns}
                            rowClassName={rowClassName}
                            pagination={false}
                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: (event) => {handleChangeRoute(event, record, rowIndex)}, 
                                };
                            }}
                        />
                        <Pagination setDisplayData={setDisplayData} data={data} />
                    </div>
                </div>
            </main>

            {/* MODALS */}
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                closeIcon={<CloseIcon />}
                footer={false}
                centered
            >
                <div className="modal--header">
                    <p className="modal--title">Create Accreditation</p>
                </div>
                <div className="modal--body">
                    <Form
                        className="modal-from"
                        onFinish={onFinish}
                        name="create-accreditation"
                        form={form}
                    >
                        <Form.Item name="accreditationName" label="" rules={[{ required: true }]}>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <FormTextIcon />
                                    <p className="form-feild--custom">Accreditation Name</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <Input placeholder="Type..." />
                            </Flex>
                        </Form.Item>
                        <Flex gap={24} vertical>
                            <Flex align="center" gap={12}>
                                <Flex style={{ minWidth: '151px' }} gap={6}>
                                    <FormPersonIcon />
                                    <p className="form-feild--custom">Consultant</p>
                                </Flex>
                                <p className="form-feild--seprator">:</p>
                                <div className="full">
                                    <Form.Item name="consultant" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                        <Select
                                            placeholder="Consultant"
                                            allowClear
                                            mode="multiple"
                                            maxTagCount={2}
                                            maxTagPlaceholder={(omittedValues) => (
                                                <p>+{omittedValues.length}</p>
                                            )}
                                            dropdownRender={dropdownRender}
                                            suffixIcon={<DownIcon />}
                                            options={[
                                                { value: 'John Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="John Doe" /></div><p>Anirudh Doe</p> </div>, title: 'jphn@gmail.com' },
                                                { value: 'Anirudh Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Anirudh Doe" /></div><p>Anirudh Doe</p></div>, title: 'amirudh@gmail.com' },
                                                { value: 'Dhruvil Doe', label: <div className="employee"><div className="avatar"><Image src={ProfileImage} alt="Dhruvil Doe" /></div><p>Dhruvil Doe</p></div>, title: 'dhruvil@gmail.com' },
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
                                    loading={confirmLoading}
                                >
                                    Create
                                </Button>
                            </Flex>
                        </Flex>
                    </Form>
                </div>
            </Modal>
        </ProtectedRoute>
    );
}
