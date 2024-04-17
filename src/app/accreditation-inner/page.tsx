'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Flex, Modal, Tooltip, Input, Table, Dropdown, Menu, Empty, Form, Select  } from 'antd';
import type { TableProps } from 'antd';
import Pagination from "../components/Pagination";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ProtectedRoute from "../components/ProtectedRoutes";
import AccreditationModal from "../components/modals/AccreditationModal";
import FormOverview from "../components/modals/FormOverview";
import SOPOverview from "../components/modals/SopOverview";
import CheckListOverview from "../components/modals/CheckListOverview";
import SuccessModal from "../components/modals/SuccessModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LeftIconSm from '../../../public/images/chevron-left-sm.svg';
import RightIconSm from '../../../public/images/chevron-right-sm.svg';
// IMAGES
import CloseIcon from '../../../public/images/close-small.svg';
import Plus from "../../../public/images/plus.svg";
import BackIcon from '../../../public/images/chevron-left.svg'
import NabhImage from '../../../public/images/nabh-image.png';
import InfoIcon from '../../../public/images/info.svg'
import UpDown from '../../../public/images/up-down.svg'
import EmptyState from '../../../public/images/empty-state.svg'
import SearchDark from '../../../public/images/search-dark.svg'
import ConnectionIcon from '../../../public/images/connection-2.svg';
import InsightsIcon from '../../../public/images/insights.svg';
import DropIocn from '../../../public/images/chevron.svg';
import ProfileImage from '../../../public/images/profile.png';
import MenuIcon from '../../../public/images/three-dots.svg';
import LeftIcon from '../../../public/images/chevron-left-md.svg';
import RightIcon from '../../../public/images/chevron-right-md.svg';
import DownIcon from '../../../public/images/chevron.svg'
import DocumentIcon from '../../../public/images/document.svg'


const CustomEmptyState = ({ showModal }: { showModal: () => void }) => (
    <Empty
        className="empty-custom"
        image={null}
        description={
        <div className="custom-empty-container">
            <EmptyState />
            <Flex vertical gap={18}>
                <p className="empty-custom--para">Define a new evidence by clicking “Define Evidence CTA”</p>
                <Button type="primary" onClick={showModal}>Define Evidence</Button>
            </Flex>
        </div>
      }
    />
);

