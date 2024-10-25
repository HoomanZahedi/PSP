"use client";
import React, { useState, useEffect } from "react";

function HydretionProvider({ children }: any) {
  const [isReady, setIsReady] = useState<Boolean>(false);
  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
    }
  }, [isReady]);

  return <div>{isReady ? children : null}</div>;
}

export default HydretionProvider;
