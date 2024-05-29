import Slider from "react-slick";
import { FeedBackVideo } from "../../feedback_video";
import { FeedBackVideoSmartphone } from "../feedback_video_smartphone";

const SmartphoneFeedback = () => {

    const videos = [
        {
            id: 1,
            src: "/gallery/alex.mp4"
        },
        {
            id: 2,
            src: "/gallery/jose.mp4"
        },
        {
            id: 3,
            src: "/gallery/mathias.mp4"
        },
        {
            id: 4,
            src: "/gallery/walmir.mp4"
        },
    ]

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <li key={i}>
                <i className="fa-solid fa-star" />
            </li>
        );
    }

    return (
        <>
            <div className="">
                <Slider {...settings}>
                    {videos.map(video => (
                        <div key={video.id} className="py-5">
                            <FeedBackVideoSmartphone src={video.src} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default SmartphoneFeedback;
