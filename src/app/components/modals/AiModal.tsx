'use client'
import { useState, useEffect } from 'react';
import { Modal, Flex, Input, Button, Progress, Row, Col, Checkbox, Tag, Select, DatePicker, TimePicker} from 'antd';
import type { ProgressProps } from 'antd';
// IMAGES
import CloseIcon from '../../../../public/images/close-small.svg';
import StarsColor from '../../../../public/images/stars-color.svg';
import Stars from '../../../../public/images/ai-stars.svg';
import AiRobot from '../../../../public/images/ai-robot.svg';
import ChevronRight from '../../../../public/images/chevron-right.svg';
import ChevronLeft from '../../../../public/images/chevron-left.svg';
import LargeChevron from '../../../../public/images/large-chevron.svg';
import DownIcon from '../../../../public/images/chevron.svg'
import InfoOutline from '../../../../public/images/info-outline.svg';
import ClockIcon from '../../../../public/images/clock.svg';
import CalendarIcon from '../../../../public/images/calendar.svg';

interface AiModalProps {
    setOpen: any;
    open: boolean;
    aiData: any;
    setAiData: any;
    mode: string;
}

const checklistData = [
    {
        id: 1,
        label: 'Waste Bins Clearance',
        frequency: 'Daily',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.'
    },
    {
        id: 2,
        label: 'Waste Bins Clearance',
        frequency: 'Monthly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.'
    },
    {
        id: 3,
        label: 'Waste Bins Clearance',
        frequency: 'Weekly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.'
    },
    {
        id: 4,
        label: 'Waste Bins Clearance',
        frequency: 'Yearly',
        desc: 'Lorem ipsum dolor sit amet consectetur. Massa aliquet nunc tellus habitasse cursus pellentesque. Quam natoque elementum.'
    },
];
const { TextArea } = Input;
const AiModal: React.FC<AiModalProps> = ({ setOpen, open, setAiData, aiData, mode }) => {
    const [steps, setSteps] = useState(0);
    const [activeOption, setActiveOption] = useState(0);
    const [progress, setProgress] = useState(0);
    const [genratedPages, setGenratedPages] = useState(1);
    const onOk = () => {
        setAiData('This is the data will be displayed');
        setOpen(false);
        handleReset();
        console.log(aiData)
    };
    const onCancel = () => {
        setOpen(false);
        handleReset()
    };
    const handleReset = () => {
        setSteps(0);
        setProgress(0)
    }
    const genrate = () => {
        setSteps(1)
    }
    const options = [
        {
            title: 'Create checklist for blood bank',
            text: 'Lorem ipsum dolor sit amet consectetur. Arcu tincidunt.'
        },
        {
            title: 'Create checklist for blood bank',
            text: 'Lorem ipsum dolor sit amet consectetur. Arcu tincidunt.'
        },
        {
            title: 'Create checklist for blood bank',
            text: 'Lorem ipsum dolor sit amet consectetur. Arcu tincidunt.'
        },
        {
            title: 'Create checklist for blood bank',
            text: 'Lorem ipsum dolor sit amet consectetur. Arcu tincidunt.'
        }
    ]
    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#D01EBE42',
        '100%': '#5C95EF ',
    };
    function increaseProgress() {
        setProgress(prevProgress => prevProgress + 10);
    }
    useEffect(() => {
        if (steps === 1) {
            const interval = setInterval(increaseProgress, 1000);
            return () => clearInterval(interval);
        }
    }, [steps]);
    useEffect(() => {
        if (progress < 100) {
            setTimeout(() => 10000 / 10);
        }
        if (progress === 100) {
            setSteps(2)
        }
    }, [progress]);
    function dropdownRender(menu: any) {
        return (
          <div>
            {menu}
            <Input type="text" placeholder='Enter Group Name' className='select-option--input' />
            <div className="divider-menu select-option">
                <Button onClick={()=>{console.log('added')}} type="text">
                    + Add New
                </Button>
            </div>
          </div>
        );
    }
    return (
        <Modal
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            closeIcon={<CloseIcon />}
            footer={false}
            centered
            className='ai-modal'
        >
            {steps < 2 ? 
                <Flex align="center" justify="center" className="modal--body">
                    {
                        steps === 0 ?
                        <Flex vertical gap={24} className='ai-options'>
                            <Flex align='center' justify='center' gap={10}>
                                <StarsColor />
                                <h2>AI Generated</h2>
                            </Flex>
                            <Flex vertical gap={10} className='option-list'>
                                {
                                    options.map((option, index)=>(
                                        <Flex className={activeOption === index ? "option-list--item active" : "option-list--item"} vertical gap={6} key={index} onClick={()=>{setActiveOption(index)}}>
                                            <p className='title'>{option.title}</p>
                                            <p>{option.text}</p>
                                        </Flex>
                                    ))
                                }
                            </Flex>
                            <Flex gap={16} vertical>
                                <div className='ai-textarea--container'>
                                    <TextArea
                                        placeholder="Type..."
                                        className='ai-textarea'
                                        autoSize={{ minRows: 3}}
                                    />
                                </div>
                                <Button className='ai iocn' onClick={genrate}><Stars />Generate</Button>
                            </Flex>
                        </Flex>:  steps === 1 ?
                        <Flex vertical align='center' gap={30} className='ai-options genrating'>
                            <h2>Ai is generating your checklist it might take a few minutes.</h2>
                            <Progress strokeColor={twoColors} percent={progress} />
                            <Flex className="ai-news" gap={16}>
                                <div className='float-robot'>
                                    <AiRobot />
                                </div>
                                <Flex vertical className='ai-news--content' gap={8}>
                                    <p>Did you know?</p>
                                    <p>Accreditation ensures quality and credibility by evaluating processes and standards to meet excellence criteria. It boosts performance, builds trust among stakeholders, and demonstrates commitment to improvement and accountability</p>
                                </Flex>
                            </Flex>
                        </Flex>: ''
                    }
                </Flex> 
            :  
            <Flex className="modal--body last-screen">
                <Flex vertical gap={30} className='w-full'>
                    <Flex vertical className='modal--body--last-screen'>
                        <h1>AI has generated 3 options</h1>
                        <p>You can choose any template you like </p>
                    </Flex>
                    <div className="ai-genrated-preview">
                        {
                            mode === 'checklist' ?
                            <Row>
                                {checklistData?.map((item) => (
                                    <Col span={24} className='checklist-data ai-generated' key={item.id}>
                                        <Flex gap={16} justify='space-between' align='vertial'>
                                            <Flex className='checklist-upper--sec' gap={10} vertical>
                                                <Flex gap={10} align='center'>
                                                    <Checkbox onChange={() => console.log('Checkbox here')} className='checklist-checkbox'>{item.label}</Checkbox>
                                                    <Tag className={`checklist-tag tag-${item.frequency}`}>{item.frequency}</Tag>
                                                </Flex>
                                                <p className='checklist-desc'>{item.desc}</p>
                                            </Flex>
                                            <Button className='only-icon light'>
                                                <CloseIcon />
                                            </Button>
                                        </Flex>
                                    </Col>
                                ))}
                            </Row>: 
                            <>
                                 <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={8} vertical>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 1</Checkbox>
                                                    </Flex>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 2</Checkbox>
                                                    </Flex>
                                                    <Flex align='center'>
                                                        <Checkbox className='no-border-checkbox'>Option 3</Checkbox>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='select-group overview'>
                                    <div className="select-group--body">
                                        <Flex gap={20} vertical>
                                            <Flex justify='space-between' align='center'>
                                                <Select
                                                    className='select-group--select'
                                                    placeholder="Select Group"
                                                    suffixIcon={<LargeChevron />}
                                                    defaultValue={'option-1'}
                                                    dropdownRender={dropdownRender}
                                                    options={[
                                                        { value: 'option-1', label: 'General' },
                                                        { value: 'option-2', label: 'Group A' },
                                                        { value: 'option-3', label: 'Group B' },
                                                    ]}
                                                />
                                            </Flex>
                                            <Flex gap={16} vertical>
                                                <p className='select-group--feilds-title'>Lorium Ipsume is dummy text that will go here *</p>
                                                <Flex gap={8} vertical>
                                                    <Input className='select-group--body--input' placeholder='Enter a text' />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className='modal-lg--footer'>
                        <Flex justify='space-between' className='footer-content' align='center'>
                            <Button key="back" onClick={handleReset}>
                                Reset
                            </Button>
                            <Flex justify='space-between' align='center' gap={12}>
                                <Button className='only-icon' onClick={()=>{setGenratedPages(genratedPages > 1 ? genratedPages - 1 : genratedPages)}}>
                                    <ChevronLeft />
                                </Button>
                                <p className='page'><span>{genratedPages}</span>/3</p>
                                <Button className='only-icon' onClick={()=>{setGenratedPages(genratedPages < 3 ? genratedPages + 1 : genratedPages)}}>
                                    <ChevronRight />
                                </Button>
                            </Flex>
                            <Button
                                type="primary"
                                onClick={onOk}
                            >
                                Use in template
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Flex>
            }
        </Modal>
    )
};

export default AiModal;