import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header01.css";

/**
 * HEADER01 (COM)
 * - LOGO 클릭: HOME 이동
 * - LOGIN 클릭: 로그인 페이지 이동
 * - MyPage 클릭: 내 정보 화면 이동
 * - NAVIGATE: 서비스 소개/지점안내/배송현황/고객센터/제휴문의 이동
 */

const NAV_ITEMS = [
  { id: "service-intro", label: "서비스 소개" },
  { id: "branches", label: "지점안내" },
  { id: "delivery-status", label: "배송현황" },
  { id: "customer-center", label: "고객센터" },
  { id: "partnership", label: "제휴문의" },
];

export default function Header01() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const isHome = useMemo(
    () => location.pathname === "/" || location.pathname === "/home",
    [location.pathname]
  );

  // 라우트 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // ✅ 바깥 클릭 시 닫기 (캐스케이딩/연속 토글 방지)
  useEffect(() => {
    if (!isOpen) return;

    const onDocClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpen]);

  const toggleMenu = (e) => {
    // ✅ 이벤트 버블링으로 dropdown 클릭이 다시 토글되는 것 방지
    e?.stopPropagation?.();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  const goSection = (sectionId) => {
    // 홈이 아니면 홈으로 이동하면서 hash 전달 → Home에서 스크롤
    if (!isHome) {
      navigate(`/#${sectionId}`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  const onLogoClick = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <header className="com-header" ref={headerRef}>
      <div className="com-header__inner">
        {/* Left: Logo */}
        <button
          type="button"
          className="com-header__logo"
          onClick={onLogoClick}
          aria-label="Go Home"
        >
          <span className="com-header__brand">BRAND</span>
        </button>

        {/* Center: Nav (Desktop) */}
        <nav className="com-header__nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="com-header__link"
              onClick={() => goSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="com-header__actions">
          <Link to="/login" className="com-header__actionBtn" onClick={closeMenu}>
            LOGIN
          </Link>
          <Link
            to="/mypage"
            className="com-header__actionBtn com-header__actionBtn--solid"
            onClick={closeMenu}
          >
            MyPage
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="com-header__hamburger"
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="com-header-mobile"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="com-header-mobile"
          className="com-header__mobile"
          onClick={(e) => e.stopPropagation()} // ✅ 내부 클릭이 바깥 클릭으로 전파되지 않게
        >
          <div className="com-header__mobileInner">
            <div className="com-header__mobileTitle">Explore</div>

            <div className="com-header__mobileList">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="com-header__mobileItem"
                  onClick={() => goSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="com-header__mobileActions">
              <Link to="/login" className="com-header__mobileBtn" onClick={closeMenu}>
                LOGIN
              </Link>
              <Link
                to="/mypage"
                className="com-header__mobileBtn com-header__mobileBtn--solid"
                onClick={closeMenu}
              >
                MyPage
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
