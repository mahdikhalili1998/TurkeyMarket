import React from "react";
import ImageTag from "../../element/ImageTag";
import DetailInput from "./DetailInput";

function UserDetail() {
  return (
    <div className="bg-white p-4 dark:bg-dark-bg xl:px-16 xl:pt-12">
      {/* اطلاعات فرستنده و دفتر آدرس ها */}
      <div className="flex items-center justify-between border-r-[3px] border-solid border-main-orange">
        <p className="text-xs font-bold dark:text-white px-[10px] xl:text-base">
          اطلاعات فرستنده
        </p>
        <button className="flex items-center gap-2 rounded-md bg-main-dark p-2 text-sm">
          <div className="hidden xl:block">
            <ImageTag src="book" width={24} height={24} />
          </div>
          <span className="text-xs font-semibold text-white dark:bg-main-dark xl:text-sm">
            دفتر آدرس ها
          </span>
          <ImageTag src="left" width={24} height={24} />
        </button>
      </div>
      <div className="border-soild mt-7 flex items-start justify-between border-t-[1px] border-[#D8D8DA] pt-8 dark:border-main-dark">
        <DetailInput />
        <div className="hidden xl:ml-4 xl:block">
          <ImageTag src="detail" width={289} height={357} />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
