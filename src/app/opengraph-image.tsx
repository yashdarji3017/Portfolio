import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

/**
 * Open Graph card (1200×630) generated from the design system:
 * flat #0C0C0D canvas, inset hairline, mono metadata, muted lime accent.
 * No custom font fetch — system default keeps rendering robust.
 */
export const alt = `${profile.name} — ${profile.role}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0C0D",
          color: "#EDEDED",
          padding: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #262626",
            padding: "56px 64px",
          }}
        >
          {/* Top metadata row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#929292",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex", color: "#EDEDED" }}>
              {profile.name}
            </div>
            <div style={{ display: "flex", color: "#A8BC6B" }}>
              {profile.role}
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            {profile.headline}
          </div>

          {/* Bottom metadata row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#929292",
              letterSpacing: "0.08em",
            }}
          >
            <div style={{ display: "flex" }}>{profile.location}</div>
            <div style={{ display: "flex" }}>{profile.availability}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
