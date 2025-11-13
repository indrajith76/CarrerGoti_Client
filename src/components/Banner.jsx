import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full overflow-hidden">
        <img
          src="https://images.ctfassets.net/gogvzi849aaj/1KPO3rlI6jGaq1jFeWMGZr/c33f946ea0f8367188528a4f9d0f239c/CareerService_Hero.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.ctfassets.net/gogvzi849aaj/9Nn3FEMCdO5ac6oCsnots/7370e7746ddd16f883f3639a0c376f55/students.png"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://media.istockphoto.com/id/1162354887/photo/businesspeople-handshaking-after-deal-or-interview.jpg?s=612x612&w=0&k=20&c=G4dic7x9xgmnDLB5HwZ-R9ZQOfbQ_hqyIyaHtl23K7M="
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
