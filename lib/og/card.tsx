import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared 1200×630 social card: eyebrow, big title, brand footer. */
export function ogCard({ eyebrow, title, accent = "#FF5A1F" }: { eyebrow: string; title: string; accent?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          color: "#EDEAE3",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 560,
            background: accent,
            opacity: 0.35,
            filter: "blur(90px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6, color: "#8A8780" }}>
          <div style={{ width: 48, height: 3, background: accent }} />
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 64 : 80, lineHeight: 1.02, letterSpacing: -3, fontWeight: 600, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <div style={{ display: "flex", fontWeight: 600 }}>Quadcydle</div>
          <div style={{ display: "flex", color: "#8A8780" }}>quadcydle.com</div>
        </div>
      </div>
    ),
    ogSize
  );
}
