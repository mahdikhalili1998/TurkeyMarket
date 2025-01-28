import FaceBook from "@/components/icon/FaceBook";
import Instagram from "@/components/icon/Instagram";
import Telegram from "@/components/icon/Telegram";
import WhatsApp from "@/components/icon/WhatsApp";

function FifthSection() {
  return (
    <div className="mt-3 bg-field6 dark:bg-[#404248] xl:mt-12 xl:flex xl:items-center xl:justify-between xl:bg-field3 xl:px-[100px] xl:py-[18px]">
      {/* دسکتاپ */}
      <p className="hidden p-4 text-xs font-semibold text-text-color xl:block xl:text-base xl:text-white">
        تمامی حقوق مادی و معنوی این سایت متعلق به سایت{" "}
        <span className="text-main-orange">ران اکسپرس</span> می باشد.
      </p>
      {/* موبایل */}
      <p className="block p-4 text-xs font-semibold text-text-color dark:text-white xl:hidden">
        تمامی حقوق این سایت متعلق به سایت
        <span className="text-main-orange"> ران اکسپرس </span> می باشد.
      </p>
      {/* شبکه های اجتماعی */}
      <ul className="hidden items-center bg-field3 text-text-color dark:text-white xl:flex xl:gap-6">
        <li className="rounded-[7px] bg-field6 p-[10px] dark:bg-[#404248]">
          <WhatsApp width={20} height={20} stroke="currentColor" />
        </li>
        <li className="rounded-[7px] bg-field6 p-[10px] dark:bg-[#404248]">
          <Telegram width={20} height={20} stroke="currentColor" />
        </li>
        <li className="rounded-[7px] bg-field6 p-[10px] dark:bg-[#404248]">
          <Instagram width={20} height={20} stroke="currentColor" />
        </li>
        <li className="rounded-[7px] bg-field6 p-[10px] dark:bg-[#404248]">
          <FaceBook width={20} height={20} stroke="currentColor" />
        </li>
      </ul>
    </div>
  );
}

export default FifthSection;
