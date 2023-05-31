import classNames from "classnames/bind";
import styles from '../Video.module.scss'
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faPause, faPlay, faVolumeHigh, faVolumeTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useStore, actions } from "~/store";

const cx = classNames.bind(styles)



function VideoCard({ dataVid, src, onchange, volumeValue, setVolume, setOldVolume, oldVolume }) {

    const volumeVal = volumeValue / 100

    const [playing, setPlaying] = useState(true);
    const [sound, setSound] = useState(true)


    const videoRef = useRef();
    const inputRef = useRef()


    useEffect(() => {
        const visibilityChange = () => {
            if (document.hidden) {
                videoRef.current.pause()

            }
        }
        document.addEventListener("visibilitychange", visibilityChange);
        return () => { document.removeEventListener("visibilitychange", visibilityChange) }
    }, [])

    const handlePlayPause = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };




    //set volume

    const handleSetsound = () => {
        setSound(!sound)


        if (!sound) {
            setVolume(oldVolume)
            inputRef.current.style.backgroundSize = oldVolume + '% 100%'
        } else {
            inputRef.current.style.backgroundSize = "0% 100%"
            setOldVolume(volumeValue)
            setVolume(0)
        }

    }
    useEffect(() => {
        videoRef.current.volume = volumeVal
        if (volumeValue == 0) {
            setSound(false)
        } else if (volumeValue > 0) {
            setSound(true)
        }
    }, [volumeValue])

    const navigate = useNavigate();
    const [state, dispatch] = useStore()

    const handleGoToComments = e => {
        dispatch(actions.commentsTemporary())
        navigate(`/@${dataVid.user.nickName}/video/${dataVid.id}`)
    }




    return <div className={cx('card-container')} >



        <video onPlay={() => {
            setPlaying(true)
        }} onPause={() => setPlaying(false)} onClick={handleGoToComments} className={cx('video')} src={src} autoPlay loop ref={videoRef}
        />



        <p className={cx('report')}>
            <FontAwesomeIcon icon={faFlagCheckered} className={cx('flag-icon')} />
            Report
        </p>
        <div className={cx('play-or-pause')} onClick={handlePlayPause}>
            {
                !playing ? <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} /> : <FontAwesomeIcon icon={faPause} className={cx('play-icon')} />
            }
        </div>
        <div className={cx('video-sound')}>

            <div onClick={handleSetsound}>
                {
                    sound ? <FontAwesomeIcon icon={faVolumeHigh} className={cx('volume-icon')} /> : <FontAwesomeIcon icon={faVolumeTimes} className={cx('volume-icon')} />
                }
            </div>
            <div className={cx('volume-container')}>
                <input type="range" className={cx('input-range')} value={volumeValue} min="0" max="100" onChange={onchange} ref={inputRef} />

            </div>
        </div>

    </div>
}

export default VideoCard;