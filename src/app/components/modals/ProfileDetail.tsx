import React from 'react'
import ModalLgClose from '../../../../public/images/lg-modal-close.svg';
import { Avatar, Col, Flex, Modal, Row } from 'antd';
import Image from 'next/image';
import PhoneIcon from '../../../../public/images/phone-icon.svg';
import EmailIcon from '../../../../public/images/mail-icon.svg';

const userDetails = {
    experience: '4+',
    industry: 'Pharma',
    extra: 'Lorem Ipsum',
    qualification1: `Bachelor's Degree in Business Administration`,
    qualification2: `SHRM-CP (Society for Human Resource Management - Certified Professional) Certification`,
    location: 'Delhi, India',
}
const ProfileDetailModal = ({ profileModal, setProfileModal }: { profileModal?: any; setProfileModal?: any }) => {
    const handleOk = () => {
        setProfileModal(false);
    }
    const handleCancel = () => {
        setProfileModal(false);
    };

    return (
        <Modal
            centered
            open={profileModal}
            onOk={handleOk}
            onCancel={handleCancel}
            className='full-screen--modal profile-details--modal'
            footer={false}
            closeIcon={<ModalLgClose />}
        >
            <div className="modal-lg--header">
                <div className='container'>
                    <Flex gap={24} align='center'>
                        <Image src={`https://rb.gy/k33lgs`} alt="user" width={72} height={72} className='modal-user--img' />
                        <Flex gap={12} vertical>
                            <p className="modal-lg--title">Arlene McCoy</p>
                            <Flex gap={20} align='center' className='user-details--contact'>
                                <Flex gap={6} align='center'>
                                    <PhoneIcon />
                                    <p>9876543210</p>
                                </Flex>
                                <Flex gap={6} align='center' className='pointer' onClick={() => window.open('mailto:John.doe@gmail.com')}>
                                    <EmailIcon />
                                    <p>John.doe@gmail.com</p>
                                </Flex>
                            </Flex>
                        </Flex>

                    </Flex>
                </div>
            </div>
            <div className="modal-lg--body big-head">
                <Flex className='form-container small' vertical gap={20}>
                    {/* Expertise details  */}
                    <Flex vertical className='modal-lg-forms'>
                        <p className='header'>Expertise</p>
                        <div className='body-content'>
                            <Flex vertical gap={13}>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Year’s of Experience</h4>
                                    <span>:</span>
                                    <p>{userDetails.experience} Years</p>
                                </Flex>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Industry</h4>
                                    <span>:</span>
                                    <p>{userDetails.industry}</p>
                                </Flex>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Lorem Ipsum</h4>
                                    <span>:</span>
                                    <p>{userDetails.extra}</p>
                                </Flex>
                            </Flex>
                        </div>

                    </Flex>

                    {/* Qualification  details  */}
                    <Flex vertical className='modal-lg-forms'>
                        <p className='header'>Qualification </p>
                        <div className='body-content'>
                            <Flex vertical gap={13}>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Qualification 1</h4>
                                    <span>:</span>
                                    <p>{userDetails.qualification1}</p>
                                </Flex>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Qualification 2</h4>
                                    <span>:</span>
                                    <p>{userDetails.qualification2}</p>
                                </Flex>
                            </Flex>
                        </div>

                    </Flex>

                    {/* Contact  details  */}
                    <Flex vertical className='modal-lg-forms'>
                        <p className='header'> Details</p>
                        <div className='body-content'>
                            <Flex vertical gap={13}>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Location</h4>
                                    <span>:</span>
                                    <p>{userDetails.location}</p>
                                </Flex>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Location</h4>
                                    <span>:</span>
                                    <p>{userDetails.extra}</p>
                                </Flex>
                                <Flex gap={20} align='center' className='user-overview'>
                                    <h4>Location</h4>
                                    <span>:</span>
                                    <p>{userDetails.extra}</p>
                                </Flex>
                            </Flex>
                        </div>

                    </Flex>

                </Flex>
            </div>
        </Modal >
    )
}

export default ProfileDetailModal;
