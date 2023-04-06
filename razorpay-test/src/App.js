import React, { useEffect } from "react";

import "./App.css";

import CourseCard from "./CourseCard";

const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <section className="card-list">
      <CourseCard
        courseName="App1"
        courseThumbnail="https://media.istockphoto.com/id/1371481964/photo/having-the-time-of-her-life.jpg?s=2048x2048&w=is&k=20&c=gaVHpvmPRqK1hiEmRAa7jhHQTKbjv59aj3lhypubOfM="
        courseDetails="2 Free + 92 Paid"
        coursePrice="1"
        courseDiscountedPrice="1"
        courseDiscount="0"
      />
      <CourseCard
        courseName="App2"
        courseThumbnail="https://media.istockphoto.com/id/1371481964/photo/having-the-time-of-her-life.jpg?s=2048x2048&w=is&k=20&c=gaVHpvmPRqK1hiEmRAa7jhHQTKbjv59aj3lhypubOfM="
        courseDetails="2 Free + 63 Paid"
        coursePrice="1"
        courseDiscountedPrice="1"
        courseDiscount="0"
      />
      <CourseCard
        courseName="App3"
        courseThumbnail="https://media.istockphoto.com/id/1371481964/photo/having-the-time-of-her-life.jpg?s=2048x2048&w=is&k=20&c=gaVHpvmPRqK1hiEmRAa7jhHQTKbjv59aj3lhypubOfM="
        courseDetails="3 Free + 192 Paid"
        coursePrice="1"
        courseDiscountedPrice="1"
        courseDiscount="0"
      />
      <CourseCard
        courseName="App4"
        courseThumbnail="https://media.istockphoto.com/id/1371481964/photo/having-the-time-of-her-life.jpg?s=2048x2048&w=is&k=20&c=gaVHpvmPRqK1hiEmRAa7jhHQTKbjv59aj3lhypubOfM="
        courseDetails="2 Free + 64 Paid"
        coursePrice="1"
        courseDiscountedPrice="1"
        courseDiscount="0"
      />
    </section>
  );
};

export default App;
