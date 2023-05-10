import classNames from 'classnames/bind';
import styles from './ShareVideo.module.scss';
import {
    CopyLinkIcon,
    DownIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    FriendsIcon,
    LineIcon,
    LinkedlnIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '~/components/Icons';
import ShareVideoItem from './ShareVideoItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ShareVideo({ onhide }) {
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
        setShowMore(true)
    }, [onhide])

    const handleShowMore = () => {
        setShowMore(false);
    };


    return (
        <div className={cx('wrapper')}>
            <ShareVideoItem to={'/'} icon={EmbedIcon} text={'Embed'} />
            <ShareVideoItem to={'/'} icon={FriendsIcon} text={'Send to friends'} />
            <ShareVideoItem to={'/'} icon={FacebookIcon} text={'Share to Facebook'} />
            <ShareVideoItem to={'/'} icon={WhatsAppIcon} text={'Share to WhatsApp'} />
            <ShareVideoItem to={'/'} icon={CopyLinkIcon} text={'Copy link'} />

            {showMore ? (
                <div className={cx('share-more')} onClick={handleShowMore}>
                    <DownIcon />
                </div>
            ) : (
                <>
                    <ShareVideoItem to={'/'} icon={TwitterIcon} text={'Share to Twitter'} />
                    <ShareVideoItem to={'/'} icon={LinkedlnIcon} text={'Share to Linkedln'} />
                    <ShareVideoItem to={'/'} icon={RedditIcon} text={'Share to Reddit'} />
                    <ShareVideoItem to={'/'} icon={TelegramIcon} text={'Share to Telegram'} />
                    <ShareVideoItem to={'/'} icon={EmailIcon} text={'Share to Email'} />
                    <ShareVideoItem to={'/'} icon={LineIcon} text={'Share to Line'} />
                    <ShareVideoItem to={'/'} icon={PinterestIcon} text={'Share to Pinterest'} />
                </>
            )}
        </div>
    );
}

export default ShareVideo;
