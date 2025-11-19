// Loader.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const [percent, setPercent] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 1; // simulate progress

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        // Animate last bit smoothly
        gsap.to(numberRef.current, { innerText: 100, duration: 0.5, roundProps: "innerText" });

        // Call callback to hide loader
        setTimeout(() => onFinish(), 500);
      }

      setPercent(current);
      gsap.to(numberRef.current, { innerText: current, duration: 0.3, roundProps: "innerText", ease: "power3.out" });

    }, 50);

  }, [onFinish]);

  return (
    <div style={{
    //   position: "fixed",
    //   top: 0, left: 0,
      width: "100%",
      height: "100%",
      background: "#fff",
      padding: "2em"
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   zIndex: 9999
    }}>
      <h2 className="font-bigilla text-[8vw]" ref={numberRef}>{percent}</h2>
      {/* <div style={{ width: "300px", height: "10px", background: "#eee", borderRadius: "5px", overflow: "hidden" }}>
        <div ref={progressRef} style={{ width: "0%", height: "10px", background: "blue" }}></div>
      </div> */}
    </div>
  );
}
