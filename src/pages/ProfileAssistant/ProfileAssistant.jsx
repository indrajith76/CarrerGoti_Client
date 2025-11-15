import React, { useRef, useState } from "react";
import useAuth from "../../context/useAuth";
import { MdPrint } from "react-icons/md";
import ResumeTemp1 from "./ResumeTemp1";
import ResumeTemp2 from "./ResumeTemp2";
import ResumeTemp3 from "./ResumeTemp3";
import ResumeTemp4 from "./ResumeTemp4";

const ProfileAssistant = () => {
  const { user } = useAuth();
  const targetRef = useRef();
  const [templete, setTemplete] = useState(1);

  return (
    <div className="pb-10">
      <h1 className="text-center text-2xl my-5 text-primary font-bold ">
        Profile Assistant For CV Generate
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-5 w-full mb-10">
        <p>Select Templete:</p>
        <img
          onClick={() => setTemplete(1)}
          className={`w-10 border cursor-pointer rounded ${templete == 1 ? "border-3 border-primary":""}`}
          src="/src/assets/images/resume/resume1.jpg"
          alt=""
        />
        <img
          onClick={() => setTemplete(2)}
          className={`w-10 border cursor-pointer rounded ${templete == 2 ? "border-3 border-primary":""}`}
          src="/src/assets/images/resume/resume2.jpg"
          alt=""
        />
        <img
          onClick={() => setTemplete(3)}
          className={`w-10 border cursor-pointer rounded ${templete == 3 ? "border-3 border-primary":""}`}
          src="/src/assets/images/resume/resume3.jpg"
          alt=""
        />
        <img
          onClick={() => setTemplete(4)}
          className={`w-10 border cursor-pointer rounded ${templete == 4 ? "border-3 border-primary":""}`}
          src="/src/assets/images/resume/resume4.jpg"
          alt=""
        />
        <button
          className="btn btn-primary h-full"
          onClick={() => window.print()}
        >
          <MdPrint className="text-xl" /> Print Resume
        </button>
      </div>

      {(templete == 1 && <ResumeTemp1 user={user} targetRef={targetRef} />)}
      {(templete == 2 && <ResumeTemp2 user={user} targetRef={targetRef} />)}
      {(templete == 3 && <ResumeTemp3 user={user} targetRef={targetRef} />)}
      {(templete == 4 && <ResumeTemp4 user={user} targetRef={targetRef} />)}
    </div>
  );
};

export default ProfileAssistant;
