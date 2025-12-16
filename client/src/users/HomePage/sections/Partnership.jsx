export default function Partnership() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (!form.get("agree")) {
      alert("개인정보 수집·이용 동의가 필요해.");
      return;
    }

    alert("제휴 문의가 정상적으로 접수되었습니다. 검토 후 연락드리겠습니다.");
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="partnership">
      <div className="section__head">
        <div>
          <h2 className="section__title">제휴 문의</h2>
          <p className="section__desc">상호/주소/연락처 필수, 검증 후 접수 시간 기록.</p>
        </div>
      </div>

      <div className="grid-2">
        <form className="card" style={{ padding: 18 }} onSubmit={onSubmit}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>제휴 문의 폼</h3>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <label>
              <div className="field__label">상호명 (필수)</div>
              <input className="field__input" name="storeName" required placeholder="사업자명 또는 매장명" />
            </label>

            <label>
              <div className="field__label">주소 (필수)</div>
              <input className="field__input" name="address" required placeholder="도로명 주소" />
            </label>

            <div className="grid-2" style={{ gap: 10 }}>
              <label>
                <div className="field__label">전화번호 (필수)</div>
                <input
                  className="field__input"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  pattern="^[0-9\\-+() ]{7,20}$"
                />
              </label>
              <label>
                <div className="field__label">이메일 (필수)</div>
                <input className="field__input" name="email" type="email" required placeholder="name@email.com" />
              </label>
            </div>

            <label>
              <div className="field__label">제휴 목적 / 문의 내용 (선택)</div>
              <textarea
                name="message"
                placeholder="제휴를 원하는 이유 및 추가 문의 사항"
                style={{
                  width: "100%",
                  minHeight: 120,
                  borderRadius: 12,
                  border: "1px solid rgba(15, 23, 42, 0.12)",
                  padding: 12,
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </label>

            <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input type="checkbox" name="agree" />
              <span style={{ fontSize: 13, color: "#111827", opacity: 0.85 }}>
                개인정보 수집·이용에 동의합니다. (필수)
              </span>
            </label>

            <button className="btn btn--primary" type="submit" style={{ height: 44, borderRadius: 12 }}>
              제휴 문의 제출
            </button>
          </div>
        </form>

        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>제휴 안내</h3>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <div style={note}>
              <div style={noteT}>접수 후 프로세스</div>
              <div style={noteD}>접수됨 → 검토 중 → 연락 완료/보류(추후 Admin 확장)</div>
            </div>
            <div style={note}>
              <div style={noteT}>준비 정보</div>
              <div style={noteD}>상호/주소/연락처는 필수로 제출되어야 해요.</div>
            </div>
            <div style={note}>
              <div style={noteT}>개인정보 동의</div>
              <div style={noteD}>동의 체크가 없으면 제출이 불가해요.</div>
            </div>
          </div>

          <div style={{ marginTop: 14, padding: 12, borderRadius: 14, background: "rgba(2,6,23,0.04)" }}>
            <div style={{ fontWeight: 900 }}>문의 접수 메시지</div>
            <div style={{ marginTop: 6, color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>
              “제휴 문의가 정상적으로 접수되었습니다. 검토 후 연락드리겠습니다.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const note = {
  padding: 12,
  border: "1px solid rgba(15, 23, 42, 0.12)",
  borderRadius: 14,
};
const noteT = { fontWeight: 900, letterSpacing: "-0.01em" };
const noteD = { marginTop: 6, color: "#6b7280", fontSize: 13, lineHeight: 1.5 };
