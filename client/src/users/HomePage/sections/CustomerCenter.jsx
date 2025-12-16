import { useState } from "react";

const FAQ = [
  { q: "배송은 얼마나 걸려요?", a: "지점/거리/기사 배정 상황에 따라 달라요. 배송 현황에서 상태를 확인해줘." },
  { q: "보관 불가 물품이 있나요?", a: "현금/귀중품, 위험물, 파손 위험 물품, 음식물(부패 가능)은 불가예요." },
  { q: "분실/파손은 어떻게 처리돼요?", a: "정책 기준에 따라 접수 후 처리돼요. 필요 시 Email Callback으로 접수 가능." },
];

export default function CustomerCenter() {
  const [open, setOpen] = useState(0);

  const onEmail = () => {
    window.location.href = "mailto:support@brand.com?subject=문의드립니다";
  };

  const onCallback = (e) => {
    e.preventDefault();
    alert("Email Callback 접수 완료(더미)");
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="customer-center">
      <div className="section__head">
        <div>
          <h2 className="section__title">고객센터</h2>
          <p className="section__desc">FAQ → 챗봇 → Email 문의 순으로 안내해요.</p>
        </div>

        <div className="section__actions">
          <button className="btn btn--primary" type="button" onClick={onEmail}>
            Email 문의하기
          </button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>자주 묻는 질문 (FAQ)</h3>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            {FAQ.map((x, idx) => (
              <div key={idx} style={faqItem}>
                <button
                  type="button"
                  onClick={() => setOpen(idx === open ? -1 : idx)}
                  style={faqBtn}
                >
                  {x.q}
                </button>

                {open === idx && (
                  <div style={faqBody}>
                    {x.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={infoBox}>
            <div style={{ fontWeight: 900 }}>운영 시간</div>
            <div style={{ marginTop: 6, color: "#6b7280", fontSize: 13 }}>09:00 – 18:00 (KST)</div>
            <div style={{ marginTop: 6, color: "#6b7280", fontSize: 13 }}>
              운영 시간 외에도 Email 문의를 남겨줘.
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>챗봇 상담</h3>
          <p style={{ margin: "8px 0 0", color: "#6b7280", fontSize: 13, lineHeight: 1.6 }}>
            FAQ 기반 자동응답 + 선택형 질문 제공. 해결 실패 시 Email Callback으로 전환.
          </p>

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            <button className="btn btn--primary" type="button" onClick={() => alert("챗봇 이동(더미)")}>
              챗봇 시작하기
            </button>
            <button className="btn" type="button" onClick={onEmail}>
              Email 문의로 전환
            </button>
          </div>

          <div style={{ marginTop: 16, borderTop: "1px solid rgba(2,6,23,0.06)", paddingTop: 14 }}>
            <h4 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.01em" }}>Email Callback</h4>
            <p style={{ margin: "8px 0 10px", color: "#6b7280", fontSize: 13, lineHeight: 1.6 }}>
              상담 불가 상황에서 이메일을 남기면 다음 영업일 연락 안내를 제공해요.
            </p>

            <form onSubmit={onCallback} style={{ display: "grid", gap: 10 }}>
              <label>
                <div className="field__label">이메일(필수)</div>
                <input className="field__input" type="email" name="email" required placeholder="name@email.com" />
              </label>

              <label>
                <div className="field__label">문의 요약(선택)</div>
                <input className="field__input" name="summary" placeholder="예: 배송 완료 사진이 안 보여요" />
              </label>

              <button className="btn btn--primary" type="submit" style={{ height: 44, borderRadius: 12 }}>
                접수하기
              </button>

              <div style={{ fontSize: 12, color: "#6b7280" }}>
                접수 완료: “문의가 접수되었습니다. 곧 연락드리겠습니다.”
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqItem = {
  border: "1px solid rgba(15, 23, 42, 0.12)",
  borderRadius: 14,
  overflow: "hidden",
};

const faqBtn = {
  width: "100%",
  textAlign: "left",
  padding: 12,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 900,
  letterSpacing: "-0.01em",
};

const faqBody = {
  padding: "0 12px 12px",
  color: "#6b7280",
  fontSize: 13,
  lineHeight: 1.6,
};

const infoBox = {
  marginTop: 14,
  padding: 12,
  borderRadius: 14,
  background: "rgba(2,6,23,0.04)",
};
