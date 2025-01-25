import FirstSection from "../module/Header/FirstSection";
import ForthSection from "../module/Header/ForthSection";
import SecondSection from "../module/Header/SecondSection";
import ThirdSection from "../module/Header/ThirdSection";

function Header() {
  return (
    <div className="space-y-3 bg-white dark:bg-dark-bg xl:space-y-0">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
}

export default Header;
