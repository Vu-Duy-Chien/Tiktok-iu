import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview/AccountPreview';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import dataAccountSuggested from '~/dataUsers/dataUser';


const cx = classNames.bind(styles);


function Sidebar() {
    const [userPreview, setUserPreview] = useState()
    const [showhide, setShowhide] = useState(false)
    const [style, setStyle] = useState()
    const [preview, setPreview] = useState(false)
    const [userID, setUserID] = useState('')
    const [keepUserID, setKeepUserID] = useState('')
    const [event, setEvent] = useState()
    const deBouncedValue = useDebounce(userID, 200);

    const handleShowPreview = e => {

        setPreview(true)

        if (e.target.tagName === 'DIV' && e.target.getAttribute("iduser")) {
            setEvent(e)
            setUserID(e.target.getAttribute("iduser"))
            setKeepUserID(e.target.getAttribute("iduser"))
        } else {
            setUserID(null)
        }
    }


    const handleHidePrieview = e => {
        setPreview(false)
        setUserID(false)
    }

    const sidebarRef = useRef()

    useEffect(() => {
        if (preview) {
            const [data] = dataAccountSuggested.filter(user => user.id == keepUserID)
            setUserPreview(data)
            setShowhide(true)
            if (event && sidebarRef.current) {
                setStyle(event.target.offsetTop + window.pageYOffset + 62 - sidebarRef.current.scrollTop)
            }
        } else {
            setShowhide(false)
        }
    }, [deBouncedValue]);


    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-place')} ref={sidebarRef}>
                <Menu>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                </Menu>
                <SuggestedAccounts label="Suggested accounts" onMouseleave={handleHidePrieview} onMouseenter={handleShowPreview} data={dataAccountSuggested} />
            </div>
            {showhide && <AccountPreview data={userPreview} style={style} onMouseenter={handleShowPreview} onMouseleave={handleHidePrieview} />}
        </aside>
    );
}

export default Sidebar;
