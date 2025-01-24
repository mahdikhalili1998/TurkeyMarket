import React from "react";
import ImageTag from "../../element/ImageTag";
import DetailInput from "./DetailInput";

function UserDetail() {
  return (
    <div className="dark:bg-dark-bg bg-white px-16 pt-12">
      <div className="flex items-center justify-between border-b-2 border-solid border-gray-300 pb-6">
        <p className="border-r-[3px] border-solid border-main-orange pr-2 pt-2 dark:text-white">
          اطلاعات فرستنده
        </p>
        <button className="flex items-center gap-2 rounded-md bg-main-dark p-2 text-sm">
          <ImageTag src="book" width={24} height={24} />
          <span className="text-white dark:bg-main-dark">دفتر آدرس ها</span>
          <ImageTag src="left" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-start justify-between pt-8">
        <div>
          <DetailInput />
        </div>
        <div className="ml-4">
          <ImageTag src="detail" width={289} height={357} />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
