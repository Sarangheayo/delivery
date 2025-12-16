import { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton({ bottomOffset = 18 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      type="button"
      className="topBtn"
      style={{ bottom: bottomOffset }}
      onClick={goTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
