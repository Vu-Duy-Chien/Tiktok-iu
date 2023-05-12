import classNames from "classnames/bind";
import styles from './BackToTop.module.scss'
import { BackToTopIcon } from "../Icons";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles)


function BackToTop() {

    const backtotopRef = useRef()

    useEffect(() => {
        const onScroll = e => {
            if (window.pageYOffset < 100) {
                backtotopRef.current.style.transform = 'translateY(40px)'
            } else {
                backtotopRef.current.style.transform = 'none'
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.addEventListener("scroll", onScroll)
    }, [])


    return <div className={cx('wrapper')} ref={backtotopRef}>
        <div className={cx('get-app')}>Get app</div>
        <button className={cx('backtotop')} onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>
            <BackToTopIcon className={cx('icon')} />
        </button>
    </div>
}

export default BackToTop;