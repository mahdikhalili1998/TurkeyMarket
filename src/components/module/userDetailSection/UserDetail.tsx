import React from "react";
import ImageTag from "../../element/ImageTag";
import DetailInput from "./DetailInput";

function UserDetail() {
  return (
    <div className="bg-white p-4 dark:bg-dark-bg xl:px-16 xl:pt-12">
      <div className="flex items-center justify-between border-b-2 border-solid border-gray-300 pb-6">
        <p className="xl: border-r-[3px] border-solid border-main-orange py-2 pr-2 text-xs font-bold dark:text-white xl:pt-2 xl:text-base">
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
      <div className="flex items-start justify-between pt-8">
        <div>
          <DetailInput />
        </div>
        <div className="hidden xl:ml-4 xl:block">
          <ImageTag src="detail" width={289} height={357} />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
