import classNames from 'classnames/bind';
import styles from '../ShareVideo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShareVideoItem({ to, text, icon }) {
    const Icon = icon;
    return (
        <Link to={to} className={cx('share-item')}>
            <Icon />
            <span className={cx('share-text')}>{text}</span>
        </Link>
    );
}

export default ShareVideoItem;
