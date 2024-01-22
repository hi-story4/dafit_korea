"use client";
import React, { useContext } from "react";
import { GlobalContext } from "./Popup";
export default function DownloadButton() {
  const { setPopup } = useContext(GlobalContext);

  return (
    <>
      <button
        onClick={() => {
          setPopup(true);
        }}
      >
        앱 다운로드
      </button>
    </>
  );
}
