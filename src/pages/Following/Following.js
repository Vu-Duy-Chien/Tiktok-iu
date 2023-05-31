import classNames from "classnames/bind";
import styles from './Following.module.scss'
import dataVideos from "~/dataVideos/datatVideos";
import FollowCard from "~/components/FollowCard/FollowCard";
import { useState } from "react";


const cx = classNames.bind(styles)


function Following() {
    const [idVideoRunning, setIdVideoRunning] = useState(1)

    const handleChangeVideoRun = (id) => {
        setIdVideoRunning(id)
    }

    return <div className={cx('wrapper')}>
        {dataVideos.map(video => <FollowCard key={video.id} data={video} idVideo={idVideoRunning} onMouseEnter={handleChangeVideoRun} />)}

    </div>
}

export default Following;
