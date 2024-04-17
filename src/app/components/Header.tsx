'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/header.css';
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import type { MenuProps } from 'antd';
import { Dropdown, Flex} from 'antd';
// IMAGES
import HomeIcon from '../../../public/images/home.svg'
import TaskIcon from '../../../public/images/task.svg'
import AccreditationIcon from '../../../public/images/accreditation.svg'
import EvidenceIcon from '../../../public/images/evidence.svg'
import ReportsIcon from '../../../public/images/reports.svg'
import ConsultantIcon from '../../../public/images/consultant.svg'
import AuditIcon from '../../../public/images/audit.svg'
import LogoWhite from '../../../public/images/logo-white.svg'
import SearchIcon from '../../../public/images/search.svg'
import SettingsIcon from '../../../public/images/settings.svg'
import BellIcon from '../../../public/images/bell.svg'
import ProfileImg from '../../../public/images/profile.png'
import ProfileIcon from '../../../public/images/profile.svg'
import PeopleIcon from '../../../public/images/people.svg'
import LogoutIcon from '../../../public/images/logout.svg'


interface HeaderProps {
//   children?: ReactNode; 
}

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();
    const items: MenuProps['items'] = [
        {
            label: <Link className='drop--item large' href={'/profile'}><ProfileIcon />Profile</Link>,
            key: '0',
        },
        {
            label: <Link className='drop--item large' href={'/people'}><PeopleIcon />People</Link>,
            key: '1',
        },
        {
            label: <p className='drop--item large' onClick={() => {localStorage.setItem('isAuthenticated', JSON.stringify(false)); router.push('/login');}}><LogoutIcon />Logout</p>,
            key: '2',
        }
    ];
    const path = usePathname();
    const routesWithoutHeaderFooter = [
        "/login",
        "/onboarding",
    ];
    const hide = routesWithoutHeaderFooter.includes(path);
    return (
        <header className={hide ? 'd-none' : ''}>
            <Flex justify='space-between' align='center'>
                <Flex align='center'>
                    <Link href={'/'} className="logo"><LogoWhite /></Link>
                    <div className="navbar">
                        <Link href={'/'} className={path === '/' ? 'active' : ''}><HomeIcon /> Home</Link>
                        <Link href={'/tasks'} className={path === '/tasks' ? 'active' : ''}><TaskIcon /> Task</Link>
                        <Link href={'/accreditation'} className={path === '/accreditation' ? 'active' : ''}><AccreditationIcon />Accreditation</Link>
                        <Link href={'/'} className={path === '/evidence' ? 'active' : ''}><EvidenceIcon />Evidence</Link>
                        <Link href={'/reports'} className={path === '/reports' ? 'active' : ''}><ReportsIcon />Reports</Link>
                        <Link href={'/consultant'} className={path === '/consultant' ? 'active' : ''}><ConsultantIcon />Consultant</Link>
                        <Link href={'/'} className={path === '/audit' ? 'active' : ''}><AuditIcon />Audit</Link>
                    </div>
                </Flex>
                <div className="header--actions">
                    <div className="header--action">
                        <SearchIcon />
                    </div>
                    <div className="header--action">
                        <SettingsIcon />
                    </div>
                    <div className="header--action notification relative">
                        <BellIcon />
                    </div>
                    <div className="header--action">
                        <div className="profile-icon">
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Image src={ProfileImg} alt="ProfileImg" />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </Flex>
        </header>
    )
};

export default Header;