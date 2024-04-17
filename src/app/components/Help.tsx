'use client'
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Dropdown} from 'antd';
import { usePathname } from "next/navigation";
// IMAGES
import QuestionIcon from '../../../public/images/help.svg'


interface HelpProps {
//   children?: ReactNode; 
}
const items: MenuProps['items'] = [
    {
        label: <Link className='drop--item' href={'/help-center'}>Help Center</Link>,
        key: '0',
    },
    {
        label: <Link className='drop--item' href={'/youtube-videos'}>Youtube Videos</Link>,
        key: '1',
    },
];
const Help: React.FC<HelpProps> = () => {
    const path = usePathname();
    const routesWithoutHeaderFooter = [
        "/login",
        "/onboarding",
    ];
    const hide = routesWithoutHeaderFooter.includes(path);
    return (
        <div className={hide ?'d-none' : 'help'}>
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <QuestionIcon />
                </a>
            </Dropdown>
        </div>
    )
};

export default Help;