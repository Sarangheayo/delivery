import "./HomePage.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import logoMain from "../../assets/logo-main.png";

import Hero from "./sections/Hero.jsx";
import ServiceIntro from "../HomePage/sections/ServiceIntro.jsx";
import BranchGuide from "./sections/BranchGuide.jsx";
import DeliveryStatus from "./sections/DeliveryStatus.jsx";
import CustomerCenter from "./sections/CustomerCenter.jsx";
import Partnership from "./sections/Partnership.jsx";
import TopButton from "../../components/common/TopButton.jsx";
import Footer from "../../components/common/Footer01.jsx";

const NAV = [
  { id: "service-intro", label: "서비스 소개" },
  { id: "branches", label: "지점 안내" },
  { id: "delivery-status", label: "배송현황" },
  { id: "customer-center", label: "고객센터" },
  { id: "partnership", label: "제휴문의" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("service-intro");

  // (옵션) 탑버튼 위치만 쓰려고 유지
  const [isNavVisible] = useState(true);

  const navOffsetClass = useMemo(
    () => (isNavVisible ? "home--navOn" : "home--navOff"),
    [isNavVisible]
  );

  // hash 들어왔을 때 자동 스크롤
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(hash);
    }, 0);
  }, []);

  // 섹션 버튼 클릭 → a(anchor) 스크롤
  const goSection = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 우상단 👤 → 마이페이지 이동 (경로만)
  const goMyPage = () => navigate("/mypage");

  // 우상단 로그인 → 로그인 페이지(경로만)
  const goLogin = () => navigate("/login");

  return (
   <>
     <div className={`home ${navOffsetClass}`}>
      {/* ✅ 상단 바 (좌: 로고 / 우: 로그인 + 마이아이콘) */}
      <header className="home-topbar">
        <div className="home-topbar__inner">
          {/* 로고: 클릭 반응 X */}
          <div className="home-topbar__logo" aria-label="Brand Logo">
            <img src={logoMain} alt="BRAND" />
          </div>

          <div className="home-topbar__right">
            {/* 로그인: 우상단 */}
            <button type="button" className="home-topbar__login" onClick={goLogin}>
              로그인
            </button>

            {/* 마이페이지: 👤 아이콘 */}
            <button
              type="button"
              className="home-topbar__mypage"
              onClick={goMyPage}
              aria-label="Go MyPage"
              title="마이페이지"
            >
              <span>👤</span>
            </button>
          </div>
        </div>
      </header>

      {/* 메인 Hero */}
      <Hero />

      {/* ✅ 메인 네비 (버튼형 + hover tooltip + active + anchor 이동) */}
      <section className="home-nav">
        <div className="home__container home-nav__inner">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`home-nav__btn ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => goSection(item.id)}
            >
              <span className="home-nav__icon">→</span>
              <span className="home-nav__text">{item.label}</span>

              {/* hover 시 페이지명 툴팁 */}
              <span className="home-nav__tip" role="tooltip">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      <main className="home__main">
        <div className="home__container">
          {/* 섹션 id는 각 컴포넌트 안에서 최상단에 달려있어야 함 */}
          <ServiceIntro />
          <BranchGuide />
          <DeliveryStatus />
          <CustomerCenter />
          <Partnership />
        </div>
      </main>

      <TopButton bottomOffset={isNavVisible ? 18 : 18} />

      {/* footer는 너 기존 그대로 두고 싶으면 유지해도 됨 */}
    </div>

    
     < Footer/>
   </> 
  );
}
