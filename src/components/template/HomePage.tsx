import React from "react";
import StorySection from "../module/story/StorySection";
import SendProduct from "../module/SendProduct";
import UserDetail from "../module/userDetailSection/UserDetail";

function HomePage() {
  return (
    <div className="h-full bg-field6 dark:bg-darkMoodBg">
      <StorySection />
      <SendProduct />
      <UserDetail />
    </div>
  );
}

export default HomePage;
