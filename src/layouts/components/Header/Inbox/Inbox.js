import classNames from "classnames/bind";
import styles from './Inbox.module.scss'
import NotifyBtn from "./NotifyBtn/NotifyBtn";
import { useState } from "react";
import ListNotify from "./ListNotify/ListNotify";

const cx = classNames.bind(styles)
const notifyBtnName = [
    'All activity',
    'Likes',
    'Comments',
    'Mentions and tags',
    'Followers'
]

function Inbox() {
    const [notifyActive, setNotifiactive] = useState(0)

    const handleActive = index => {
        setNotifiactive(index)
    }

    return <div className={cx('inbox-wrapper')}>
        <div className={cx('inbox-container')}>
            <div className={cx('inbox-header-container')}>
                <h2 className={cx('inbox-title')}>Notifications</h2>
                <div className={cx('inbox-bar')}>

                    {notifyBtnName.map((item, index) =>
                        <NotifyBtn key={index} index={index} data={item} onClick={() => handleActive(index)} active={notifyActive} />)}

                </div>
            </div>
            <div className={cx('inbox-list')}>
                <ListNotify index={notifyActive} />
            </div>
        </div>
    </div>


}

export default Inbox;