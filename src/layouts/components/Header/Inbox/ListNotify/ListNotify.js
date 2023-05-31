import classNames from "classnames/bind";
import styles from '../Inbox.module.scss'
import { InboxActivityIcon, InboxCommentsIcon, InboxFollowersIcon, InboxLikesIcon, InboxMentionsIcon } from "~/components/Icons";
import { useEffect, useState } from "react";


const cx = classNames.bind(styles)

function ListNotify({ index }) {
    const [currentIcon, setCurrentIcon] = useState(<InboxActivityIcon />)
    const [title, setTitle] = useState('All activity')
    const [desc, setDesc] = useState('Notifications about your account will appear here.')
    useEffect(() => {
        switch (index) {
            case 0:
                setCurrentIcon(<InboxActivityIcon />)
                setTitle('All activity')
                setDesc('Notifications about your account will appear here.')
                break;
            case 1:
                setCurrentIcon(<InboxLikesIcon />)
                setTitle('Likes on your videos')
                setDesc("When someone likes one of your videos, you'll see it here")
                break;
            case 2:
                setCurrentIcon(<InboxCommentsIcon />)
                setTitle('Comments on your videos')
                setDesc("When someone comments on one of your videos, you'll see it here")
                break;
            case 3:
                setCurrentIcon(<InboxMentionsIcon />)
                setTitle('Mentions of You')
                setDesc("When someone mentions you, you'll see it here")
                break;
            case 4:
                setCurrentIcon(<InboxFollowersIcon />)
                setTitle('New followers')
                setDesc("When someone new follows you, you'll see it here")
                break;
            default:
                throw new Error('invalid')
        }
    }, [index])
    return <div className={cx('inbox-list-default')}>
        {currentIcon}
        <p className={cx('inbox-default-title')}>{title}</p>
        <p className={cx('inbox-default-desc')}>{desc}</p>
    </div>
}

export default ListNotify;