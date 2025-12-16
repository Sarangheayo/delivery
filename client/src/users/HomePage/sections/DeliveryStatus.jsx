import { useState } from "react";

export default function DeliveryStatus() {
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const code = (form.get("code") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();

    if (!code || !email) return;

    // 더미: code === none → 알림 + 초기화
    if (code.toLowerCase() === "none") {
      alert("정보가 없습니다.");
      e.currentTarget.reset();
      setResult(null);
      return;
    }

    setResult({
      code,
      email,
      step: "DELIVERING",
      timeline: [
        { t: "접수 완료", d: "지점에서 접수되었습니다." },
        { t: "기사 배정", d: "기사 배정이 완료되었습니다." },
        { t: "배송 중", d: "현재 목적지로 이동 중입니다." },
      ],
    });
  };

  return (
    <section className="section" id="delivery-status">
      <div className="section__head">
        <div>
          <h2 className="section__title">배송 현황</h2>
          <p className="section__desc">
            배송코드/Email 입력 → DB 조회 → 결과 출력. 없으면 알림 후 초기화.
          </p>
        </div>
      </div>

      <div className="grid-2">
        <form className="card" style={{ padding: 18 }} onSubmit={onSubmit}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>배송 조회</h3>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <label>
              <div className="field__label">배송 코드</div>
              <input className="field__input" name="code" placeholder="예: A1B2C3" required />
            </label>

            <label>
              <div className="field__label">Email</div>
              <input className="field__input" name="email" type="email" placeholder="name@email.com" required />
            </label>

            <button className="btn btn--primary" type="submit" style={{ height: 44, borderRadius: 12 }}>
              조회하기
            </button>

            <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
              테스트: 배송 코드에 <b>none</b> 입력하면 “정보가 없습니다” 플로우 확인 가능
            </div>
          </div>
        </form>

        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>조회 결과</h3>

          {!result ? (
            <div style={{ marginTop: 14, color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>
              조회하면 상태/타임라인과 완료 시 사진 증빙을 보여줘.
            </div>
          ) : (
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <div style={{ fontSize: 13, color: "#6b7280" }}>배송 코드: {result.code}</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>Email: {result.email}</div>

              <div style={statusBox}>
                <div style={{ fontWeight: 900 }}>현재 상태: {result.step}</div>
                <div style={{ marginTop: 6, fontSize: 13, color: "#6b7280" }}>
                  READY → ASSIGNED → PICKED_UP → DELIVERING → DELIVERED
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>타임라인</div>
                <div style={{ display: "grid", gap: 10 }}>
                  {result.timeline.map((x, idx) => (
                    <div key={idx} style={{ borderLeft: "3px solid #111827", paddingLeft: 10 }}>
                      <div style={{ fontWeight: 800 }}>{x.t}</div>
                      <div style={{ color: "#6b7280", fontSize: 13, marginTop: 3 }}>{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>사진 증빙(완료 시)</div>
                <div style={proofBox}>Proof Photo Placeholder</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const statusBox = {
  marginTop: 6,
  padding: 12,
  borderRadius: 14,
  border: "1px solid rgba(15, 23, 42, 0.12)",
  background: "rgba(2,6,23,0.02)",
};

const proofBox = {
  height: 160,
  borderRadius: 16,
  border: "1px dashed rgba(15, 23, 42, 0.25)",
  background: "rgba(2,6,23,0.02)",
  display: "grid",
  placeItems: "center",
  color: "#6b7280",
  fontSize: 13,
};
