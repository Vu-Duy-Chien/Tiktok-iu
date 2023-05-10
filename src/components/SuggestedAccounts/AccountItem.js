import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ onMouseenter = () => { }, data }) {


    return (

        <div className={cx('account-item')} onMouseEnter={onMouseenter}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickName}
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <span className={cx('nickname-text')}>{data.nickName}</span>

                    {data.blueTick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}

                </p>
                <p className={cx('name')}>{data.name}</p>
            </div>
        </div>

    );
}

AccountItem.propTypes = {};

export default AccountItem;
