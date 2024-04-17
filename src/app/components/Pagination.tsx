'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Flex, Select } from "antd";
// IMAGES
import DownIcon from '../../../public/images/chevron.svg'
import ChevronLeft from '../../../public/images/chevron-left.svg'
import ChevronRight from '../../../public/images/chevron-right.svg'


interface PaginationProps {
    data: any; 
    setDisplayData: any;
}
const Pagination: React.FC<PaginationProps> = ({data, setDisplayData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const total = data.length;
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, total);
    const changePage = (newPage: number) => {
        const newStart = (newPage - 1) * pageSize;
        const newEnd = Math.min(newStart + pageSize, total);
        setCurrentPage(newPage);
        setDisplayData(data.slice(newStart, newEnd));
    };
    const handleChangePageSize = (value: any) => {
        const newPageSize = parseInt(value, 10);
        setPageSize(newPageSize);
        setCurrentPage(1);
        const newStart = (currentPage - 1) * newPageSize;
        const newEnd = Math.min(newStart + newPageSize, total);
        setDisplayData(data.slice(newStart, newEnd));
    };
    return (
        <div className='pagination-table'>
            <Flex align='center' gap={8}>
                <p>Show rows per page:</p>
                <Select
                    defaultValue={pageSize.toString()}
                    style={{ minWidth: 53, height: 30}}
                    onChange={handleChangePageSize}
                    suffixIcon={<DownIcon />}
                    options={[
                        { value: '8', label: '8' },
                        { value: '16', label: '16' },
                        { value: '24', label: '24' },
                    ]}
                />
            </Flex>
            <Flex align='center' gap={10}>
                <p>{startIndex}-{endIndex} <span>of {total}</span></p>
                <Flex align='center' gap={6}>
                    <Button
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='only-icon'
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        onClick={() => changePage(currentPage + 1)}
                        disabled={endIndex >= total}
                        className='only-icon'
                    >
                        <ChevronRight />
                    </Button>
                </Flex>
            </Flex>
        </div>
    )
};

export default Pagination;