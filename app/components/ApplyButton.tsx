import React from "react";

const ApplyButton = () => {
  return (
    <div className={"h-24 flex items-center justify-center px-4 w-full"}>
      <button
        className={
          "bg-blue-600 text-white text-xl w-full h-14 flex items-center justify-center rounded-xl"
        }
      >
        상담신청하기
      </button>
    </div>
  );
};

export default ApplyButton;
