import React, { useRef } from "react";
import useAuth from "../../context/useAuth";
import { MdPrint } from "react-icons/md";
import ResumeTemp1 from "./ResumeTemp1";
import ResumeTemp2 from "./ResumeTemp2";
import ResumeTemp3 from "./ResumeTemp3";
import ResumeTemp4 from "./ResumeTemp4";

const ProfileAssistant = () => {
  const { user } = useAuth();
  const targetRef = useRef();

  return (
    <div>
      <h1 className="text-center text-2xl my-5 text-primary font-bold">
        Profile Assistant For CV Generate
      </h1>
      <button className="btn btn-primary btn-sm" onClick={() => window.print()}>
        <MdPrint className="text-xl" /> Print Resume
      </button>

      {true&&<ResumeTemp1 user={user} targetRef={targetRef}/>}
      {false&&<ResumeTemp2 user={user} targetRef={targetRef}/>}
      {false&&<ResumeTemp3 user={user} targetRef={targetRef}/>}
      {false&&<ResumeTemp4 user={user} targetRef={targetRef}/>}
    </div>
  );
};

export default ProfileAssistant;
