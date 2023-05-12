import classNames from "classnames/bind";
import styles from './Video.module.scss'
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import ShareVideo from "../ShareVideo/ShareVideo";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard/VideoCard";
import { useStore, actions } from '~/store';



const cx = classNames.bind(styles)


function Video({ data, onchange, volumeValue, setVolume, setOldVolume, oldVolume, idvideo }) {
    const [hideListShare, setHideListShare] = useState(true)
    const [like, setLike] = useState()
    const [follow, setFollow] = useState()


    const renderResult = (attrs) => <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('menu-popper')}>
            <ShareVideo onhide={hideListShare} />
        </PopperWrapper>
    </div>


    // Verify login status
    const [state, dispatch] = useStore()
    const currentUser = state.currentUser



    useEffect(() => {

        const checkID = currentUser.follow.some(item => item == data.id)

        if (checkID) {
            setFollow(false)
            setLike(false)
        } else {
            setFollow(true)
            setLike(true)

        }
    }, [currentUser.id])


    //liked
    const handleActiveLike = e => {
        if (currentUser.status) {
            let idvideo = ''
            if (e.target.tagName === 'path') {
                idvideo = e.target.parentElement.getAttribute("idvideo")

            } else {
                idvideo = e.target.getAttribute("idvideo")
            }
            const dataListUsers = JSON.parse(localStorage.getItem("listUsers"))
            let [newUser] = dataListUsers.filter(user => (user.id === currentUser.id))
            let newData = dataListUsers.filter(user => !(user.id === currentUser.id))
            if (like && !currentUser.liked.some(id => id === data.id)) {
                if (newUser.liked && newUser.liked.length > 0) {

                    if (!newUser.liked.includes(idvideo)) {
                        newUser.liked = [...newUser.liked, idvideo]
                    }
                } else {
                    newUser.liked = [idvideo]
                }
                newData = [...newData, newUser]
                localStorage.setItem("listUsers", JSON.stringify(newData))
            } else {
                newUser.liked = newUser.liked.filter(id => !(id === idvideo))
                newData = [...newData, newUser]
                localStorage.setItem("listUsers", JSON.stringify(newData))
            }
            dispatch(actions.updateFollow(newUser.liked))

            setLike(!like)
        } else {
            dispatch(actions.showModal())
        }
    }
    //follow
    const handleFollow = e => {
        if (currentUser.status) {
            const idvideo = e.target.getAttribute("idvideo")

            const dataListUsers = JSON.parse(localStorage.getItem("listUsers"))
            let [newUser] = dataListUsers.filter(user => (user.id === currentUser.id))
            let newData = dataListUsers.filter(user => !(user.id === currentUser.id))
            if (follow && !currentUser.follow.some(id => id === data.id)) {


                if (newUser.follow && newUser.follow.length > 0) {

                    if (!newUser.follow.includes(idvideo)) {
                        newUser.follow = [...newUser.follow, idvideo]
                    }
                } else {
                    newUser.follow = [idvideo]
                }
                newData = [...newData, newUser]
                localStorage.setItem("listUsers", JSON.stringify(newData))
            } else {
                newUser.follow = newUser.follow.filter(id => !(id === idvideo))
                newData = [...newData, newUser]
                localStorage.setItem("listUsers", JSON.stringify(newData))
            }
            dispatch(actions.updateLiked(newUser.follow))
            setFollow(!follow)
        } else {
            dispatch(actions.showModal())
        }
    }

    //comment
    const handleShowComment = () => {
        if (currentUser.status) {
            //
        } else {
            dispatch(actions.showModal())
        }
    }

    return <div className={cx('item-container')} key={data.id} id={idvideo}>
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
                <Button className={cx('follow-btn')} idvideo={data.id} outline small onClick={handleFollow}>
                    {follow ? 'Follow' : 'Following'}
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
                    <button type="button" className={cx('action-item')} onClick={handleActiveLike} idvideo={data.id}>
                        {
                            !like ? <div className={cx('icon-wrapper')} idvideo={data.id}>
                                <FontAwesomeIcon icon={faHeart} color="red" idvideo={data.id} />
                            </div> : <div className={cx('icon-wrapper')} idvideo={data.id}>
                                <FontAwesomeIcon icon={faHeart} idvideo={data.id} />
                            </div>
                        }

                        <strong className={cx('strong-text')} idvideo={data.id}>{data.likeCount}</strong>
                    </button>
                    <button type="button" className={cx('action-item')} onClick={handleShowComment}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <strong className={cx('strong-text')} >{data.commentCount}</strong>
                    </button>

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