import classNames from "classnames/bind";
import styles from './Comments.module.scss'
import { useStore, actions } from "~/store";
import LayoutTemporary from "./LayoutTemporary/LayoutTemporary";
import LayoutDefault from "./LayoutDefault/LayoutDefault";
import { useEffect, useState } from "react";
import dataVideos from "~/dataVideos/datatVideos";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const cx = classNames.bind(styles)

function Comments() {
    const navigate = useNavigate();
    const [state, dispatch] = useStore()
    const path = useParams()
    const [videoInview, setVideoInview] = useState()

    useEffect(() => {
        setVideoInview(...dataVideos.filter(item => item.id == path.id))
    }, [path.id])
    const nextVideo = e => {
        const indexVideo = dataVideos.findIndex(item => item.id == path.id)
        const lastIndexVideo = dataVideos.length - 1
        if (e.keyCode === 38 && indexVideo > 0) {
            const nickName = dataVideos[indexVideo - 1].user.nickName
            const id = dataVideos[indexVideo - 1].id
            navigate(`/${nickName}/video/${id}`)
        } else if (e.keyCode === 40 && lastIndexVideo !== indexVideo) {
            const nickName = dataVideos[indexVideo + 1].user.nickName
            const id = dataVideos[indexVideo + 1].id
            navigate(`/${nickName}/video/${id}`)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', nextVideo)
        return () =>
            document.removeEventListener('keydown', nextVideo)

    }, [path.id])
    if (videoInview) {
        return <div className={cx('wrapper')}>

            {state.layoutCommentDefault ?
                <LayoutDefault videoInview={videoInview} /> :
                <LayoutTemporary videoInview={videoInview} />}
        </div>
    }


}

export default Comments;