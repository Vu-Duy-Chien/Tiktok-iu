import classNames from "classnames/bind";
import styles from './LayoutTemporary.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dataVideos from "~/dataVideos/datatVideos";
import { useNavigate } from "react-router-dom";
import { actions, useStore } from "~/store";


const cx = classNames.bind(styles)

function LayoutTemporary() {
    const navigate = useNavigate();
    const [state, dispatch] = useStore()
    const [videoInview, setVideoInview] = useState()
    const path = useParams()

    useEffect(() => {
        dispatch(actions.keepLayoutComments())
        setVideoInview(...dataVideos.filter(item => item.id == path.id))
        return () => { dispatch(actions.unKeepLayoutComments()) }
    }, [path.id])
    useEffect(() => {
        navigate(`/@${state.authorInview}/video/${state.videoInview}`)
    }, [state.videoInview])
    if (videoInview) {
        return <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <div className={cx('video-container')}>
                    <div className={cx('background-image')} style={{ backgroundImage: `url(${videoInview.imageVideo})` }}>

                    </div>
                    <video src={videoInview.src} className={cx('video')} controls autoPlay />
                    <button className={cx('close-btn')} onClick={() => navigate('..')}> <FontAwesomeIcon icon={faXmark} className={cx('icon-close')} /></button>
                </div>
            </div>
            <div className={cx('content-container')}></div>
        </div>
    } else {
        return <div></div>
    }

}

export default LayoutTemporary;