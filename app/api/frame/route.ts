import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    type: "frame",
    frame: {
      image: "https://placehold.co/600x400?text=Button+Clicked+🎉",
      buttons: [
        { label: "✅ Done" }
      ],
    },
  });
}
