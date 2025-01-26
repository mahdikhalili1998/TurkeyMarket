"use client";
import { storyData } from "@/constant/storyData";
import { IStoryData } from "@/types/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Swiper as StorySwiper,
  SwiperSlide as StorySwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import {
  Swiper as PostSwiper,
  SwiperSlide as PostSwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function StorySection() {
  const [data, setData] = useState<IStoryData[]>([]);
  const [selectedStory, setSelectedStory] = useState<IStoryData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // بررسی اینکه آیا دستگاه موبایل است
  useEffect(() => {
    const checkIsMobile = window.innerWidth <= 768;
    setIsMobile(checkIsMobile);
  }, []);

  // غیرفعال کردن اسکرول و جلوگیری از حرکت صفحه
  useEffect(() => {
    if (selectedStory && isMobile) {
      document.body.style.overflow = "hidden"; // اسکرول غیرفعال
      document.body.style.touchAction = "none"; // جلوگیری از حرکت صفحه با انگشت
      document.documentElement.style.overflow = "hidden"; // برای اطمینان از غیرفعال بودن اسکرول در HTML
      document.documentElement.style.touchAction = "none"; // جلوگیری از حرکت در HTML
    } else {
      document.body.style.overflow = ""; // بازگرداندن اسکرول به حالت عادی
      document.body.style.touchAction = ""; // بازگرداندن touchAction
      document.documentElement.style.overflow = ""; // بازگرداندن اسکرول در HTML
      document.documentElement.style.touchAction = ""; // بازگرداندن touchAction در HTML
    }

    return () => {
      document.body.style.overflow = ""; // بازگرداندن اسکرول در cleanup
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = ""; // بازگرداندن اسکرول در HTML
      document.documentElement.style.touchAction = "";
    };
  }, [selectedStory, isMobile]);

  useEffect(() => {
    setData(storyData);
  }, []);

  const seenStoryHandler = (story: IStoryData) => {
    setSelectedStory(story);
  };

  const closePostSwiper = () => {
    setSelectedStory(null);
  };

  return (
    <div className="relative mb-7 border-t-[1px] border-solid border-[#D8D8DA] bg-field6 py-8 dark:bg-darkMoodBg">
      {/* Story Swiper */}
      <StorySwiper
        slidesPerView={11}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper h-[74px] w-[334px]"
        breakpoints={{
          1024: { slidesPerView: 11 },
          768: { slidesPerView: 5 },
          480: { slidesPerView: 5 },
          320: { slidesPerView: 5 },
        }}
      >
        {data.map((item, index) => (
          <StorySwiperSlide key={index}>
            <div
              onClick={() => seenStoryHandler(item)}
              className="flex h-[74px] w-[54px] cursor-pointer flex-col items-center xl:h-[110px] xl:w-[84px]"
            >
              <Image
                src={`/image/${item.id}.png`}
                alt={item.name}
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-full border-[3px] border-main-orange dark:border-white"
              />
              <span className="mt-2 font-semibold dark:text-white xl:text-base">
                {item.name}
              </span>
            </div>
          </StorySwiperSlide>
        ))}
      </StorySwiper>

      {/* Post Swiper */}
      {selectedStory && (
        <div className="xl:fixed absolute left-0 -top-[16rem] z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 xl:left-0 xl:top-0">
          <div className="relative w-[100%] max-w-[600px] rounded-lg bg-[#17161699] p-4 shadow-lg dark:bg-darkMoodBg">
            <button
              onClick={closePostSwiper}
              className="absolute right-2 top-5 text-red-500 hover:text-red-500"
            >
              ✖
            </button>
            <PostSwiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // مدت زمان توقف هر اسلاید (بر حسب میلی‌ثانیه)
                disableOnInteraction: false, // در صورت تعامل کاربر، autoplay متوقف نمی‌شود
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="postSwiper"
            >
              {selectedStory.post.map((post) => (
                <PostSwiperSlide key={post.id} className="postSwiper-slide">
                  <Image
                    src={post.src}
                    alt={`Post ${post.id}`}
                    width={600}
                    height={400}
                    className="h-auto w-full rounded-lg"
                  />
                </PostSwiperSlide>
              ))}
            </PostSwiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default StorySection;
