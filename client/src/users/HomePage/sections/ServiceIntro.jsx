export default function ServiceIntro() {
  return (
    <section className="section" id="service-intro">
      <div className="section__head">
        <div>
          <h2 className="section__title">서비스 소개</h2>
          <p className="section__desc">
            QR/영수증 기반으로 간편 접수하고 안전하게 보관·배송하는 서비스예요.
          </p>
        </div>

        <div className="section__actions">
          <a className="btn btn--primary" href="/pricing">
            요금 안내
          </a>
          <a className="btn" href="#branches">
            지점 안내
          </a>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>
            이용 방법 (Step Flow)
          </h3>
          <ol style={{ margin: "12px 0 0", paddingLeft: 18, lineHeight: 1.7, color: "#374151" }}>
            <li>매장 도착 → 제휴 매장/보관소 방문</li>
            <li>Staff 안내에 따라 Form 작성(숙소/연락처 등)</li>
            <li>픽업/보관 진행(사진 인증 예시)</li>
            <li>호텔/목적지 연계 배송 → 완료 알림(영수증 고유번호)</li>
          </ol>

          <div style={{ marginTop: 14, padding: 12, borderRadius: 14, background: "rgba(2,6,23,0.04)" }}>
            <div style={{ fontWeight: 900 }}>신뢰 요소</div>
            <p style={{ margin: "6px 0 0", color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>
              staff/관리자 관리, 보관 위치 안내, CCTV 여부, 분실·파손 방지 정책 기반 운영.
            </p>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>
            물품 사이즈 안내
          </h3>
          <p style={{ margin: "8px 0 12px", color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>
            사이즈 및 보관 장소는 지점 상황에 따라 다를 수 있어요.
          </p>

          <div className="grid-3">
            <div style={miniStyle}>
              <div style={miniTitle}>Small</div>
              <div style={miniDesc}>80 × 75 × 200cm</div>
            </div>
            <div style={miniStyle}>
              <div style={miniTitle}>Medium</div>
              <div style={miniDesc}>100 × 85 × 220cm</div>
            </div>
            <div style={miniStyle}>
              <div style={miniTitle}>Large</div>
              <div style={miniDesc}>140 × 100 × 240cm</div>
            </div>
          </div>

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            <div style={noteStyle}>
              <div style={{ fontWeight: 900 }}>주의/제한</div>
              <div style={noteDesc}>
                현금/귀중품 · 위험물 · 파손 위험 · 음식물(부패 가능)은 보관 불가.
              </div>
            </div>

            <div style={noteStyle}>
              <div style={{ fontWeight: 900 }}>지점 제한 고지</div>
              <div style={noteDesc}>
                지점별 보관 가능 사이즈 상이 · 수량 제한 시 대기 발생 가능.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const miniStyle = {
  border: "1px solid rgba(15, 23, 42, 0.12)",
  borderRadius: 14,
  padding: 12,
  background: "#fff",
};

const miniTitle = { fontWeight: 900, letterSpacing: "-0.01em" };
const miniDesc = { marginTop: 6, color: "#6b7280", fontSize: 13 };

const noteStyle = {
  border: "1px solid rgba(15, 23, 42, 0.12)",
  borderRadius: 14,
  padding: 12,
};

const noteDesc = { marginTop: 6, color: "#6b7280", fontSize: 13, lineHeight: 1.5 };
