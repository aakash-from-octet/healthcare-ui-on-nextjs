'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Modal, Flex, Form, Button, Row, Col, Input, Avatar } from 'antd';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import Badge from '../../../../public/images/badge-head.svg';
import DocDefine from '../../../../public/images/doc-defineby.svg';
import DocIssue from '../../../../public/images/doc-issue.svg';
import DocReview from '../../../../public/images/doc-review.svg';
import InfoOutline from '../../../../public/images/info-outline.svg';
import ChevronRight from '../../../../public/images/chevron-right.svg';
import Mike from '../../../../public/images/mike.svg';
import Location from '../../../../public/images/location.svg';
import ProfileImage from '../../../../public/images/profile.png';
import Detail from '../../../../public/images/bars.svg';
import Mom from '../../../../public/images/calendar-new.svg';
import AuditRepo from '../../../../public/images/file-list-dot.svg';
import StarRatings from 'react-star-ratings';


interface TrainingModalProps {
    setOpen: any;
    open: boolean;
}
const { TextArea } = Input;

// DATA
const documentDetails = [
    { id: 1, label: 'Training Date', value: '12/04/2023', icon: <DocIssue /> },
    { id: 2, label: 'Participants', value: 'Entire Company', icon: <DocDefine /> },
    { id: 3, label: 'Training Type', value: 'Training Type', icon: <DocReview /> },
    { id: 4, label: 'Speaker', value: 'Ronald Richards', icon: <Mike />, image: ProfileImage },
    { id: 5, label: 'Time', value: '16 : 00', icon: <DocIssue /> },
    { id: 6, label: 'Venue', value: 'Shanti gram auditorium, Noida', icon: <Location /> },
];
const pageTabs = [
    {
        icon: <Detail />,
        text: 'Assesment',
    },
    {
        icon: <Mom />,
        text: 'Feedback',
    },
    {
        icon: <AuditRepo />,
        text: 'Responses',
    }
];
const TrainingDetailsModal: React.FC<TrainingModalProps> = ({ setOpen, open }) => {
    const [steps, setSteps] = useState(0);
    const [pageTabsActive, setPageTabsActive] = useState(0);
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values, 'Modal value');
        if(steps === 2) {
            setOpen(false);
            setSteps(0);
        } else {
            setSteps(steps + 1);
        }
    };
    const onCancel = () => {
        setOpen(false);
    };
    const questions = [
        'How has your understanding of infection control principles evolved since the training?',
        'In what ways have you incorporated effective communication techniques into your patient interactions post-training?',
        'How have you set and pursued professional development goals following the training?',
        'Share a specific instance where active listening improved your communication with a patient.'
    ];
    const questionsAnswers = [
        {
            question: 'How has your understanding of infection control principles evolved since the training?',
            answers: [
                {
                    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                },
                {
                    answer: "Lorem Ipsum is simply dummy text simply dummy text simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                }
            ]
        },
        {
            question: 'In what ways have you incorporated effective communication techniques into your patient interactions post-training?',
            answers: [
                {
                    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                },
                {
                    answer: "Lorem Ipsum is simply dummy text simply dummy text simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                }
            ]
        },
        {
            question: 'How have you set and pursued professional development goals following the training?',
            answers: [
                {
                    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                },
                {
                    answer: "Lorem Ipsum is simply dummy text simply dummy text simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                }
            ]
        },
        {
            question: 'Share a specific instance where active listening improved your communication with a patient.',
            answers: [
                {
                    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                },
                {
                    answer: "Lorem Ipsum is simply dummy text simply dummy text simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    name: 'Dhruvil Rana'
                }
            ]
        }
    ];
    const comments = [
        {   
            name: 'Anirudhh Sawale',
            raiting: 4.5,
            date: '11/12/2023',
            time: ' 10.30 AM',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
        },
        {   
            name: 'Anirudhh Sawale',
            raiting: 1.4,
            date: '11/12/2023',
            time: ' 10.30 AM',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
        },
        {   
            name: 'Anirudhh Sawale',
            raiting: 3.5,
            date: '11/12/2023',
            time: ' 10.30 AM',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
        }
    ]
    return (
        <Modal
            open={open}
            onOk={onFinish}
            onCancel={onCancel}
            closeIcon={<CloseIcon />}
            footer={false}
            centered
            className='full-screen--modal overlay'
        >
            <div className="modal-lg--header relative">
                <Flex gap="10px" align='center' justify='flex-start'>
                    <Badge />
                    <p className="modal-lg--title">Orientation Training</p>
                </Flex>
                <Flex gap={8} align='center' className='modal-header--breadcrumbs'>
                    <p className={steps === 0 ? 'active' : ''} onClick={()=>{setSteps(0)}}>Details</p>
                    <ChevronRight />
                    <p className={steps === 1 ? 'active' : ''} onClick={()=>{setSteps(1)}}>Assessment</p>
                </Flex>
            </div>
            <div className="modal-lg--body">
                <Form
                    className="modal-from h-full"
                    onFinish={onFinish}
                    name="training-form"
                    form={form}
                    style={{ position: 'static' }}
                >
                    <Flex gap={24} className='form-container small' vertical>
                        { steps === 0 ?
                            <Flex vertical className='modal-lg-forms'>
                                <Flex className="modal-lg-forms--header" justify='space-between' align='center'>
                                    <p>Training Details</p>
                                </Flex>
                                <div className='body-content'>
                                    <Row gutter={[20, 20]}>
                                        {documentDetails.map((item) => (
                                            <Col span={6} key={item.id}>
                                                <Flex gap={6} vertical className='section-details'>
                                                    <Flex gap={6} align='center'>
                                                        {item.icon}
                                                        <p className='label'>{item.label}</p>
                                                    </Flex>
                                                    <Flex align='center' gap={8} style={{paddingLeft: 26}}>
                                                        {
                                                            item.image ? 
                                                                <div className='avatar'><Image src={item.image} alt={item.value} /></div> 
                                                            : ''
                                                        }
                                                        <p className='value' style={{paddingLeft: 0}}>{item.value}</p>
                                                    </Flex>
                                                </Flex>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                <Flex gap={6} align='center' className='footer'>
                                    <InfoOutline />
                                    <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                </Flex>
                            </Flex> :
                            <div>
                                <Flex vertical className='modal-lg-forms'>
                                    <div className="modal-lg-forms--header with-tabs">
                                        <Flex justify='center' className='audit-modal--tabs'>
                                            {pageTabs.map((tab: any, index: any) => (
                                                <div className={pageTabsActive === index ? "custom-tab active" : 'custom-tab'} key={index} onClick={() => { setPageTabsActive(index) }}>
                                                    <Flex align="center" gap={8}>
                                                        {tab.icon}
                                                        <p>{tab.text}</p>
                                                    </Flex>
                                                </div>
                                            ))}
                                        </Flex>
                                    </div>
                                    <div className='body-content'>
                                        {pageTabsActive === 0 ?
                                            <Flex gap={20} vertical>
                                                <h2>Assesment</h2>
                                                <Flex gap={16} vertical>
                                                    {questions.map((question, index)=>(
                                                        <Flex className='question' key={index}>
                                                            <div className='question-th'>
                                                                <p>Q{index+1}</p>
                                                            </div>
                                                            <div className='question-th'>
                                                                <p>{question}</p>
                                                            </div>
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            </Flex> : pageTabsActive === 1 ?
                                            <Flex gap={20} vertical>
                                                <h2>Participants reviews</h2>
                                                <Flex gap={14} vertical>
                                                    <Flex align='center' gap={20}>
                                                        <StarRatings
                                                            rating={4.1}
                                                            starRatedColor="#EE8044"
                                                            numberOfStars={5}
                                                            name='rating'
                                                        />
                                                        <p className='review--comment--date'>4.1 out of 5</p>
                                                        <p className='review--comment--date'>12 Feedbacks</p>
                                                    </Flex>
                                                    <Flex gap={12} vertical>
                                                        <Flex align='center' gap={8} className='custom-progressbar-outer'>
                                                            <p>5 Stars</p>
                                                            <div className="custom-progressbar">
                                                                <div style={{width: '52%'}} className="custom-progressbar--fill"></div>
                                                            </div>
                                                            <p>52%</p>
                                                        </Flex>
                                                        <Flex align='center' gap={8} className='custom-progressbar-outer'>
                                                            <p>4 Stars</p>
                                                            <div className="custom-progressbar">
                                                                <div style={{width: '26%'}} className="custom-progressbar--fill"></div>
                                                            </div>
                                                            <p>26%</p>
                                                        </Flex>
                                                        <Flex align='center' gap={8} className='custom-progressbar-outer'>
                                                            <p>3 Stars</p>
                                                            <div className="custom-progressbar">
                                                                <div style={{width: '11%'}} className="custom-progressbar--fill"></div>
                                                            </div>
                                                            <p>11%</p>
                                                        </Flex>
                                                        <Flex align='center' gap={8} className='custom-progressbar-outer'>
                                                            <p>2 Stars</p>
                                                            <div className="custom-progressbar">
                                                                <div style={{width: '4%'}} className="custom-progressbar--fill"></div>
                                                            </div>
                                                            <p>4%</p>
                                                        </Flex>
                                                        <Flex align='center' gap={8} className='custom-progressbar-outer'>
                                                            <p>1 Stars</p>
                                                            <div className="custom-progressbar">
                                                                <div style={{width: '7%'}} className="custom-progressbar--fill"></div>
                                                            </div>
                                                            <p>7%</p>
                                                        </Flex>
                                                    </Flex>
                                                </Flex>
                                                <div>
                                                    {comments.map((comment, index) => (
                                                        <Flex key={index} className="review--comment" vertical gap={10}>
                                                            <Flex gap={10} align='center'>
                                                                <Avatar style={{ backgroundColor: '#F34822', color: '#fff' }}>A</Avatar>
                                                                <p className='review--comment--name'>{comment.name}</p>
                                                            </Flex>
                                                            <Flex align='center' gap={20}>
                                                                <StarRatings
                                                                    rating={comment.raiting}
                                                                    starRatedColor="#EE8044"
                                                                    numberOfStars={5}
                                                                    name='rating'
                                                                />
                                                                <p className='review--comment--date'>{comment.date}, {comment.time}</p>
                                                            </Flex>
                                                            <p>{comment.review}</p>
                                                        </Flex>
                                                    ))}
                                                </div>
                                            </Flex> :
                                            <Flex gap={20} vertical>
                                                <h2>16 Responses received from participants</h2>
                                                <Flex gap={16} vertical>
                                                    {questionsAnswers.map((question, index)=>(
                                                        <Flex vertical className='question answers' key={index}>
                                                            <Flex className='question-header'>
                                                                <div className='question-th'>
                                                                    <p>Q{index+1}</p>
                                                                </div>
                                                                <div className='question-th'>
                                                                    <p>{question.question}</p>
                                                                </div>
                                                            </Flex>
                                                            {question.answers.map((answer, index) => (
                                                                <Flex vertical gap={6} className='question-body' key={index}>
                                                                    <Flex gap={10} align='center'>
                                                                        <Avatar style={{ backgroundColor: '#F34822', color: '#fff' }}>D</Avatar>
                                                                        <p className='review--comment--name'>{answer.name}</p>
                                                                    </Flex>
                                                                    <p>{answer.answer}</p>
                                                                </Flex>
                                                            ))}
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        }
                                    </div>
                                    <Flex gap={6} align='center' className='footer'>
                                        <InfoOutline />
                                        <p className='footer-text'>Lorium Ipsume is dummy text that will go here</p>
                                    </Flex>
                                </Flex>
                            </div>
                        }
                    </Flex>
                    <div className='modal-lg--footer'>
                        <Flex justify='space-between' className='footer-content'>
                            <Button key="back" onClick={onCancel}>
                                Back
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Next
                            </Button>
                        </Flex>
                    </div>
                </Form>
            </div>
        </Modal>
    )
};

export default TrainingDetailsModal;