import { useMemo, useState } from "react";

const DUMMY_BRANCHES = [
  { id: 1, name: "성수 파트너 스테이션", addr: "서울 성동구 …", hours: "09:00–22:00" },
  { id: 2, name: "홍대 파트너 스테이션", addr: "서울 마포구 …", hours: "10:00–21:00" },
  { id: 3, name: "명동 파트너 스테이션", addr: "서울 중구 …", hours: "09:00–20:00" },
];

export default function BranchGuide() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DUMMY_BRANCHES;
    return DUMMY_BRANCHES.filter(
      (b) => b.name.toLowerCase().includes(q) || b.addr.toLowerCase().includes(q)
    );
  }, [query]);

  const onUseLocation = () => {
    alert("위치 기반 검색(후순위): 더미 동작(추후 지도 연동)");
  };

  return (
    <section className="section" id="branches">
      <div className="section__head">
        <div>
          <h2 className="section__title">지점 안내</h2>
          <p className="section__desc">제휴 지점을 확인하고 (후순위) 위치 기반 탐색을 지원해요.</p>
        </div>

        <div className="section__actions">
          <button className="btn" type="button" onClick={onUseLocation}>
            내 주변 지점 찾기(후순위)
          </button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 18 }}>
          <label style={{ display: "block", marginBottom: 10 }}>
            <div className="field__label">지점 검색</div>
            <input
              className="field__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="지점명 또는 주소로 검색"
            />
          </label>

          <div style={{ display: "grid", gap: 10 }}>
            {filtered.map((b) => (
              <div key={b.id} style={itemStyle}>
                <div style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>{b.name}</div>
                <div style={{ marginTop: 6, color: "#6b7280", fontSize: 13 }}>{b.addr}</div>
                <div style={{ marginTop: 6, color: "#111827", fontSize: 13, opacity: 0.8 }}>
                  운영시간: {b.hours}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>지도 영역(placeholder)</h3>
          <p style={{ margin: "8px 0 0", color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>
            추후 지도 연동 시 검색 + 현위치 기준 5km 내 마커 표시로 확장 가능.
          </p>

          <div style={mapStyle}>Map Placeholder</div>
        </div>
      </div>
    </section>
  );
}

const itemStyle = {
  border: "1px solid rgba(15, 23, 42, 0.12)",
  borderRadius: 14,
  padding: 12,
};

const mapStyle = {
  marginTop: 14,
  height: 280,
  borderRadius: 16,
  border: "1px dashed rgba(15, 23, 42, 0.25)",
  background: "rgba(2,6,23,0.02)",
  display: "grid",
  placeItems: "center",
  color: "#6b7280",
  fontSize: 13,
};
