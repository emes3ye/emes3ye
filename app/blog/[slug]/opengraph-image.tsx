import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Blog post by Shafiul Islam";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "Blog";
  const tags = post?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2D5A3D",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: site name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#C8956C",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            emes3ye.com
          </span>
        </div>

        {/* Middle: post title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {tags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "14px",
                    padding: "4px 14px",
                    borderRadius: "999px",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div
            style={{
              color: "#FFFFFF",
              fontSize: title.length > 60 ? "44px" : "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#C8956C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            SI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Shafiul Islam
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
              }}
            >
              Founder · Carrot Soft
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
