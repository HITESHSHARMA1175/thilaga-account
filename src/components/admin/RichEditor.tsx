import { useEffect, useRef, useState, useCallback } from "react";
import {
  Bold,
  Italic,
  List,
  Heading1,
  Heading2,
  Heading3,
  ImagePlus,
  Video,
  Minus,
  Quote,
  Link2,
  AlignLeft,
  Undo,
  Redo,
} from "lucide-react";

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

// Extract YouTube video ID from various URL formats
function parseYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/\s]{11})/,
    /youtube\.com\/shorts\/([^&?/\s]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// Parse Vimeo ID
function parseVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

type ToolbarButton = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  action: () => void;
  divider?: boolean;
};

export function RichEditor({
  value,
  onChange,
  placeholder = "Write your content here…",
  minHeight = 400,
}: RichEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");

  // Set initial content
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, []); // only on mount

  const emit = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const exec = useCallback((cmd: string, val?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
    emit();
  }, [emit]);

  const insertHTML = useCallback((html: string) => {
    editorRef.current?.focus();
    document.execCommand("insertHTML", false, html);
    emit();
  }, [emit]);

  // Image upload → base64, inserted directly into DOM (execCommand loses focus via file picker)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB. Larger images may also exceed browser storage limits — try compressing first.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      if (!editorRef.current) return;

      // Build figure element directly — doesn't require focus
      const figure = document.createElement("figure");
      figure.className = "blog-figure";

      const img = document.createElement("img");
      img.src = src;
      img.alt = file.name;
      img.className = "blog-img";

      const caption = document.createElement("figcaption");
      caption.className = "blog-caption";
      caption.contentEditable = "true";
      caption.textContent = "Add a caption…";

      const spacer = document.createElement("p");
      spacer.innerHTML = "<br>";

      figure.appendChild(img);
      figure.appendChild(caption);

      editorRef.current.appendChild(figure);
      editorRef.current.appendChild(spacer);

      // Move caret to after the figure
      const sel = window.getSelection();
      const range = document.createRange();
      range.setStartAfter(spacer);
      range.collapse(true);
      sel?.removeAllRanges();
      sel?.addRange(range);

      emit();
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  // Video embed
  const handleVideoInsert = () => {
    const url = videoUrl.trim();
    if (!url) return;

    const ytId = parseYouTubeId(url);
    const vimeoId = parseVimeoId(url);

    let embedHtml = "";
    if (ytId) {
      embedHtml = `<figure class="blog-figure">
        <div class="blog-video-wrap">
          <iframe src="https://www.youtube.com/embed/${ytId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="blog-iframe"></iframe>
        </div>
        <figcaption class="blog-caption" contenteditable="true">Add a caption…</figcaption>
      </figure><p><br></p>`;
    } else if (vimeoId) {
      embedHtml = `<figure class="blog-figure">
        <div class="blog-video-wrap">
          <iframe src="https://player.vimeo.com/video/${vimeoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="blog-iframe"></iframe>
        </div>
        <figcaption class="blog-caption" contenteditable="true">Add a caption…</figcaption>
      </figure><p><br></p>`;
    } else {
      // Try as direct video URL
      embedHtml = `<figure class="blog-figure">
        <video controls class="blog-img" style="max-width:100%;border-radius:8px;">
          <source src="${url}" />
          Your browser does not support the video tag.
        </video>
        <figcaption class="blog-caption" contenteditable="true">Add a caption…</figcaption>
      </figure><p><br></p>`;
    }

    insertHTML(embedHtml);
    setVideoUrl("");
    setVideoModalOpen(false);
  };

  // Link insert
  const handleLinkInsert = () => {
    const url = linkUrl.trim();
    if (!url) return;
    const text = linkText.trim() || url;
    insertHTML(`<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`);
    setLinkUrl("");
    setLinkText("");
    setLinkModalOpen(false);
  };

  const groups: { label: string; tools: (ToolbarButton | "divider")[] }[] = [
    {
      label: "History",
      tools: [
        { icon: Undo, title: "Undo (Ctrl+Z)", action: () => exec("undo") },
        { icon: Redo, title: "Redo (Ctrl+Y)", action: () => exec("redo") },
      ],
    },
    {
      label: "Format",
      tools: [
        { icon: Heading1, title: "Heading 1", action: () => exec("formatBlock", "<h1>") },
        { icon: Heading2, title: "Heading 2", action: () => exec("formatBlock", "<h2>") },
        { icon: Heading3, title: "Heading 3", action: () => exec("formatBlock", "<h3>") },
        { icon: AlignLeft, title: "Paragraph", action: () => exec("formatBlock", "<p>") },
      ],
    },
    {
      label: "Style",
      tools: [
        { icon: Bold, title: "Bold (Ctrl+B)", action: () => exec("bold") },
        { icon: Italic, title: "Italic (Ctrl+I)", action: () => exec("italic") },
        { icon: Quote, title: "Blockquote", action: () => exec("formatBlock", "<blockquote>") },
        { icon: List, title: "Bullet List", action: () => exec("insertUnorderedList") },
        { icon: Minus, title: "Divider Line", action: () => insertHTML("<hr/><p><br></p>") },
      ],
    },
    {
      label: "Insert",
      tools: [
        { icon: Link2, title: "Insert Link", action: () => setLinkModalOpen(true) },
        { icon: ImagePlus, title: "Upload Image", action: () => fileInputRef.current?.click() },
        { icon: Video, title: "Embed Video (YouTube / Vimeo)", action: () => setVideoModalOpen(true) },
      ],
    },
  ];

  return (
    <div className="rich-editor-wrap overflow-hidden rounded-xl border border-border bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 border-b border-border bg-[#F8F7F4] px-4 py-2.5">
        {groups.map((group, gi) => (
          <div key={group.label} className="flex items-center gap-1">
            {gi > 0 && <div className="mr-2 h-5 w-px bg-border" />}
            <div className="flex items-center gap-0.5 rounded-lg bg-white/70 border border-border/50 p-0.5 shadow-sm">
              {group.tools.map((t) => (
                t === "divider" ? null : (
                  <button
                    key={t.title}
                    type="button"
                    title={t.title}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      t.action();
                    }}
                    className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <t.icon className="h-3.5 w-3.5" />
                  </button>
                )
              ))}
            </div>
            <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/40 ml-1 xl:block">
              {group.label}
            </span>
          </div>
        ))}
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={emit}
        onBlur={emit}
        data-placeholder={placeholder}
        className="rich-editor-body min-h-[var(--re-min-h)] cursor-text px-8 py-6 text-sm leading-relaxed text-foreground outline-none focus:outline-none"
        style={{ "--re-min-h": `${minHeight}px` } as React.CSSProperties}
      />

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />

      {/* Video modal */}
      {videoModalOpen && (
        <Modal title="Embed Video" onClose={() => setVideoModalOpen(false)}>
          <p className="mb-4 text-sm text-muted-foreground">
            Paste a YouTube, Vimeo, or direct video URL.
          </p>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleVideoInsert()}
            className="input-field"
            placeholder="https://www.youtube.com/watch?v=..."
            autoFocus
          />
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleVideoInsert}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Embed
            </button>
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {/* Link modal */}
      {linkModalOpen && (
        <Modal title="Insert Link" onClose={() => setLinkModalOpen(false)}>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-foreground">Link text</label>
              <input
                type="text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                className="input-field mt-1"
                placeholder="e.g. Learn more"
                autoFocus
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground">URL</label>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLinkInsert()}
                className="input-field mt-1"
                placeholder="https://…"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleLinkInsert}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Insert
            </button>
            <button
              type="button"
              onClick={() => setLinkModalOpen(false)}
              className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-xl">
        <h3 className="font-serif text-lg font-semibold text-primary mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}
