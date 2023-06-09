import classNames from "classnames/bind";
import styles from './LayoutTemporary.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CommentsVideo from "~/components/CommentsVideo/CommentsVideo";



const cx = classNames.bind(styles)

function LayoutTemporary({ videoInview }) {
    const navigate = useNavigate();
    console.log(videoInview);

    if (videoInview) {
        return <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <div className={cx('video-container')}>
                    <div className={cx('background-image')} style={{ backgroundImage: `url(${videoInview.imageVideo})` }}>

                    </div>
                    <video src={videoInview.src} className={cx('video')} controls autoPlay />
                    <button className={cx('close-btn')} onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faXmark} className={cx('icon-close')} /></button>
                </div>
            </div>
            <div className={cx('content-container')}>
                <CommentsVideo data={videoInview} />
            </div>
        </div>
    } else {
        return <div></div>
    }

}

export default LayoutTemporary;