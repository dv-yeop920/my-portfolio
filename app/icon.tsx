import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#2563eb",
          color: "white",
          display: "flex",
          fontSize: 30,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.12em",
          width: "100%",
        }}
      >
        JY
      </div>
    ),
    size,
  );
}
