import { ImageResponse } from "next/og";

export const alt = "이준엽 프론트엔드 개발자 포트폴리오";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9f6",
          color: "#102438",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#2563eb", display: "flex", fontSize: 30, fontWeight: 700 }}>
          FRONTEND DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 800, letterSpacing: "-0.06em" }}>
            Junyeop Lee
          </div>
          <div style={{ color: "#5a6b7c", display: "flex", fontSize: 34 }}>
            User experience and product-focused portfolio
          </div>
        </div>
        <div style={{ borderTop: "2px solid #dbe5ed", display: "flex", justifyContent: "space-between", paddingTop: "24px" }}>
          <span style={{ display: "flex", fontSize: 24 }}>jyeop920@gmail.com</span>
          <span style={{ color: "#2563eb", display: "flex", fontSize: 24 }}>github.com/dv-yeop920</span>
        </div>
      </div>
    ),
    size,
  );
}
