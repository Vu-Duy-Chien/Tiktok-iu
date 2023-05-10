import classNames from "classnames/bind";
import styles from './Video.module.scss'
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import ShareVideo from "../ShareVideo/ShareVideo";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from "react";
import VideoCard from "./VideoCard/VideoCard";


const cx = classNames.bind(styles)


function Video({ data, onchange, volumeValue, setVolume, setOldVolume, oldVolume }) {
    const [hideListShare, setHideListShare] = useState(true)
    const [like, setLike] = useState(data.liked)

    const renderResult = (attrs) => <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('menu-popper')}>
            <ShareVideo onhide={hideListShare} />
        </PopperWrapper>
    </div>


    const handleActiveLike = () => {
        setLike(prev => !prev)
    }


    return <div className={cx('item-container')} key={data.id} >
        <img
            className={cx('avatar')}
            src={data.user.avatar} alt=""
        />
        <div className={cx('Content')}>
            <div className={cx('TextInfo')}>
                <div className={cx('Author')}>
                    <h3 className={cx('nickname')}>{data.user.nickName} </h3>
                    <h4 className={cx('name')}>{data.user.name}</h4>
                </div>
                <Button className={cx('follow-btn')} outline small>
                    Follow
                </Button>
                <div className={cx('description')}>{data.description} <Link to='/'>{data.tagTopic}</Link> </div>
                <h4 className={cx('music')}>
                    <Link to={'/'}>
                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                        {data.musicLink}
                    </Link>
                </h4>
            </div>
            <div className={cx('video-wrapper')}>
                <VideoCard
                    src={data.src}
                    onchange={onchange}
                    volumeValue={volumeValue}
                    setVolume={setVolume}
                    setOldVolume={setOldVolume}
                    oldVolume={oldVolume}
                />


                <div className={cx('action-item-container')}>
                    <button type="button" className={cx('action-item')} onClick={handleActiveLike}>
                        {
                            like ? <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faHeart} color="red" />
                            </div> : <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        }

                        <strong className={cx('strong-text')}>{data.likeCount}</strong>
                    </button>
                    <Link to={"/"}>
                        <button type="button" className={cx('action-item')}>
                            <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </div>
                            <strong className={cx('strong-text')}>{data.commentCount}</strong>
                        </button>
                    </Link>
                    <Tippy
                        zIndex={"9"}
                        interactive
                        placement="top-start"
                        delay={[0, 700]}
                        offset={[-26, 8]}
                        onHide={() => {
                            setHideListShare(false)
                        }}
                        onShow={() => {
                            setHideListShare(true)

                        }}
                        render={renderResult}
                    >
                        <button type="button" className={cx('action-item')}>
                            <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                            <strong className={cx('strong-text')}>{data.shareCount}</strong>
                        </button>
                    </Tippy>
                </div>
            </div>
        </div>
    </div>

}

export default Video;