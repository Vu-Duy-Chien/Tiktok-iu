import classNames from "classnames/bind";
import styles from './Getapp.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import { actions, useStore } from "~/store";


const cx = classNames.bind(styles)

function Getapp() {
    const [state, dispatch] = useStore()

    const handleHideGetapp = () => {
        dispatch(actions.hideGetapp())
    }

    return <div className={cx('wrapper', { 'show-modal': state.getapp })}>
        <div className={cx('mark')}></div>
        <div className={cx('modal', { 'content-container-show': state.getapp })}>
            <div className={cx('header')}>
                <p className={cx('title')}>Get the TikTok app</p>
                <div className={cx('close')} onClick={handleHideGetapp}>
                    <FontAwesomeIcon icon={faXmark} style={{ height: '2.5rem' }} />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('scanqr-container')}>
                    <p className={cx('text-head')}>Scan QR code to download TikTok</p>
                    <img src={images.qrCode} alt="" className={cx('QR')} />
                </div>

            </div>
            <div className={cx('footer')}>
                <p className={cx('text')}>Download from app stores</p>
                <div className={cx('download-container')}>
                    <a href="https://apps.microsoft.com/store/detail/9NH2GPH4JZS4?hl=en-hk&gl=HK&rtc=1" target="_blank" className={cx('link')}>
                        <img src={images.microsoft} alt=""
                        />
                    </a>
                    <a href="https://apps.apple.com/MY/app/id1235601864?mt=8" target="_blank" className={cx('link')}>
                        <img src={images.appStore} alt="" />
                    </a>
                    <a href="https://www.amazon.com/dp/B07KR1RJL2/" target="_blank" className={cx('link')}>
                        <img src={images.amazon} alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DTyatJAIkl5GwpzAtUJkFOQ&pli=1" target="_blank" className={cx('link')}>
                        <img src={images.googlePlay} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>

}

export default Getapp;