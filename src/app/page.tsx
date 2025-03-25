"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";

export default function Home() {
  const [markdown, setMarkdown] = useState(
    "# Hello World\n\nStart typing here..."
  );

  return (
    <main className="min-h-screen p-4">
      <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
    </main>
  );
}
