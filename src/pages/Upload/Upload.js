import classNames from "classnames/bind";
import styles from './Upload.module.scss'

const cx = classNames.bind(styles)

function Upload() {
    return <div className={cx('wrapper')}>
        <h2>Upload</h2>
    </div>
}

export default Upload;
