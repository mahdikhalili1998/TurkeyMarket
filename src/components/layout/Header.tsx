import FirstSection from "../module/Header/FirstSection";
import SecondSection from "../module/Header/SecondSection";
import ThirdSection from "../module/Header/ThirdSection";

function Header() {
  return (
    <div className="dark:bg-dark-bg space-y-4 bg-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default Header;
