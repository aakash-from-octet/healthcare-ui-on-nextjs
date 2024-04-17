'use client'
import React, { useState } from 'react';
import { Flex, Button } from "antd";
// IMAGES
import ChevronRight from '../../../public/images/chevron-right-md.svg';


interface TaskBoardProps {
    setOpen?: any;
}
const TaskBoard: React.FC<TaskBoardProps> = ({setOpen}) => {
    const [active, setActive] = useState(0)
    return (
        <Flex gap={20}>
            <Flex gap={8} className={active === 0 ? 'board--card--item active' : 'board--card--item'}>
                <Flex className={'board--card'} justify='space-between' align='center' onClick={()=>{setActive(0)}}>
                    <Flex gap={8} align='center'>
                        <p className='board--card--name'>Pending Task</p>
                        <span className='board--card--count'>50</span>
                    </Flex>
                    <Flex gap={10} align='center'>
                        <ChevronRight />
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={8} className={active === 1 ? 'board--card--item active' : 'board--card--item'}>
                <Flex className={'board--card'} justify='space-between' align='center' onClick={()=>{setActive(1)}}>
                    <Flex gap={8} align='center'>
                        <p className='board--card--name'>Genral</p>
                        <span className='board--card--count'>50</span>
                    </Flex>
                    <Flex gap={10} align='center'>
                        <ChevronRight />
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={8} className={active === 2 ? 'board--card--item active' : 'board--card--item'}>
                <Flex className={'board--card'} justify='space-between' align='center' onClick={()=>{setActive(2)}}>
                    <Flex gap={8} align='center'>
                        <p className='board--card--name'>Training</p>
                        <span className='board--card--count'>50</span>
                    </Flex>
                    <Flex gap={10} align='center'>
                        <ChevronRight />
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={8} className={active === 3 ? 'board--card--item active' : 'board--card--item'}>
                <Flex className={'board--card'} justify='space-between' align='center' onClick={()=>{setActive(3)}}>
                    <Flex gap={8} align='center'>
                        <p className='board--card--name'>Audit</p>
                        <span className='board--card--count'>50</span>
                    </Flex>
                    <Flex gap={10} align='center'>
                        <ChevronRight />
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={8} className={active === 4 ? 'board--card--item active' : 'board--card--item'}>
                <Flex className={'board--card'} justify='space-between' align='center' onClick={()=>{setActive(4)}}>
                    <Flex gap={8} align='center'>
                        <p className='board--card--name'>All</p>
                        <span className='board--card--count'>50</span>
                    </Flex>
                    <Flex gap={10} align='center'>
                        <ChevronRight />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
};

export default TaskBoard;