import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "llms.txt");
    const content = fs.readFileSync(filePath, "utf8");
    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch {
    return new Response("# Qalvin UI\n\n> Modern accessible components and creative UI for React 19.", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
