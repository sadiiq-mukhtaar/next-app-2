"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Heavyload = dynamic(() => import("../components/heavyload"), {
  loading: () => <p>loading....</p>,
  ssr: false,
});
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>show</button>
      {isVisible && <Heavyload />}
    </div>
  );
}

// !true = false
// !false = true

export default HomePage;
