import "./Hero.css";
import heroImg from "../../../assets/hero-main.png"; // assets/hero-main.png로 준비

export default function Hero() {
  const onQuickTrack = (e) => {
    e.preventDefault();
    alert("배송 조회: 더미 동작(추후 API 연결)");
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          {/* Left (Uber-style) */}
          <div className="hero__left">
            <div className="hero__kicker">
              <span className="dot" />
              <span>Seoul, KR · Partner Delivery</span>
            </div>

            <h1 className="hero__title">
              언제나 자유롭게
              <br />
              짐 없이 이동하는 여행
            </h1>

            <p className="hero__desc">
              제휴 매장에 맡기고 호텔/목적지까지 안전하게 배송해요.
              <br />
              배송코드로 현황도 바로 확인 가능.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary" href="#service-intro">
                서비스 소개
              </a>
              <a className="btn btn--ghost" href="#delivery-status">
                배송 현황
              </a>
              <a className="btn" href="/login">
                로그인
              </a>
            </div>

            {/* Uber-like form */}
            <form className="hero__form card" onSubmit={onQuickTrack}>
              <div className="hero__formHead">
                <div>
                  <div className="hero__formTitle">배송 현황 빠른 조회</div>
                  <div className="hero__formSub">배송코드/이메일 입력 → 결과 조회</div>
                </div>
                <a className="hero__formLink" href="#delivery-status">
                  자세히 →
                </a>
              </div>

              <div className="hero__inputs">
                <label>
                  <span className="field__label">배송 코드</span>
                  <input className="field__input" type="text" placeholder="예: A1B2C3" required />
                </label>

                <label>
                  <span className="field__label">Email</span>
                  <input className="field__input" type="email" placeholder="name@email.com" required />
                </label>

                <button className="btn btn--primary hero__submit" type="submit">
                  조회하기
                </button>
              </div>

              <p className="hero__hint">
                조회 결과가 없으면 “정보가 없습니다” 알림 후 입력이 초기화돼요.
              </p>
            </form>

            {/* quick nav chips */}
            <div className="hero__chips">
              <a className="chip" href="#branches">지점 안내</a>
              <a className="chip" href="#customer-center">고객센터</a>
              <a className="chip" href="#partnership">제휴문의</a>
            </div>
          </div>

          {/* Right (Desktop only) */}
          <div className="hero__right" aria-hidden="true">
            <div className="hero__imageWrap card">
              <img className="hero__image" src={heroImg} alt="" />
            </div>

            <div className="hero__mini">
              <div className="miniCard">
                <div className="miniCard__t">안전 보관</div>
                <div className="miniCard__d">CCTV/스태프 관리 기반</div>
              </div>
              <div className="miniCard">
                <div className="miniCard__t">사진 증빙</div>
                <div className="miniCard__d">완료 시 기사 인증샷</div>
              </div>
              <div className="miniCard">
                <div className="miniCard__t">간편 프로세스</div>
                <div className="miniCard__d">영수증/코드 기반</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
