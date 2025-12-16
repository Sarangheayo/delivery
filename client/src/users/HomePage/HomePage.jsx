import "./HomePage.css";
import { useEffect } from "react";
import Hero from "./sections/Hero.jsx";
import ServiceIntro from "./sections/ServiceIntro.jsx";
import BranchGuide from "./sections/BranchGuide.jsx";
import DeliveryStatus from "./sections/DeliveryStatus.jsx";
import CustomerCenter from "./sections/CustomerCenter.jsx";
import Partnership from "./sections/Partnership.jsx";

export default function HomePage() {
  
    useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);


  return (
    <div className="home">
      <Hero />

      <main className="home__main">
        <div className="home__container">
          <ServiceIntro />
          <BranchGuide />
          <DeliveryStatus />
          <CustomerCenter />
          <Partnership />
        </div>

        
      </main>

      <footer className="home-footer">
        <div className="home__container home-footer__inner">
          <div className="home-footer__brand">
            <div className="home-footer__logo">BRAND</div>
            <p className="home-footer__slogan">Fast, Safe, Beyond Delivery</p>
          </div>

          <div className="home-footer__links">
            <a href="#policy">개인정보처리방침</a>
            <a href="#terms">이용약관</a>
            <a href="#location-terms">위치기반서비스 약관</a>
          </div>

          <div className="home-footer__meta">
            <p>회사명: 200 OK Co., Ltd.</p>
            <p>사업자 정보: 000-00-00000</p>
            <p>주소: Seoul, KR</p>
            <p className="home-footer__muted">© {new Date().getFullYear()} BRAND</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
