"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const Heavyload = dynamic(() => import("../app/components/heavyload"), {
  loading: function () {
    return <p>......................</p>;
  },
  ssr: false,
});

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main>
      <Image
        src="https://bit.ly/react-cover"
        alt="react+typescript"
        width={270}
        height={170}
      />

      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        show
      </button>

      {isVisible && <Heavyload />}
    </main>
  );
}
