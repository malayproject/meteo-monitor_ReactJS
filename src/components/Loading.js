import React, { useRef, useEffect } from "react";

const Loading = () => {
  const loadingEl = useRef(null);

  const addDots = () => {
    if (loadingEl.current.innerHTML === "Loading...") {
      loadingEl.current.innerHTML = "Loading";
      return;
    }
    loadingEl.current.innerHTML += ".";
  };

  useEffect(() => {
    const dotInterval = setInterval(addDots, 400);
    // console.dir(loadingEl.current);

    return () => {
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <div className="loading" ref={loadingEl}>
      Loading
    </div>
  );
};

export default Loading;
