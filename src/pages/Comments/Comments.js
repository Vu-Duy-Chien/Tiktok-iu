import classNames from "classnames/bind";
import styles from './Comments.module.scss'
import { useStore, actions } from "~/store";
import { useEffect, useState } from "react";
import LayoutTemporary from "./LayoutTemporary/LayoutTemporary";
import LayoutDefault from "./LayoutDefault/LayoutDefault";
import Home from "../Home/Home";

const cx = classNames.bind(styles)

function Comments() {
    const [state, dispatch] = useStore()
    const [currentLayout, setCurrentLayout] = useState(false)


    useEffect(() => {
        if (!state.layoutCommentDefault) {
            setCurrentLayout(false)
            dispatch(actions.commentsDefault())
        } else {
            setCurrentLayout(true)
        }
    }, [])


    return <div className={cx('wrapper')}>

        {!currentLayout && <Home />}
        {currentLayout ? <LayoutDefault /> : <LayoutTemporary />}
    </div>

}

export default Comments;