import { Flex, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Pagination from "../components/Pagination";
import LicenseFormModal from './modals/LicenseForm';
import NonComplianceModal from './modals/NonCompliance';
import ExpDocModal from './modals/ExpiredDocs';
import UpcomingAuditsModal from './modals/UpcomingAudits';

const HomeTabs = ({ data }: { data?: any }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNcModalOpen, setIsNcModalOpen] = useState(false);
    const [isExpModalOpen, setIsExpModalOpen] = useState(false);
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    const [activeTab, setActiveTab] = useState(data[0].id);
    const [displayData, setDisplayData] = useState(data[0].content[0].data.slice(0, 8));

    // Whenever the active tab changes,  displayData state changes wrt to the new tab's data.
    useEffect(() => {
        const currentTabContent = data.find((item?: any) => item.id === activeTab)?.content[0].data.slice(0, 8);
        setDisplayData(currentTabContent);
    }, [activeTab, data]);
    const handleChangeTable = (event: any, record: any, rowIndex: any) => {
        if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
            // console.log(event.target.tagName.toLowerCase())
        } else {
            if (activeTab == '1') {
                setIsModalOpen(true);
            } else if (activeTab == '2') {
                setIsNcModalOpen(true);
            } else if (activeTab == '3') {
                setIsExpModalOpen(true);
            } else if (activeTab == '4') {
                setIsAuditModalOpen(true);
            }
        }
    }

    return (
        <div>
            <Flex justify="center">
                {data.map((item?: any) => (
                    <Flex
                        gap="8px"
                        align="start"
                        vertical
                        className={`home-tabs--large ${activeTab === item.id ? 'active-tab' : 'inactive-tab'}`}
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <Flex justify='space-between' className='w-full' align='center'>
                            <p>{item.label}</p>
                            {item.icon}
                        </Flex>
                        <h2 className='large'>{item.count}</h2>
                    </Flex>
                ))}
            </Flex>
            {data.map((item?: any) => {
                if (activeTab === item.id) {
                    return (
                        <div key={item.id} className="hometabs-tables">
                            <Table
                                dataSource={displayData}
                                columns={item.content[0].columns}
                                pagination={false}
                                onRow={(record, rowIndex) => {
                                    return {
                                        onClick: (event) => {handleChangeTable(event, record, rowIndex)}, 
                                    };
                                }}
                            />
                            <Pagination setDisplayData={setDisplayData} data={item.content[0].data} />
                            <LicenseFormModal
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                            />
                            <NonComplianceModal
                                isNcModalOpen={isNcModalOpen}
                                setIsNcModalOpen={setIsNcModalOpen}
                            />
                            <ExpDocModal
                                isExpModalOpen={isExpModalOpen}
                                setIsExpModalOpen={setIsExpModalOpen}
                            />
                            <UpcomingAuditsModal
                                isAuditModalOpen={isAuditModalOpen}
                                setIsAuditModalOpen={setIsAuditModalOpen}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default HomeTabs;
