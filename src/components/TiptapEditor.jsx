import React, { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight, common } from 'lowlight';
import { useAuth } from './AuthContext';
import 'prosemirror-view/style/prosemirror.css';

const lowlight = createLowlight(common);

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const uploadImagesToBackend = async (files, token) => {
  const urls = [];
  for (const file of files) {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${BASE_URL}/api/b1/upload`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });
    const data = await res.json();
    if (data.url) {
      urls.push(data.url);
    }
  }
  return urls;
};

const MenuBar = ({ editor, onImageUploadClick }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2 mb-2 bg-gray-50 p-2 rounded-t border-b border-gray-200 sticky top-0 z-10">
      <button type="button" onClick={onImageUploadClick} className="px-2 py-1 rounded hover:bg-cyan-100" title="Insert Image">🖼️ Image</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Bold"><b>B</b></button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Italic"><i>I</i></button>
      <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`px-2 py-1 rounded ${editor.isActive('underline') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Underline"><u>U</u></button>
      <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`px-2 py-1 rounded ${editor.isActive('strike') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Strikethrough"><s>S</s></button>
      <button type="button" onClick={() => editor.chain().focus().toggleHighlight().run()} className={`px-2 py-1 rounded ${editor.isActive('highlight') ? 'bg-yellow-300 text-black' : 'hover:bg-yellow-100'}`} title="Highlight">🖍️</button>
      <button type="button" onClick={() => {
        const url = window.prompt('Enter URL');
        if (url) editor.chain().focus().setLink({ href: url, target: '_blank' }).run();
      }} className={`px-2 py-1 rounded ${editor.isActive('link') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Link">🔗</button>
      <button type="button" onClick={() => editor.chain().focus().unsetLink().run()} className="px-2 py-1 rounded hover:bg-cyan-100" title="Remove Link">❌🔗</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Heading 1">H1</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Heading 2">H2</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`px-2 py-1 rounded ${editor.isActive('bulletList') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Bullet List">• List</button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`px-2 py-1 rounded ${editor.isActive('orderedList') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Numbered List">1. List</button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Align Left">⬅️</button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Align Center">↔️</button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={`px-2 py-1 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Align Right">➡️</button>
      <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`px-2 py-1 rounded ${editor.isActive('codeBlock') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Code Block">{'</>'}</button>
      <button type="button" onClick={() => editor.chain().focus().undo().run()} className="px-2 py-1 rounded hover:bg-cyan-100" title="Undo">⎌ Undo</button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()} className="px-2 py-1 rounded hover:bg-cyan-100" title="Redo">↻ Redo</button>
      <button type="button" onClick={() => editor.chain().focus().setParagraph().run()} className={`px-2 py-1 rounded ${editor.isActive('paragraph') ? 'bg-cyan-500 text-white' : 'hover:bg-cyan-100'}`} title="Paragraph">¶</button>
    </div>
  );
};

const TiptapEditor = ({ value = '', onChange }) => {
  const fileInputRef = useRef();
  const { adminToken } = useAuth();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        underline: false,
        link: false,
        codeBlock: false,
      }),
      Image,
      Underline,
      Link.configure({ openOnClick: true, autolink: true }),
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleImageUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const urls = await uploadImagesToBackend(files, adminToken);
    urls.forEach(url => {
      editor.chain().focus().setImage({ src: url }).run();
    });
  };

  return (
    <div className="border border-cyan-300 rounded-lg shadow-lg bg-white max-w-3xl mx-auto min-h-[400px]">
      <style>{`
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      `}</style>
      <MenuBar editor={editor} onImageUploadClick={handleImageUploadClick} />
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <EditorContent
        editor={editor}
        className="min-h-[300px] px-3 py-2 focus:outline-none prose max-w-none bg-white text-gray-800 rounded-b-lg text-base md:text-lg"
      />
    </div>
  );
};

export default TiptapEditor; 