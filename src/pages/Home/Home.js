import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Video from '~/components/Video/Video';
import dataVideos from '~/dataVideos/datatVideos';

import { useEffect, useState } from 'react';
import { useStore } from '~/store';




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
    const [state, dispatch] = useStore()


    const handleNextVideo = (e) => {
        const element = document.querySelector(`#vidhome${state.videoInview}`)
        if (e.keyCode === 38 && element.previousElementSibling) {
            setTimeout(() => {
                window.scrollTo({
                    top: element.offsetTop - element.previousElementSibling.offsetHeight,
                    left: 0,
                    behavior: 'smooth'
                })
            })


        } else if (e.keyCode === 40 && element.nextElementSibling) {
            setTimeout(() => {
                window.scroll({
                    top: element.offsetTop + element.offsetHeight,
                    left: 0,
                    behavior: 'smooth'
                })
            })

        }
    }

    useEffect(() => {

        window.addEventListener("keydown", handleNextVideo)

        return () => {
            window.removeEventListener("keydown", handleNextVideo)
        }
    }, [state.videoInview])

    return (
        <div className={cx('wrapper')}>
            {dataVideos.map(item => {

                return <Video key={item.id} data={item} onchange={handleInputChange} volumeValue={volumeValue}
                    setVolume={setVolumeValue}
                    setOldVolume={setOldVolume}
                    oldVolume={oldVolume}
                />
            }
            )}
        </div>
    );
}

export default Home;
