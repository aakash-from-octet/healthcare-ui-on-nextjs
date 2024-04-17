
import { Avatar, Checkbox, Col, Divider, Flex, Form, Modal, Row, Switch, Tag } from 'antd';

import Badge from '../../../../public/images/badge-head.svg';
import Category from '../../../../public/images/category.svg';
import Department from '../../../../public/images/department.svg';
import User from '../../../../public/images/doc-user.svg';
import ModalLgClose from '../../../../public/images/lg-modal-close.svg';

// avatars )
import DocAva1 from '../../../../public/images/doc-user1.svg';
import DocAva2 from '../../../../public/images/doc-user2.svg';
import { default as DocAva3, default as DocAva4 } from '../../../../public/images/doc-user3.svg';



const checklistData = [
    {
        id: 1,
        label: 'Waste Bins Clearance',
        frequency: 'Daily',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
            { avatarId: 4, src: <DocAva4 /> },
            { avatarId: 5, src: <DocAva1 /> },
        ],
    },
    {
        id: 2,
        label: 'Waste Bins Clearance',
        frequency: 'Monthly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
            { avatarId: 3, src: <DocAva3 /> },
        ],
    },
    {
        id: 3,
        label: 'Waste Bins Clearance',
        frequency: 'Weekly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.',
        department: 'Accounting',
        category: 'General',
        users: [
            { avatarId: 1, src: <DocAva1 /> },
            { avatarId: 2, src: <DocAva2 /> },
        ],
    },
];

const ExpDocModal = ({ isExpModalOpen, setIsExpModalOpen }: { isExpModalOpen?: any; setIsExpModalOpen?: any; }) => {
    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        handleOk();
    };

    const handleOk = () => {
        setIsExpModalOpen(false);
    }
    const handleCancel = () => {
        setIsExpModalOpen(false);
    };


    return (
        <Modal
            centered
            open={isExpModalOpen}
            onOk={() => setIsExpModalOpen(false)}
            onCancel={() => setIsExpModalOpen(false)}
            className='full-screen--modal'
            footer={false}
            closeIcon={<ModalLgClose />}
        >
            <div className="modal-lg--header">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <Badge />
                    <p className="modal-lg--title">Blood Donation</p>
                </Flex>
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="license-form"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container' vertical>


                        {/* Your Checklists  */}
                        <Flex vertical className='modal-lg-forms'>
                            <p className='header'>Your checklists</p>
                            <div className='body-content'>
                                <Row>
                                    {checklistData?.map((item) => (
                                        <Col span={24} className='checklist-data' key={item.id} >
                                            <Flex gap={16} vertical>
                                                <Flex className='checklist-upper--sec' gap={10} vertical>
                                                    <Flex gap={10} align='center'>
                                                        <Checkbox onChange={() => console.log('Checkbox here')} className='checklist-checkbox'>{item.label}</Checkbox>
                                                        <Tag className={`checklist-tag tag-${item.frequency}`}>{item.frequency}</Tag>
                                                        <Divider className='m-0' type='vertical' />
                                                        <Flex gap={6} align='center'>
                                                            <p className='images-switch'>Images</p>
                                                            <Switch className='custom-switch' defaultChecked size='small' onChange={() => console.log('Switch here')} />
                                                        </Flex>
                                                    </Flex>
                                                    <p className='checklist-desc'>{item.desc}</p>
                                                </Flex>
                                                <Row gutter={[20, 20]} className='checklist-lower--sec' >
                                                    {/* department  */}
                                                    <Col span={5}>
                                                        <Flex gap={6} vertical className='section-details'>
                                                            <Flex gap={6} align='center'>
                                                                <Department />
                                                                <p className='label'>Department</p>
                                                            </Flex>
                                                            <p className='value'>{item.department}</p>
                                                        </Flex>
                                                    </Col>
                                                    {/* category   */}
                                                    <Col span={5}>
                                                        <Flex gap={6} vertical className='section-details'>
                                                            <Flex gap={6} align='center'>
                                                                <Category />
                                                                <p className='label'>Category</p>
                                                            </Flex>
                                                            <p className='value'>{item.category}</p>
                                                        </Flex>
                                                    </Col>
                                                    {/* user name   */}
                                                    <Col span={5}>
                                                        <Flex gap={6} vertical className='section-details'>
                                                            <Flex gap={6} align='center'>
                                                                <User />
                                                                <p className='label'>User Name</p>
                                                            </Flex>
                                                            <Avatar.Group className="avatar-grp" size={'small'} maxCount={3} maxStyle={{ color: '#fff', fontSize: 8, fontWeight: 400, lineHeight: '10px', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                                                                {item.users.map((avatar) => (
                                                                    <Avatar size='small' key={avatar.avatarId} src={avatar.src} />
                                                                ))}
                                                            </Avatar.Group>
                                                        </Flex>
                                                    </Col>
                                                </Row>
                                            </Flex>
                                        </Col>
                                    ))}

                                </Row>
                            </div>
                        </Flex>

                    </Flex>

                </Form>
            </div>
        </Modal >

    );
};

export default ExpDocModal;
