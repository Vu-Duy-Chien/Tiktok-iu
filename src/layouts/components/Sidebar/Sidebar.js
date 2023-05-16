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
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';


const cx = classNames.bind(styles);

const dataAccountSuggested = [
    {
        id: 1,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1683684000&x-signature=Yt0XJWwYIuKOE6PF6zrfVXvF5v4%3D',
        name: 'Theanh28 Entertainment',
        nickName: 'theanh28entertainment',
        blueTick: true,
        folowers: '9M',
        likes: '763.5M'
    },
    {
        id: 2,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1683687600&x-signature=4jKm4b4Tqw5DyktQdTcHEUaNwps%3D',
        name: 'Tiin.vn',
        nickName: 'tiin.vn',
        blueTick: true,
        folowers: '8.4M',
        likes: '538.7'
    },
    {
        id: 3,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1683687600&x-signature=xiVtupV7L4N8%2Bpl9tibE%2Bko4fgk%3D',
        name: 'AnNhiên ❤️ BốiBối',
        nickName: 'annhien_boiboi',
        blueTick: true,
        folowers: '10.4M',
        likes: '259M'
    },
    {
        id: 4,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8313f98a7cc63cc0d15a83f1c2a2b783~c5_100x100.jpeg?x-expires=1683687600&x-signature=hsy%2BnXu4i6RpX2CsDxAZHTe1LHs%3D',
        name: 'Việt Phương Thoa',
        nickName: 'vietphuongthoa98',
        blueTick: true,
        folowers: '12.6M',
        likes: '510.4M'
    },
    {
        id: 5,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1683687600&x-signature=UKHBfQA%2B80I%2BrHfdKKcznbjgSik%3D',
        name: 'Đào Lê Phương Hoa',
        nickName: 'hoaa.hanassii',
        blueTick: true,
        folowers: '14.4M',
        likes: '367.1M'
    },
    {
        id: 6,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff6cfa684d7eb1c00409c4214d8ab62f~c5_100x100.jpeg?x-expires=1683687600&x-signature=SqT9ycb2D0MomYgkLkK%2BWUDzvz0%3D',
        name: 'VTV24',
        nickName: 'vtv24news',
        blueTick: true,
        folowers: '6M',
        likes: '187.4M'
    },
    {
        id: 7,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/30b21814b145eefae57b6a8a8aeaee37~c5_100x100.jpeg?x-expires=1683687600&x-signature=3AUHB2LPROwS8wXHRrDEIeDjbMc%3D',
        name: '☘️Trà Đặng☘️',
        nickName: 'tra.dang.904',
        blueTick: true,
        folowers: '19.9M',
        likes: '435.6M'
    },
    {
        id: 8,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1683687600&x-signature=dwnj7Wd6mncPBEmth%2BuDVjS%2BQXY%3D',
        name: 'DKawn',
        nickName: 'dkawn.me',
        blueTick: true,
        folowers: '6.9M',
        likes: '166.9M'
    },
    {
        id: 9,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b32c566cb8a23dd44c1572248a108bc7.jpeg?x-expires=1683687600&x-signature=aXP1K2eHYYn%2BsDPdqBHXwIr6ahE%3D',
        name: 'Fun fact',
        nickName: 'funfact.66',
        blueTick: true,
        folowers: '4.6M',
        likes: '108.8M'
    },
    {
        id: 10,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c5aa6d39dc755aa2938a16d76b87efaa.jpeg?x-expires=1683687600&x-signature=vTr2Ht3qIw9Ic%2F1KL1iR1O%2B0WmA%3D',
        name: 'Sinh Anh Hairstylist',
        nickName: 'sinhanh.hair',
        blueTick: true,
        folowers: '4.2M',
        likes: '140.2M'
    },

]

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

    useEffect(() => {
        if (preview) {
            const [data] = dataAccountSuggested.filter(user => user.id == keepUserID)
            setUserPreview(data)
            setShowhide(true)
            if (event.pageY) {
                setStyle(event.pageY)
            }
        } else {
            setShowhide(false)
        }
    }, [deBouncedValue]);


    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-place')}>
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
