import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Video from '~/components/Video/Video';

// video
import IFoundOil from '~/assets/videos/IFoundOil.mp4'
import aquaScaping from '~/assets/videos/aquaScaping.mp4'
import petfunny from '~/assets/videos/petfunny.mp4'
import sportbike from '~/assets/videos/sportbike.mp4'
import phonememe from '~/assets/videos/phonememe.mp4'
import cothebanchuabiet from '~/assets/videos/cothebanchuabiet.mp4'
import funnyNoa from '~/assets/videos/funnyNoa.mp4'
import hientuongthuvi from '~/assets/videos/hientuongthuvi.mp4'
import hoaxinh from '~/assets/videos/hoaxinh.mp4'
import mitran from '~/assets/videos/mitran.mp4'
import { useState } from 'react';






const cx = classNames.bind(styles);

const dataVideos = [
    {
        id: 1,
        likeCount: "2.4M",
        commentCount: "46.6K",
        shareCount: "25.6K",
        src: IFoundOil,
        description: "I FOUND OIL!",
        tagTopic: "#freedom",
        musicLink: "original sound - Slavik",
        liked: true,

        user: {
            name: "Slavik",
            nickName: "slavikjunge.ma4",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9587cf19e1eeec4b79872ab9bdf0b693~c5_100x100.jpeg?x-expires=1683522000&x-signature=zVQrvaLfSv9RVi8DPRCzrhL7VCA%3D"
        }
    },
    {
        id: 2,
        likeCount: "5.2M",
        commentCount: "16.7K",
        shareCount: "110.1K",
        src: aquaScaping,
        description: "Với phụ kiện này chúng có thể bay lên cao",
        tagTopic: "#aquascaping",
        musicLink: "Luv Letters - frad",
        liked: false,
        user: {
            name: "aquascaping",
            nickName: "aquascaping",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05a176a8898d04e63f01cd0601865f2a~c5_100x100.jpeg?x-expires=1683637200&x-signature=%2B0sc6X7FdAfpPA94LF1e6h3lgrE%3D"
        }
    },
    {
        id: 3,
        likeCount: "231.3K",
        commentCount: "5934",
        shareCount: "18.4K",
        src: petfunny,
        description: "Nuôi cho tốn cơm 😂",
        tagTopic: "#animalsoftiktok",
        musicLink: "nhạc nền - Petfunny",
        liked: false,

        user: {
            name: "Petfunny",
            nickName: "Petfunny",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a1eacf94ba6f360131c736454a2033e3~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1683550800&x-signature=E483RU5SlOgmdcRxD8UfUWXSEsI%3D"
        }
    },
    {
        id: 4,
        likeCount: "27.1K",
        commentCount: "423",
        shareCount: "244",
        src: sportbike,
        description: "Ae thấy sao 🤔",
        tagTopic: "#sportbike",
        musicLink: "nhạc nền - Tien Dat ( TD )",
        liked: true,
        user: {
            name: "VThang ✨",
            nickName: "thanden36",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e0167ec566c930e478ad1afcee37ea2~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1683550800&x-signature=bAcILaHL8GEDE4qadYcmw52U%2FZQ%3D"
        }
    },
    {
        id: 5,
        likeCount: "540.4K",
        commentCount: "7428",
        shareCount: "7674",
        src: phonememe,
        description: "Hệ điều hành thập cẩm 🤣",
        tagTopic: "#xuhuong",
        musicLink: "nhạc nền - Đà Lạt +",
        liked: false,
        user: {
            name: "𝑷𝒉𝒆𝒂𝒑 𝑴𝒂𝒌𝒆 𝑴𝒆𝒎𝒆",
            nickName: "pheap_meme",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e0167ec566c930e478ad1afcee37ea2~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1683550800&x-signature=bAcILaHL8GEDE4qadYcmw52U%2FZQ%3D"
        }
    },
    {
        id: 6,
        likeCount: "54.8K",
        commentCount: "773",
        shareCount: "1609",
        src: cothebanchuabiet,
        description: "Đánh không được thì ta chạy",
        tagTopic: "#hàihướcvuivẻ",
        musicLink: "nhạc nền - Vui Kênh TV - có thể -bạn- chưa biết",
        liked: false,
        user: {
            name: "có thể -bạn- chưa biết",
            nickName: "cothebanchuabiethh",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/af045173c23cedba6511afbf8e88df00~c5_100x100.jpeg?x-expires=1683597600&x-signature=SRUy9ay1yv6nVmEvrvnrJlwDW4s%3D"
        }
    },
    {
        id: 7,
        likeCount: "12.1M",
        commentCount: "57K",
        shareCount: "261.5K",
        src: funnyNoa,
        description: "",
        tagTopic: "#funnyvideo",
        musicLink: "оригинальный звук - Мешапчики",
        liked: false,
        user: {
            name: "Mememi",
            nickName: "funny.noa",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d274cd8a489973f0c8e5a5316157a79a~c5_100x100.jpeg?x-expires=1683597600&x-signature=5E2BJC6rH%2FamZnDhyBhe1Z4pVXo%3D"
        }
    },
    {
        id: 8,
        likeCount: "80K",
        commentCount: "676",
        shareCount: "774",
        src: hientuongthuvi,
        description: "Hiện tượng thú vị đánh lừa bộ não của chúng ta",
        tagTopic: "#thinhhanh",
        musicLink: "nhạc nền - L-E-O 👑",
        liked: false,
        user: {
            name: "L-E-O 👑",
            nickName: "l.e.o_bg",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/61adac5489bb9d0c8cd863b4ab54f174~c5_100x100.jpeg?x-expires=1683601200&x-signature=1%2FJCsi0SH4oGvcoL6CUJ34ZokOI%3D"
        }
    },
    {
        id: 9,
        likeCount: "50.5K",
        commentCount: "114",
        shareCount: "61",
        src: mitran,
        description: "mới lên màu ,đẹp ko ae",
        tagTopic: "",
        musicLink: "WESTSIDE SQUAD - SinKra Remix - Jombie & Dế Choắt & Endless",
        liked: false,
        user: {
            name: "Mi Trần 🐰",
            nickName: "1510_mie",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7ed24eae83ade506fd0f42bb175c37e1~c5_100x100.jpeg?x-expires=1683601200&x-signature=W48zV7L%2B0r07a5hITh1%2B0Q5WBvw%3D"
        }
    },
    {
        id: 10,
        likeCount: "64.5K",
        commentCount: "449",
        shareCount: "351",
        src: hoaxinh,
        description: "",
        tagTopic: "#capcut",
        musicLink: "nhạc nền - iu tiktok nhìu🍇",
        liked: false,
        user: {
            name: "iu tiktok nhìu🍇",
            nickName: "embexinh.207",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c65aeec498e13712bb98dafb987b677c~c5_100x100.jpeg?x-expires=1683601200&x-signature=usuTE1iker%2Bo0ntWyVq7a61qLd4%3D"
        }
    }
]


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
            {dataVideos.map(item => (
                <Video key={item.id} data={item} onchange={handleInputChange} volumeValue={volumeValue}
                    setVolume={setVolumeValue}
                    setOldVolume={setOldVolume}
                    oldVolume={oldVolume}
                />
            ))}

        </div>
    );
}

export default Home;
