import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // اضافه کردن تنظیمات برای پشتیبانی از @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/, // برای فایل‌های SVG
      issuer: /\.(js|ts)x?$/, // فقط در فایل‌های جاوااسکریپت/تایپ‌اسکریپت استفاده شود
      use: ["@svgr/webpack"], // استفاده از @svgr/webpack برای تبدیل SVG به کامپوننت React
    });
    return config;
  },
};

export default nextConfig;
