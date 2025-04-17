import React from "react";
import './AfterLoader.css'
export default function AfterLoader() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#203a43] flex justify-center items-center loader-body">
      <div className="content">
        <div className="up">
          <span className="up-0">C</span>
          <span className="up-2-8">U</span>
          <span className="up-3-7">R</span>
          <span className="up-4-6">V</span>
          <span className="up-5">A</span>
          <span className="up-4-6">T</span>
          <span className="up-3-7">U</span>
          <span className="up-2-8">R</span>
          <span className="up-0">E</span>
        </div>
        <div className="down">
          <span className="down-0">C</span>
          <span className="down-2-8">U</span>
          <span className="down-3-7">R</span>
          <span className="down-4-6">V</span>
          <span className="down-5">A</span>
          <span className="down-4-6">T</span>
          <span className="down-3-7">U</span>
          <span className="down-2-8">R</span>
          <span className="down-0">E</span>
        </div>
      </div>
    </div>
  );
}
