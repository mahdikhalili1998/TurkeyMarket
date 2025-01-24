import React from "react";
import StorySection from "../module/story/StorySection";
import SendProduct from "../module/SendProduct";
import UserDetail from "../module/userDetailSection/UserDetail";

function HomePage() {
  return (
    <div className="bg-field6 h-full dark:bg-dark-bg">
      <StorySection />
      <SendProduct />
      <UserDetail />
    </div>
  );
}

export default HomePage;
