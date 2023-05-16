import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Video from '~/components/Video/Video';
import dataVideos from '~/dataVideos/datatVideos';

import { useState } from 'react';







const cx = classNames.bind(styles);




function Home() {

    const [volumeValue, setVolumeValue] = useState("20")
    const [oldVolume, setOldVolume] = useState(volumeValue)


    const handleInputChange = (e) => {
        let target = e.target


        const min = target.min
        const max = target.max
        const val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        setVolumeValue(target.value)
    }




    return (
        <div className={cx('wrapper')}>
            {dataVideos.map(item => {
                if (item.id == 1) {
                    return <Video key={item.id} idvideo="firstVideo" data={item} onchange={handleInputChange} volumeValue={volumeValue}
                        setVolume={setVolumeValue}
                        setOldVolume={setOldVolume}
                        oldVolume={oldVolume}
                    />
                } else {
                    return <Video key={item.id} data={item} onchange={handleInputChange} volumeValue={volumeValue}
                        setVolume={setVolumeValue}
                        setOldVolume={setOldVolume}
                        oldVolume={oldVolume}
                    />
                }

            }
            )}

        </div>
    );
}

export default Home;
