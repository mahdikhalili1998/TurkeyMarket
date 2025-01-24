"use client";

import { storyData } from "@/constant/storyData";
import { IStoryData } from "@/types/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function StorySection() {
  const [data, setData] = useState<IStoryData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    setData(storyData);
  }, []);

  const seenStoryHandler = (index: number) => {
    setCurrentIndex(index);
    setCurrentPostIndex(0);
  };

  const closeStoryHandler = () => {
    setCurrentIndex(null);
    setCurrentPostIndex(0);
  };

  const nextPost = () => {
    if (currentIndex !== null) {
      const userStories = data[currentIndex]?.post;
      if (currentPostIndex < userStories.length - 1) {
        setCurrentPostIndex((prev) => prev + 1);
      } else {
        closeStoryHandler();
      }
    }
  };

  const prevPost = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex((prev) => prev - 1);
    }
  };

  const currentStory = currentIndex !== null ? data[currentIndex] : null;

  return (
    <div className="bg-field6 dark:bg-darkMoodBg relative mb-7 border-t-[1px] border-solid border-gray-400 py-8">
      <Swiper
        slidesPerView={11}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex h-[110.26px] w-[84px] cursor-pointer flex-col items-center"
              onClick={() => seenStoryHandler(index)}
            >
              <Image
                src={`/image/${item.id}.png`}
                alt={item.name}
                width={84}
                height={84}
                className="rounded-full border-[3px] border-main-orange dark:border-white"
              />
              <span className="mt-2 text-sm dark:text-white">{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {currentStory && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
          <div
            className="relative w-[840px] rounded-lg bg-gray-800 p-6"
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
          >
            <div className="absolute left-0 top-0 flex w-full gap-1 px-2">
              {currentStory.post.map((_, postIndex) => (
                <div
                  key={`${currentIndex}-${postIndex}`}
                  className={`h-2 flex-1 overflow-hidden rounded bg-gray-500`}
                >
                  <div
                    className={`h-full bg-main-orange ${
                      postIndex === currentPostIndex ? "visible" : "hidden"
                    }`}
                    style={{
                      animation: `storyTimer 5s linear forwards`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                    onAnimationEnd={nextPost}
                  ></div>
                </div>
              ))}
            </div>

            <button
              className="absolute right-4 top-4 text-3xl text-white"
              onClick={closeStoryHandler}
            >
              &times;
            </button>

            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-white ${
                currentPostIndex === 0 ? "hidden" : ""
              }`}
              onClick={prevPost}
            >
              &#8592;
            </button>
            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white ${
                currentPostIndex === currentStory.post.length - 1
                  ? "hidden"
                  : ""
              }`}
              onClick={nextPost}
            >
              &#8594;
            </button>

            <div
              style={{
                width: "600px",
                height: "600px",
                overflow: "hidden",
              }}
              className="mx-auto rounded-md"
            >
              <Image
                src={currentStory.post[currentPostIndex].src}
                width={600}
                height={600}
                alt={`Story ${currentPostIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes storyTimer {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default StorySection;
