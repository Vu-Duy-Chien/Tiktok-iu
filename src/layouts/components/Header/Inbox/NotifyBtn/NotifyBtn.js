import classNames from "classnames/bind";
import styles from '../Inbox.module.scss'
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)

function NotifyBtn({ data, onClick, active, index }) {
    const [actived, setActived] = useState()

    useEffect(() => {
        if (index == active) {
            setActived(true)
        } else {
            setActived(false)
        }
    }, [active])

    return <button className={cx('inbox-bar-btn', { 'inbox-bar-btn-active': actived })} onClick={onClick}>{data}</button>
}

export default NotifyBtn;