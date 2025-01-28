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

  // غیرفعال کردن اسکرول عمودی و افقی
  useEffect(() => {
    if (selectedStory) {
      document.body.style.overflow = "hidden"; // غیرفعال کردن اسکرول
      document.body.style.touchAction = "none"; // جلوگیری از لمس
      document.documentElement.style.overflow = "hidden"; // جلوگیری از اسکرول در html
      document.documentElement.style.touchAction = "none"; // جلوگیری از لمس در html
    } else {
      document.body.style.overflow = ""; // بازگرداندن به حالت عادی
      document.body.style.touchAction = ""; // بازگرداندن لمس
      document.documentElement.style.overflow = ""; // بازگرداندن اسکرول
      document.documentElement.style.touchAction = ""; // بازگرداندن لمس
    }

    return () => {
      document.body.style.overflow = ""; // بازگرداندن اسکرول
      document.body.style.touchAction = ""; // بازگرداندن لمس
      document.documentElement.style.overflow = ""; // بازگرداندن اسکرول
      document.documentElement.style.touchAction = ""; // بازگرداندن لمس
    };
  }, [selectedStory]);

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
    <div className="relative mb-7 overflow-x-hidden border-t-[1px] border-solid border-[#D8D8DA] bg-field6 py-8 dark:bg-darkMoodBg">
      {/* Story Swiper */}
      <StorySwiper
        slidesPerView={11}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper h-[74px] w-[334px]"
        breakpoints={{
          1024: { slidesPerView: 11 },
          768: { slidesPerView: 5 },
          500: { slidesPerView: 10, spaceBetween: 2 },
          320: { slidesPerView: 5 },
        }}
      >
        {data.map((item, index) => (
          <StorySwiperSlide key={index}>
            <div
              onClick={() => seenStoryHandler(item)}
              className="flex h-[78px] w-[54px] cursor-pointer flex-col items-center xl:h-[110px] xl:w-[84px]"
            >
              <Image
                src={`/image/${item.id}.png`}
                alt={item.name}
                width={50}
                height={50}
                className="500:h-[90px] 500:w-[90px] h-[50px] w-[50px] rounded-full border-[3px] border-main-orange dark:border-white"
              />
              <span className="500:text-sm mt-2 font-semibold dark:text-white xl:text-base">
                {item.name}
              </span>
            </div>
          </StorySwiperSlide>
        ))}
      </StorySwiper>

      {/* Post Swiper */}
      {selectedStory && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
          onClick={closePostSwiper} // بستن استوری با کلیک روی پس‌زمینه
        >
          <div
            className="relative w-[100%] max-w-[600px] rounded-lg bg-[#17161699] p-4 shadow-lg dark:bg-darkMoodBg"
            onClick={(e) => e.stopPropagation()} // جلوگیری از کلیک روی محتوای داخلی
          >
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
                delay: 3000,
                disableOnInteraction: false,
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
