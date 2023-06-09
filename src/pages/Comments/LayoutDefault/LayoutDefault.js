import classNames from "classnames/bind";
import styles from './LayoutDefault.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function LayoutDefault({ videoInview }) {

    return <div className={cx('wrapper')}>
        <div className={cx('video-container')}>
            <video src={videoInview.src} className={cx('video')} controls autoPlay />
        </div>
        <div className={cx('info-container')}>
            <p><span>{videoInview.description} </span>{videoInview.tagTopic}</p>
            <h4><FontAwesomeIcon icon={faMusic} /> {videoInview.musicLink}</h4>
        </div>
        <div className={cx('author-container')}>
            <img className={cx('avatar')} src={videoInview.user.avatar} alt="" />
            <div className={cx('name-container')}>
                <strong>{videoInview.user.nickName}</strong>
                <span>{videoInview.user.name}</span>
            </div>
            <button className={cx('follow-btn')}>Follow</button>
        </div>
    </div>


}

export default LayoutDefault;