export default function Page() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [openFormOverview, setOpenFormOverview] = useState(false);
    const [openSopOverview, setOpenSopOverview] = useState(false);
    const [openCheckListOverview, setOpenCheckListOverview] = useState(false);
    const [startDate, setStartDate] = useState<any>(new Date());
    const handleCancel = () => {
        setOpen(false)
    };
    const showModal = () => {
        setOpen(true);
    };
    const handleGoBack = () => {
        router.back();
    };
    const dropList = ['NABH', 'ISO', 'NABH_BB', 'NABH_112', 'CAP_HEM','NABH']
    const [showDrop, setShowDrop] = useState(false);
    const pageTabs = [
        {
            icon: <ConnectionIcon />,
            text: 'Details',
        },
        {
            icon: <InsightsIcon />,
            text: 'Activity',
        }
    ];
    const [pageTabsActive, setPageTabsActive] = useState(0);
    // TABLE DATA AD FORMAT
    interface DataType {
        key: string;
        user: {
            text: string,
            icon: any
        };
        evidenceType: string;
        evidenceName: string;
        updatedOn: string;
    }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'User',
            dataIndex: 'user',
            key: '0',
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
            title: 'Evidence Type',
            dataIndex: 'evidenceType',
            key: '1',
        },
        {
            title: 'Evidence Name',
            dataIndex: 'evidenceName',
            key: '2',
        },
        {
            title: 'Uploaded on',
            dataIndex: 'updatedOn',
            key: '3',
        },
        {
            title: '',
            key: '4',
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
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '2',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '3',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '4',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '5',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '6',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '7',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '8',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
        {
            key: '9',
            user: { text: 'John Doe', icon: ProfileImage },
            evidenceType: 'Document - SOP',
            evidenceName: '31/12/2023',
            updatedOn: '31/12/2023'
        },
    ];
    const [displayData, setDisplayData] = useState<any>([]);
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
    
    // DOCUMEN TABLE
    interface DataTypeDocument {
        key: string;
        name: string,
        type: string;
        cnc: string;
        date: string;
        remarks: string;
        action: string;
    }
    const columnsDocument: TableProps<DataTypeDocument>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '0',
            render: (text: string) => (
                <p style={{fontWeight: 500}}>
                    {text}
                </p>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: '1',
        },
        {
            title: 'C/NC',
            dataIndex: 'cnc',
            key: '2',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: '3',
        },
        {
            title: 'Remark',
            dataIndex: 'remarks',
            key: '4',
            render: (text: string) => (
                <p className="ellips" style={{maxWidth: '220px'}}>
                    {text}
                </p>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (
                <DropdownMenuDocumentData record={record}   />
            ),
        },
        {
            title: '',
            key: '6',
            render: (_, record) => (
                <DropdownMenuDocument record={record}   />
            ),
        },
    ];
    const [documentData, setDocumentData] = useState<any>([]);
    const [displayData2, setDisplayData2] = useState<any>(documentData.slice(0, 8));
    const handleOk = () => {
        setOpen(false);
        setDocumentData([
            {
               key: '1',
               name: 'License-Form 26 G',
               type: 'SOP',
               cnc: '-',
               date: '31/12/2023, 10:00 am',
               remarks: 'Meet eligibility criteria and pass health checks.',
               action: 'string',
           },
           {
               key: '2',
               name: 'License-Form 26 G',
               type: 'Form',
               cnc: '-',
               date: '31/12/2023, 10:00 am',
               remarks: 'Meet eligibility criteria and pass health checks. Meet eligibility criteria and pass health checks.',
               action: 'string',
           },
           {
               key: '3',
               name: 'License-Form 26 G',
               type: 'Checklist',
               cnc: '-',
               date: '31/12/2023, 10:00 am',
               remarks: 'Meet eligibility criteria and pass health checks.',
               action: 'string',
           }
        ]);
        setOpenSuccess(true);
        setTimeout(() => {
            setOpenSuccess(false);
        }, 3000);
    };
    useEffect(() => {
        if(documentData.length > 0) {
            setDisplayData2(documentData.slice(0, 8))
        }
    }, [documentData]);
    const DropdownMenuDocument: React.FC<{ record: DataTypeDocument }> = ({ record }) => {
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
    const DropdownMenuDocumentData: React.FC<{ record: DataTypeDocument }> = ({ record }) => {
        const handleMenuClick = (e: any) => {
            if (e.key === 'createExistingFile') {
                setOpenNew(true);
            } else if (e.key === 'createNewFile') {
                console.log(record.type)
                if(record.type === 'Form') {
                    setOpenFormOverview(true)
                } else if(record.type === 'SOP') {
                    setOpenSopOverview(true)
                } else if(record.type === 'Checklist') {
                    setOpenCheckListOverview(true)
                }
            }
        };
        const items = [
            {
                label: <p className='drop--item'>Create Existing File</p>,
                key: 'createExistingFile',
            },
            {
                label: <p className='drop--item'>Create new file</p>,
                key: 'createNewFile',
            }
        ];
        return (
            <Dropdown overlay={<Menu onClick={handleMenuClick}>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>} trigger={['click']}>
                <a className="drop-acrion--custom" onClick={(e) => { e.preventDefault();}}>
                    Create Evidence <DropIocn />
                </a>
            </Dropdown>
        );
    };
    useEffect(() => {
        if (pageTabsActive === 1) {
            setDisplayData(data.slice(0, 8))
        } else {
            setDisplayData([])
        }
    }, [pageTabsActive]);
    const [segmented, setSegmented] = useState<number>(1);
    const htmlCommon = (
        <>
            <h2>The blood bank/ blood centre:</h2>
            <p><strong>Basics</strong></p>
            <ul>
                <li>Licensed, accredited facility with qualified staff.</li>
                <li>Strict donor screening and testing.</li>
                <li>Accurate blood typing and matching.</li>
                <li>Proper recordkeeping and waste management.</li>
            </ul>
            <p><strong>Basics</strong></p>
            <ul>
                <li>Licensed, accredited facility with qualified staff.</li>
                <li>Strict donor screening and testing.</li>
                <li>Accurate blood typing and matching.</li>
                <li>Proper recordkeeping and waste management.</li>
            </ul>
        </>
    );
    const handleOkNew = () => {
        setOpenNew(false);
    }
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
    return (
        <ProtectedRoute>
            <main>
                <div className={'page-head tabs'}>
                    <div className="container">
                        <Flex vertical className="w-full" gap={16}>
                            <Flex justify="space-between">
                                <Flex align="center" gap={14}>
                                    <Button onClick={handleGoBack} className="only-icon back-icon" ><BackIcon /></Button>
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
                                            <h1 className="mb-0">/ 1.1.3 Ethics in blood bank/ blood centre</h1>
                                        </Flex>
                                </Flex>
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
                        {
                            pageTabsActive === 0 ?
                            <Flex gap={24} vertical>
                                <Flex justify="space-between" align="center">
                                    <div className="segmented">
                                        <div className={segmented === 0 ? "active" : ''} onClick={()=>setSegmented(0)}><p>Information</p></div>
                                        <div className={segmented === 1 ? "active" : ''} onClick={()=>setSegmented(1)}><p>Documentation</p></div>
                                    </div>
                                    <Button type="primary" className="icon" onClick={showModal}><Plus />Define Evidence</Button>
                                </Flex>
                                {
                                    segmented === 0?
                                    <Flex gap={20}>
                                        <div className="info--card">
                                            <div className="info--card--head">
                                                <h2>Brief description</h2>
                                            </div>
                                            <div className="info--card--body" >
                                                {htmlCommon}
                                            </div>
                                        </div>
                                        <div className="info--card">
                                            <div className="info--card--head">
                                                <h2>Detailed description</h2>
                                            </div>
                                            <div className="info--card--body" >
                                                {htmlCommon}
                                            </div>
                                        </div>
                                    </Flex>:
                                    <div>
                                        <Table
                                            dataSource={displayData2}
                                            columns={columnsDocument}
                                            pagination={false}
                                            // onRow={(record, rowIndex) => {
                                            //     return {
                                            //         onClick: (event) => {console.log(event.target,record,rowIndex,'ll')}, 
                                            //     };
                                            // }}
                                            locale={{
                                                emptyText: <CustomEmptyState showModal={showModal} />,
                                            }}
                                        />
                                        <Pagination
                                            setDisplayData={setDisplayData2} 
                                            data={documentData} />
                                    </div>
                                }
                            </Flex> :
                            <Flex gap={20} vertical>
                                <Flex justify="space-between">
                                    <h2 className="large">Activity</h2>
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
                                    />
                                    <Pagination
                                        setDisplayData={setDisplayData} 
                                        data={data} />
                                </div>
                            </Flex>
                        }
                    </div>
                </div>
                <AccreditationModal handleOk={handleOk} handleCancel={handleCancel} open={open} />
                <FormOverview setOpen={setOpenFormOverview} open={openFormOverview} />
                <SOPOverview setOpen={setOpenSopOverview} open={openSopOverview} />
                <CheckListOverview setOpen={setOpenCheckListOverview} open={openCheckListOverview} />
                {/* Success Modal */}
                <SuccessModal open={openSuccess} setOpen={setOpenSuccess} title="Evidence Defined Successfully" text='Lorim ipsume is simplly dummy text that will go here dummy text' />
                {/* CREATE EVIDENCE */}
                <Modal
                    open={openNew}
                    onOk={handleOkNew}
                    onCancel={()=>{setOpenNew(false)}}
                    closeIcon={<CloseIcon />}
                    footer={false}
                    centered
                >
                    <div className="modal--header">
                        <p className="modal--title">Connect Evidence</p>
                    </div>
                    <div className="modal--body">
                        <Form
                            className="modal-from"
                            onFinish={handleOkNew}
                            name="create-evidencde"
                        >
                            <Flex gap={24} vertical>
                                <Flex align="center" gap={12}>
                                    <Flex style={{ minWidth: '151px' }} gap={6}>
                                        <DocumentIcon />
                                        <p className="form-feild--custom">Select Document</p>
                                    </Flex>
                                    <p className="form-feild--seprator">:</p>
                                    <div className="full">
                                        <Form.Item name="selectDocument" label="" rules={[{ required: true }]} style={{marginBottom: 0}}>
                                            <Select
                                                showSearch
                                                placeholder="Select Document"
                                                allowClear
                                                suffixIcon={<DownIcon />}
                                                options={[
                                                    { value: 'option-1', label: 'option 1' },
                                                    { value: 'option-2', label: 'option 2' },
                                                    { value: 'option-3', label: 'option 3' },
                                                ]}
                                            />
                                        </Form.Item>
                                    </div>
                                </Flex>
                                <Flex justify="flex-end" gap={10} align="center">
                                    <Button key="back" onClick={()=>{setOpenNew(false)}}>
                                        Cancel
                                    </Button>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Select
                                    </Button>
                                </Flex>
                            </Flex>
                        </Form>
                    </div>
                </Modal>
            </main>
        </ProtectedRoute>
    );
}
