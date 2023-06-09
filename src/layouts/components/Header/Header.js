import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';


import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { UploadIcon, MessageIcon, InboxIcon, InboxIconActive } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { useStore, actions } from '~/store';
import Inbox from './Inbox/Inbox';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //code
                break;
            default:
            //code
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    // current user
    const [state, dispatch] = useStore()

    const currentUser = state.currentUser.status
    // show modal Authen

    const handleShowModal = e => {
        dispatch(actions.showModal(e))
    }

    // show upload page

    const handleShowUpLoadPage = () => {
        if (currentUser) {
            //
        } else {
            dispatch(actions.showModal())

        }
    }

    const [notify, setNotify] = useState(false)

    const handleShowNotifications = () => {
        setNotify(!notify)
    }

    const handleHideNotify = () => {
        setNotify(false)
    }




    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href='/' className={cx('logo-link')}>
                    <img src={state.darkMode ? images.logoLight : images.logo} alt="tiktok" />
                </a>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <Link to='/upload' className={cx('action-btn')}>
                                    <UploadIcon />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <div>
                                <HeadlessTippy
                                    interactive
                                    visible={notify}
                                    placement="top-start"
                                    offset={[51, 1]}
                                    render={(attrs) => (
                                        <div tabIndex="-1" {...attrs}>
                                            <Inbox />
                                        </div>
                                    )}
                                    onClickOutside={handleHideNotify}
                                >
                                    {notify ?
                                        <button className={cx('action-btn')} onClick={handleShowNotifications}>
                                            <InboxIconActive />
                                        </button>
                                        : <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                            <button className={cx('action-btn')} onClick={handleShowNotifications}>
                                                <InboxIcon />
                                            </button>
                                        </Tippy>}

                                </HeadlessTippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text onClick={handleShowUpLoadPage}>Upload</Button>
                            <Button primary onClick={handleShowModal}>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://eurodoc.net/sites/default/files/styles/content-image-790/public/news/2020/05/18/17th4.jpg?itok=PNst5rNW"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                </div>
            </div>
        </header>
    );
}

export default Header;
