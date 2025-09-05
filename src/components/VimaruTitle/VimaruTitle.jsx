"use client";
import React, { useState } from "react";
import "./VimaruTitle.css";

const VimaruTitle = ({ delay = 0, showPreloader = false }) => {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Render fallback cho SSR
  if (!isClient) {
    return (
      <h1 className="vimaru-title vimaru-title-ssr">
        VIMARU
      </h1>
    );
  }

  return (
    <h1 className="vimaru-title">
      VIMARU
    </h1>
  );
};

export default VimaruTitle;
