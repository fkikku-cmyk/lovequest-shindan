"use client";

import { forwardRef } from "react";
import type { DiagnosisResult } from "@/data/results";

type ResultImageCardProps = {
  result: DiagnosisResult;
};

const ResultImageCard = forwardRef<HTMLDivElement, ResultImageCardProps>(
  function ResultImageCard({ result }, ref) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          position: "relative",
          width: 1080,
          height: 1350,
          overflow: "hidden",
          background: "linear-gradient(160deg, #fffaf7 0%, #fff1f6 48%, #f2efff 100%)",
          color: "#2d2d35",
          fontFamily:
            '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif'
        }}
      >
        <Decorations />
        <div
          style={{
            position: "absolute",
            inset: 58,
            borderRadius: 64,
            background: "rgba(255,255,255,0.93)",
            border: "6px solid #ffd166",
            boxShadow: "0 34px 86px rgba(45, 45, 53, 0.14)"
          }}
        />

        <div style={{ position: "relative", zIndex: 1, padding: "82px 82px 70px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img
              src="/lovequest-logo.jpg"
              alt=""
              style={{
                width: 230,
                height: 130,
                objectFit: "cover",
                borderRadius: 24,
                border: "3px solid #ffe1eb"
              }}
            />
          </div>

          <div
            style={{
              marginTop: 44,
              borderRadius: 58,
              padding: 20,
              background: "linear-gradient(135deg, #ff6b9a, #7c5cff)",
              boxShadow: "0 24px 54px rgba(124, 92, 255, 0.18)"
            }}
          >
            <div
              style={{
                height: 620,
                borderRadius: 42,
                background: "#fffaf7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              <img
                src={result.image}
                alt=""
                style={{
                  width: "92%",
                  height: "92%",
                  objectFit: "contain",
                  imageRendering: "pixelated"
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: 42, textAlign: "center" }}>
            <h1
              style={{
                margin: 0,
                fontSize: 76,
                lineHeight: 1.12,
                fontWeight: 900,
                letterSpacing: 0
              }}
            >
              {result.name}
            </h1>
            <p
              style={{
                margin: "28px auto 0",
                maxWidth: 820,
                color: "#565668",
                fontSize: 36,
                lineHeight: 1.55,
                fontWeight: 800
              }}
            >
              {result.catch}
            </p>
          </div>

          <div
            style={{
              marginTop: 52,
              borderTop: "4px solid #ffe1eb",
              paddingTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#777789",
              fontSize: 28,
              fontWeight: 800
            }}
          >
            <span>#ラブクエ診断</span>
            <span>ラブクエ診断</span>
          </div>
        </div>
      </div>
    );
  }
);

export default ResultImageCard;

function Decorations() {
  return (
    <>
      {([
        [34, 56, "#ff6b9a"],
        [184, 34, "#7c5cff"],
        [988, 96, "#ff6b9a"],
        [930, 1180, "#7c5cff"],
        [120, 1234, "#ff6b9a"],
        [1012, 1290, "#ff6b9a"]
      ] satisfies Array<[number, number, string]>).map(([left, top, color], index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left,
            top,
            width: 10,
            height: 10,
            borderRadius: 999,
            background: color
          }}
        />
      ))}
      <span
        style={{
          position: "absolute",
          right: 120,
          top: 238,
          color: "#ffd166",
          fontSize: 72,
          fontWeight: 900
        }}
      >
        ✦
      </span>
      <span
        style={{
          position: "absolute",
          left: 120,
          top: 318,
          color: "#ff8db3",
          fontSize: 54,
          fontWeight: 900
        }}
      >
        ✧
      </span>
    </>
  );
}
