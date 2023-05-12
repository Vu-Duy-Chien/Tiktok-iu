import classNames from "classnames/bind";
import styles from './Following.module.scss'
import BackToTop from "~/components/BackToTop/BackToTop";


const cx = classNames.bind(styles)


function Following() {

    return <div className={cx('wrapper')}>
        <h1 id="firstVideo">following</h1>
        <div className={cx('test')} ></div>

    </div>
}

export default Following;
