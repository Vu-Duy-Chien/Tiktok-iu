import classNames from "classnames/bind";
import styles from './CommentsVideo.module.scss'
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faAt, faBookmark, faEllipsis, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { EmbedIcon, FacebookIcon, FriendsIcon, TwitterIcon, WhatsAppIcon } from "../Icons";
import Tippy from "@tippyjs/react";
import TippyHeadless from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ShareVideo from "../ShareVideo/ShareVideo";
import { useState } from "react";


const cx = classNames.bind(styles)

function CommentsVideo({ data }) {
    const [hideListShare, setHideListShare] = useState(true)


    const renderResult = (attrs) => <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('menu-popper')}>
            <ShareVideo onhide={hideListShare} />
        </PopperWrapper>
    </div>

    return <div className={cx('wrapper')}>
        <div className={cx('info-container')}>
            <Link to={`/${data.user.nickName}`}>
                <img alt="" src={data.user.avatar} />
            </Link>
            <Link className={cx('taga-name')} to={`/${data.user.nickName}`}>
                <strong>{data.user.nickName}</strong>
                <span>{data.user.name}</span>
            </Link>
            <Button outline>Follow</Button>
        </div>
        <div className={cx('main-container')}>
            <p>
                <span>{data.description}</span>
                <strong>{data.tagTopic}</strong>
            </p>
            <h4 className={cx('music')}>
                <FontAwesomeIcon icon={faMusic} />
                {data.musicLink}
            </h4>
            <div className={cx('like-share-container')}>
                <div className={cx('center-row')}>
                    <div className={cx('like-share-count')}>
                        <button className={cx('like-count')}>
                            <span><FontAwesomeIcon icon={faHeart} /></span>
                            <strong>{data.likeCount}</strong>
                        </button>
                        <button style={{ cursor: 'default' }} className={cx('comment-count')}>
                            <span> <FontAwesomeIcon icon={faCommentDots} /></span>
                            <strong>{data.commentCount}</strong>
                        </button>
                        <button className={cx('bookmark-count')}>
                            <span> <FontAwesomeIcon icon={faBookmark} /></span>
                            <strong>{data.bookmarkCount}</strong>
                        </button>
                    </div>
                    <div className={cx('share-group-container')}>


                        <Tippy
                            content="Embed" placement="top"
                        >
                            <Link>
                                <EmbedIcon />
                            </Link>
                        </Tippy>
                        <Tippy
                            content="Send to friends" placement="top"
                        >
                            <Link>
                                <FriendsIcon />
                            </Link>
                        </Tippy>
                        <Tippy
                            content="Share to Facebook" placement="top"
                        >
                            <Link>
                                <FacebookIcon />
                            </Link>
                        </Tippy>
                        <Tippy
                            content="Share to WhatsApp" placement="top"
                        >
                            <Link>
                                <WhatsAppIcon />
                            </Link>
                        </Tippy>
                        <Tippy
                            content="Share to Twitter" placement="top"
                        >
                            <Link>
                                <TwitterIcon />
                            </Link>
                        </Tippy>
                        <TippyHeadless
                            zIndex={"9"}
                            interactive
                            placement="bottom-start"
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
                            <button>
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </TippyHeadless>

                    </div>
                </div>
                <div className={cx('copy-link')}>
                    <p>{`http://localhost:3000/${data.user.nickName}/video/${data.id}`}</p>
                    <button onClick={() => navigator.clipboard.writeText(`http://localhost:3000/${data.user.nickName}/video/${data.id}`)}>Copy link</button>
                </div>
            </div>
        </div>
        <div className={cx('comment-container')}>
            <div className={cx('comment-list-container')}>
                <div className={cx('comment-item-container')}>
                    <div className={cx('comment-content-container')}>
                        <Link >  <img src="https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" /></Link>
                        <div className={cx('content-container')}>
                            <Link>name</Link>
                            <p>comment</p>
                            <p>Reply</p>
                        </div>
                        <div className={cx('like-comment-container')}>
                            <div className={cx('report-buttom')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('like-comment')}>
                                <div className={cx('heart-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className={cx('action-container')}></div>
                    </div>
                    <div className={cx('reply-container')}>
                        <div className={cx('reply-action-container')}></div>
                    </div>
                </div>
                <div className={cx('comment-item-container')}>
                    <div className={cx('comment-content-container')}>
                        <Link >  <img src="https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" /></Link>
                        <div className={cx('content-container')}>
                            <Link>name</Link>
                            <p>comment</p>
                            <p>Reply</p>
                        </div>
                        <div className={cx('like-comment-container')}>
                            <div className={cx('report-buttom')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('like-comment')}>
                                <div className={cx('heart-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className={cx('action-container')}></div>
                    </div>
                    <div className={cx('reply-container')}>
                        <div className={cx('reply-action-container')}></div>
                    </div>
                </div>
                <div className={cx('comment-item-container')}>
                    <div className={cx('comment-content-container')}>
                        <Link >  <img src="https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" /></Link>
                        <div className={cx('content-container')}>
                            <Link>name</Link>
                            <p>comment</p>
                            <p>Reply</p>
                        </div>
                        <div className={cx('like-comment-container')}>
                            <div className={cx('report-buttom')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('like-comment')}>
                                <div className={cx('heart-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className={cx('action-container')}></div>
                    </div>
                    <div className={cx('reply-container')}>
                        <div className={cx('reply-action-container')}></div>
                    </div>
                </div>
                <div className={cx('comment-item-container')}>
                    <div className={cx('comment-content-container')}>
                        <Link >  <img src="https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" /></Link>
                        <div className={cx('content-container')}>
                            <Link>name</Link>
                            <p>comment</p>
                            <p>Reply</p>
                        </div>
                        <div className={cx('like-comment-container')}>
                            <div className={cx('report-buttom')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('like-comment')}>
                                <div className={cx('heart-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className={cx('action-container')}></div>
                    </div>
                    <div className={cx('reply-container')}>
                        <div className={cx('reply-action-container')}></div>
                    </div>
                </div>
                <div className={cx('comment-item-container')}>
                    <div className={cx('comment-content-container')}>
                        <Link >  <img src="https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" /></Link>
                        <div className={cx('content-container')}>
                            <Link>name</Link>
                            <p>comment</p>
                            <p>Reply</p>
                        </div>
                        <div className={cx('like-comment-container')}>
                            <div className={cx('report-buttom')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('like-comment')}>
                                <div className={cx('heart-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <div className={cx('action-container')}></div>
                    </div>
                    <div className={cx('reply-container')}>
                        <div className={cx('reply-action-container')}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('bottom-comment-container')}>
            <div className={cx('input-comment-container')}>
                <div className={cx('input-comment')}>

                    <div className={cx('comment-text')}>

                        <div>
                            <div id="pla" style={{ whiteSpace: 'pre-wrap' }}>
                                add comments ...
                            </div>
                        </div>

                        <div
                            role="textbox"
                            contenteditable="true"
                            spellcheck="false"
                            aria-describedby='pla'
                        >

                        </div>
                    </div>
                    <div className={cx('tag-icon')}><FontAwesomeIcon icon={faAt} /></div>
                    <div className={cx('tag-icon')}><FontAwesomeIcon icon={faFaceSmile} /></div>
                </div>
                <div className={cx('post-comment')}>Post</div>
            </div>
        </div>
    </div>
}

export default CommentsVideo;