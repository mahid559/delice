import fs from "fs";
import path from "path";

export default function Home() {
  const htmlPath = path.join(process.cwd(), "src/data/delice_body.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf-8");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      suppressHydrationWarning
    />
  );
}
