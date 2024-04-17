import React from 'react';
import { Button, Flex, Modal } from 'antd';

import ModalLgClose from '../../../../public/images/lg-modal-close.svg';
import Invite from '../../../../public/images/invite-consultant.svg';
import { useRouter } from 'next/navigation';


const InviteConsultant = ({ sendInvite, setSendInvite }: { sendInvite?: any; setSendInvite?: any }) => {
    const router = useRouter();
    const handleOk = () => {
        router.push('/consultant');
        setSendInvite(false);
    }
    const handleCancel = () => {
        setSendInvite(false);
    };

    return (
        <Modal
            open={sendInvite}
            onCancel={handleCancel}
            closeIcon={<ModalLgClose />}
            footer={false}
            centered
            className='modal-sm2'
        >
            <div className="modal--header">
                <p className="modal--title">Invite Consultant</p>
            </div>
            <div className="modal--body">
                <Flex gap={14} vertical justify='center' align='center'>
                    <Invite />
                    <p className='modal--text'>You are about to share invite to the consultant<br />
                        <span> “Arlene.McCoy@gmail.com”</span>
                        & <br /><span>“John.Doe@gmail.com”</span></p>
                    <Flex justify='space-between' gap={10} className='w-full'>
                        <Button block onClick={handleCancel}>Cancel</Button>
                        <Button block type='primary' onClick={handleOk}>Invite</Button>
                    </Flex>
                </Flex>
            </div>
        </Modal>
    )
}

export default InviteConsultant;
