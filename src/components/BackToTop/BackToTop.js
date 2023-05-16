import classNames from "classnames/bind";
import styles from './BackToTop.module.scss'
import { BackToTopIcon } from "../Icons";
import { useEffect, useRef, useState } from "react";
import { actions, useStore } from "~/store";

const cx = classNames.bind(styles)


function BackToTop() {
    const [state, dispatch] = useStore()
    const [backBtn, setBackBtn] = useState(true)



    const handleShowGetapp = () => {
        dispatch(actions.showGetapp())
    }

    useEffect(() => {

        const onScroll = e => {
            if (window.pageYOffset < 100) {
                setBackBtn(true)
            } else {
                setBackBtn(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.addEventListener("scroll", onScroll)
    }, [])


    return <div className={cx('wrapper', { 'active': backBtn })}>
        <div className={cx('get-app')} onClick={handleShowGetapp}>Get app</div>
        <button className={cx('backtotop')} onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>
            <BackToTopIcon className={cx('icon')} />
        </button>
    </div>
}

export default BackToTop;