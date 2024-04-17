'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, Flex } from "antd";
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import CheckSuccess from '../../../../public/images/check-success.svg';


interface SuccessModalProps {
    open: any; 
    setOpen: any; 
    title: string; 
    text: string; 
}
const SuccessModal: React.FC<SuccessModalProps> = ({open, setOpen, title, text}) => {
    return (
        <Modal
            open={open}
            onOk={()=> {setOpen(false)}}
            onCancel={()=>{setOpen(false)}}
            closeIcon={<CloseIcon />}
            footer={false}
            centered
            className="success"
            >
            <div className="modal--body">
                <Flex vertical gap={32} align="center">
                    <CheckSuccess />
                    <Flex vertical gap={16} align="center">
                        <h2>{title}</h2>
                        <p className="success-text">{text}</p>
                    </Flex>
                </Flex>
            </div>
        </Modal>
    )
};

export default SuccessModal;