import bgVideo from '../assets/video/background-video.mp4'
import logo from '../assets/images/center-logo-image.jpeg'
import StarRatings from 'react-star-ratings';
import { useState } from 'react';

const SaiTrade = () => {
    const [rating, setRating] = useState(5);

    const changeRating = (newRating) => {
        setRating(newRating);
    };
    return (
        <div className="min-h-screen bg-saiTrader bg-cover bg-center bg-no-repeat bg-opacity-50 flex flex-col items-center justify-center relative px-4">
            <div className="z-10 text-white bg-white bg-opacity-[1%] backdrop-filter backdrop-blur-lg text-center lg:p-10 !pb-5 md:p-6 p-4">
                <div className="bg-white bg-opacity-[1%] backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-2xl mb-4 inline-block items-center justify-center flex-col">
                    <div className='size-20 mx-auto'>
                        <img src={logo} alt="logo image" className='rounded-full' />
                    </div>
                    <h2 className="md:text-xl text-md font-bold mt-2 text-center">Sai TRADING CO.</h2>
                    <p className='text-center'>OPTIONS BUYER</p>
                </div>

                <div className="bg-blue-600 bg-opacity-70 p-2 rounded mb-4 max-w-[450px] mx-auto group hover:opacity-70 transition-all duration-300">
                    <a href='https://t.me/+Ak9_i0uQxytiYmU9' target='_blank' className="text-lg hover:text-blue-900 group-hover:underline transition-all duration-300 group-hover:underline-offset-4">Sai TRADING</a>
                </div>

                <a href='https://t.me/+Ak9_i0uQxytiYmU9' className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 mx-auto max-w-[450px] w-full text-white font-bold py-2 px-4 rounded flex items-center justify-center mb-4">
                    JOIN TELEGRAM NOW
                </a>

                <a href='https://t.me/+Ak9_i0uQxytiYmU9' className="text-sm mb-2 underline underline-offset-4 block hover:text-yellow-600 transition-all duration-300">
                    🏆TRADE WITH Sai TRADING🏆 💎VIP SESSION BENEFITS💎 📊99% ACCURACY📊 💰LOSS RECOVERY💰
                </a>
                <a href='https://t.me/+Ak9_i0uQxytiYmU9' className="text-sm md:mb-4 mb-2 underline underline-offset-2 block  hover:text-yellow-600 transition-all duration-300">DAILY 10 TO 15 SURESHOT SIGNALS. Join Now For Free</a>


                <p className="md:text-lg text-md">
                    This Is Very Good Telegram Channel For Traders. Full Sureshot Stock Trading And Fully Trusted Telegram Channel
                </p>
                <p className="md:text-lg text-md">Thanks For That Trader❤️</p>
                <div className="flex justify-center mt-2">
                    <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="1px"
                    />
                </div>
            </div>
        </div>
    )
}

export default SaiTrade