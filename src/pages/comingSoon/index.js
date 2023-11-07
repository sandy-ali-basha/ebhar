import React from "react";

// components
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import videoBg from "../../assets/videos/coming-soon-bg.webm";
import videoBgAvi from "../../assets/videos/coming-soon-bg.avi";
import videoBgMov from "../../assets/videos/coming-soon-bg.mov";
import videoBgMp4 from "../../assets/videos/coming-soon-bg.mp4";
// styles
import { SailingSoon } from "./sailingSoon";

export default function ComingSoon() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <video
        autoPlay={true}
        // loop={true}
        muted={true}
        controls
        style={{ width: "100vw", height: "100vh", objectFit: "cover", position: 'fixed' }}
      >
        <source src={videoBg} type="video/webm" />
        <source src={videoBgAvi} type="video/avi" />
        <source src={videoBgMov} type="video/mov" />
        <source src={videoBgMp4} type="video/mp4" />
      </video>
      {/* <div className="absolute top-0 w-full h-full flex flex-col">
        <Header />
        <SailingSoon />
        <Footer />
      </div> */}
    </div>
  );
}
