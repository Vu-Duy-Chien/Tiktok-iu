import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {

    const [darkMode, setDarkMode] = useState(false)

    const classe = cx('menu-item', {
        separate: data.separate,
    });
    useEffect(() => {
        if (data.title === 'Dark mode') {
            setDarkMode(true)
        }
    }, [])

    return (
        <Button className={classe} leftIcon={data.icon} to={data.to} onClick={onClick}>
            <div className={cx('switch-wrapper')}>
                <span>{data.title}</span>
                {darkMode && <div className={cx('switch-container')}><span className={cx('switch-inner')}></span></div>}
            </div>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
