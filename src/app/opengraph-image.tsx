import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Regulatory Counsel — FCA & Global Fintech Licensing Experts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#1B2B5E",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Regulatory Counsel
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          FCA Licensing &bull; Compliance &bull; Financial Crime &bull; Regulatory Reporting
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: "#64748b",
          }}
        >
          www.regulatorycounsel.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
