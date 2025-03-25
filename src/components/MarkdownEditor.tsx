import {
  MDXEditor,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface MarkdownEditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
}
async function imageUploadHandler(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  const response = await fetch("/api/uploads", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  const json = (await response.json()) as { url: string };
  return json.url;
}

export function MarkdownEditor({ markdown, onChange }: MarkdownEditorProps) {
  return (
    <div className="h-full w-full">
      <MDXEditor
        markdown={markdown}
        onChange={onChange}
        contentEditableClassName="prose"
        plugins={[
          linkPlugin(),
          linkDialogPlugin(),
          markdownShortcutPlugin(),
          imagePlugin({ imageUploadHandler }),
        ]}
      />
    </div>
  );
}
