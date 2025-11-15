import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      <div
        id="slide1"
        className="carousel-item relative w-full overflow-hidden"
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#17175271] flex flex-col items-center justify-center">
          <h1 className="text-center text-white text-2xl md:text-6xl kaushan-script">
            Bridge Skills To Bright Careers
          </h1>
          <p className="w-1/2 text-white text-sm text-center mt-4">
            Helps learners turn their skills into promising, employable, and
            sustainable career pathways. Translates potential into employment by
            linking personal development with relevant job opportunities.
          </p>
          <Link to={"/jobs"}>
            <button className="btn mt-5">Visit For Jobs</button>
          </Link>
        </div>
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
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#17175271] flex flex-col items-center justify-center">
          <h1 className="text-center text-white text-2xl md:text-6xl kaushan-script">
            Equal Opportunity For Every Youth
          </h1>
          <p className="w-1/2 text-white text-sm text-center mt-4">
            Creates equal access to quality jobs and career growth for all young people. Provides guidance to the unemployed youth in developing practical skills and finding decent job opportunities.
          </p>
          <Link to={"/jobs"}>
            <button className="btn mt-5">Visit For Jobs</button>
          </Link>
        </div>
        <img
          src="https://img.freepik.com/free-photo/smiling-diverse-businesswomen-shake-hands-group-meeting-deal-concept_1163-4686.jpg?t=st=1763062528~exp=1763066128~hmac=a79414abf1c04aef9babe543a9f8133b42e04cb124b5715b221ea4c783388398&w=1060"
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
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#17175271] flex flex-col items-center justify-center">
          <h1 className="text-center text-white text-2xl md:text-6xl kaushan-script">
            Empower Youth Through Better Skills
          </h1>
          <p className="w-1/2 text-white text-sm text-center mt-4">
            Connects budding talents with actual job opportunities matching their potential. Transforms potential into employment by connecting personal development to relevant job opportunities.
          </p>
          <Link to={"/jobs"}>
            <button className="btn mt-5">Visit For Jobs</button>
          </Link>
        </div>
        <img
          src="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?semt=ais_hybrid&w=740&q=80"
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
