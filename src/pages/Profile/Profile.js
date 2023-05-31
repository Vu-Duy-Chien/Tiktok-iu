import classNames from "classnames/bind";
import styles from './Profile.module.scss'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheckCircle, faEllipsis, faLink, faLock, faShare } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import ShareVideo from "~/components/ShareVideo/ShareVideo";
import { useEffect, useRef, useState } from "react";
import dataAccountSuggested from "~/dataUsers/dataUser";
import { InboxFollowersIcon } from "~/components/Icons";


const cx = classNames.bind(styles)

function Profile() {
    let { user } = useParams()
    const [dataRender, setDataRender] = useState({})
    const [notFind, setNotFind] = useState(false)

    useEffect(() => {
        const [profileUser] = dataAccountSuggested.filter(dataUser => dataUser.nickName === user.slice(1))
        if (profileUser) {
            setDataRender(profileUser)
            setNotFind(false)
        } else {
            setNotFind(true)
        }
    }, [user])

    const [activeTab, setActiveTab] = useState(true)
    const [lineOofset, setLineOofset] = useState(true)

    const tabVideosRef = useRef()
    const tabLikedRef = useRef()
    const lineRef = useRef()

    const renderMoreActions = (attrs) => (
        <div tabIndex="-1" {...attrs}>

            <div className={cx('more-actions-menu')}>
                <div className={cx('more-actions-container')}>
                    <div className={cx('more_actions-item')}>
                        <FontAwesomeIcon icon={faFlag} />
                        <p>Report</p>
                    </div>
                </div>
                <div className={cx('more-actions-container')}>
                    <div className={cx('more_actions-item-l')}>
                        <FontAwesomeIcon icon={faBan} />
                        <p>Block</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderShareActions = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx('share-tippy')}>
                <ShareVideo />
            </div>
        </div>
    )

    const handleActiveTabVideo = e => {
        setActiveTab(true)
    }

    const handleActiveTabliked = e => {
        setActiveTab(false)
    }

    useEffect(() => {
        if (lineOofset && lineRef.current) {
            lineRef.current.setAttribute("style", `transform: translateX(${tabVideosRef.current.offsetLeft}px);width : ${tabVideosRef.current.offsetWidth}px`);
        } else {
            lineRef.current && lineRef.current.setAttribute("style", `transform: translateX(${tabLikedRef.current.offsetLeft}px);width : ${tabLikedRef.current.offsetWidth}px`);
        }
    }, [lineOofset])

    return <div className={cx('wrapper')}>
        {notFind ? <div className={cx('notfind-wrapper')}>
            <div className={cx('notfind-container')}>
                <InboxFollowersIcon />
                <p className={cx('notfind-title')}>Couldn't find this account</p>
                <p className={cx('notfind-desc')}>Looking for videos? Try browsing our trending creators, hashtags, and sounds.</p>
            </div>
        </div>
            :
            <div className={cx('layout-content')}>
                <div className={cx('share-layout-header')}>
                    <div className={cx('share-info')}>
                        <div className={cx('avatar-wapper')}>
                            <img className={cx('avatar-user')} src={dataRender.avatar} alt="" />
                        </div>
                        <div className={cx('share-title-container')}>
                            <h2 className={cx('share-title')}>
                                {dataRender.name}
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                            </h2>
                            <h1>{dataRender.nickName}</h1>
                            <div className={cx('follow-container')}>
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('count-info')}>
                        <div className={cx('div-number')}>
                            <strong>{dataRender.follwing}</strong>
                            <span>Following</span>
                        </div>
                        <div className={cx('div-number')}>
                            <strong>{dataRender.folowers}</strong>
                            <span>Followers</span>
                        </div>
                        <div className={cx('div-number')}>
                            <strong>{dataRender.likes}</strong>
                            <span>Likes</span>
                        </div>

                    </div>
                    <div className={cx('share-desc')}>
                        {dataRender.bio}<br />
                        {dataRender.hotline}<br />
                        {dataRender.mail}
                    </div>
                    {dataRender.bioLink && <div className={cx('share-link')}>
                        <a href={`https://${dataRender.bioLink}`} target="_blank">
                            <FontAwesomeIcon icon={faLink} className={cx('share-icon')} />
                            <span>{dataRender.bioLink}</span>
                        </a>
                    </div>}

                    <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        delay={[500, 500]}
                        render={renderShareActions}
                    >
                        <div className={cx('share-actions')}>
                            <FontAwesomeIcon icon={faShare} className={cx('share-icon')} />
                        </div>
                    </HeadlessTippy>
                    <div className={cx('more-actions')}>
                        <HeadlessTippy
                            interactive
                            placement="bottom-end"
                            render={renderMoreActions}
                            delay={[100, 500]}
                        >
                            <div><FontAwesomeIcon icon={faEllipsis} className={cx('menu-icon')} /></div>
                        </HeadlessTippy>
                    </div>
                </div>
                <div className={cx('share-layout-main')}>
                    <div className={cx('video-feed-tab')}>
                        <p className={cx('videos-tab', { 'active-tab': activeTab })} onClick={handleActiveTabVideo} ref={tabVideosRef}
                            onMouseEnter={e => setLineOofset(true)}
                            onMouseLeave={() => setLineOofset(activeTab)}
                        >Videos</p>
                        <p className={cx('liked-tab', { 'active-tab': !activeTab })} onClick={handleActiveTabliked} ref={tabLikedRef}
                            onMouseEnter={e => setLineOofset(false)}
                            onMouseLeave={() => setLineOofset(activeTab)}
                        >
                            <FontAwesomeIcon icon={faLock} />
                            <span>Liked</span>
                        </p>
                        <div className={cx('bottom-line')} ref={lineRef}></div>
                    </div>
                </div>
            </div>
        }
    </div>

}

export default Profile;
