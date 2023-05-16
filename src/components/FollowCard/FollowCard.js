import classNames from "classnames/bind";
import styles from './FollowCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function FollowCard({ data, idVideo, onMouseEnter }) {
    const [follow, setFollow] = useState(false)
    const [runVideo, setRunVideo] = useState(false)

    const handleFollow = e => {
        e.preventDefault()
        setFollow(!follow)
    }

    useEffect(() => {
        if (data.id == idVideo) {
            setRunVideo(true)
        } else {
            setRunVideo(false)
        }
    }, [idVideo])




    return <div className={cx('wrapper')} onMouseEnter={() => onMouseEnter(data.id)}>
        <Link to="/" target="_blank" className={cx('user-card')}>
            <div className={cx('video-container')}>
                <img className={cx('image-video')} src={data.imageVideo} alt="" />
                {runVideo && <div className={cx('video-container')}>
                    <video src={data.src} muted loop autoPlay className={cx('video')} />
                </div>}
            </div>
            <div className={cx('content-container')}>
                <span className={cx('span-avatar-container')}>
                    <img src={data.user.avatar} alt="" className={cx('avatar')} />
                </span>
                <h5 className={cx('user-title')}>{data.user.name}</h5>
                <h6 className={cx('user-subtitle')}>
                    <span>{data.user.nickname}</span>
                    <div className={cx('blue-tick')}>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('blue-tick-icon')} />
                    </div>
                </h6>
                <div className={cx('button-container')} onClick={handleFollow}>
                    <button type="buttom" className={cx({ 'follow-btn': !follow }, { 'following-btn': follow })}>{follow ? 'Following' : 'Follow'}</button>
                </div>
            </div>
        </Link>
    </div>
}

export default FollowCard;