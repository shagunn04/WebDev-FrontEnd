import React, { useState, useContext } from "react";
import { Context } from "./GlobalContext/Context";
import { v4 as uuidv4 } from "uuid";  // Import uuid
import "./css/NewBlog.css";

function NewBlog() {
  const { addBlog } = useContext(Context);
  const [blog, setBlog] = useState({
    id: "", 
    Title: "",
    Content: "",
    tag: "",
    Date: "",
    Time: "",
    Views: 0,
  });
  const [isSaved, setIsSaved] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  function handleBlogChange(event) {
    const { name, value } = event.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  }

  function togglePreview() {
    setPreviewMode(!previewMode);
  }

  function applyFormat(formatType) {
    const textarea = document.getElementById("NewBlog-Content");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = blog.Content.substring(start, end);

    let formattedText = "";
    switch (formatType) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `<u>${selectedText}</u>`;
        break;
      default:
        return;
    }

    const newContent =
      blog.Content.substring(0, start) +
      formattedText +
      blog.Content.substring(end);

    setBlog({ ...blog, Content: newContent });

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + formattedText.length;
      textarea.focus();
    }, 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const current = new Date();
    const currentTime = current.toLocaleTimeString();
    const currentDate = current.toLocaleDateString();

    const newBlog = {
      ...blog,
      id: uuidv4(),  
      Date: currentDate,
      Time: currentTime,
    };

    addBlog(newBlog);

    setBlog({
      id: "",
      Title: "",
      Content: "",
      tag: "",
      Date: "",
      Time: "",
      Views: 0,
    });
    setPreviewMode(false);
    setIsSaved(true);

    setTimeout(() => setIsSaved(false), 5000);
  }

  function parseContent(content) {
    return content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/<u>(.*?)<\/u>/g, "<u>$1</u>");
  }

  return (
    <div className="NewBlog-section">
      <form onSubmit={handleSubmit}>
        {/* Blog Title */}
        <div className="NewBlog-Header">
          <label htmlFor="NewBlog-Title">Title</label>
          <input
            type="text"
            name="Title"
            id="NewBlog-Title"
            value={blog.Title}
            onChange={handleBlogChange}
          />
          {/* Tag Selection */}
          <label>
            
            <select name="tag" value={blog.tag} onChange={handleBlogChange}>
    <option value="">Select</option>
    <option value="Watering">Watering</option>
    <option value="Fertilising">Fertilising</option>
    <option value="Repotting">Repotting</option>
    <option value="Pruning">Pruning</option>
    <option value="Trimming">Trimming</option>
    <option value="PestControl">PestControl</option>
    <option value="AeratingSoil">Aerating Soil</option>
    <option value="Mulching">Mulching</option> 
            </select>
          </label>
        </div>

        {/* Content Section */}
        <label htmlFor="NewBlog-Content">Content</label>
        <div className="formatting-buttons">
          <button type="button" onClick={() => applyFormat("bold")} disabled={previewMode}>
            Bold
          </button>
          <button type="button" onClick={() => applyFormat("italic")} disabled={previewMode}>
            Italic
          </button>
          <button type="button" onClick={() => applyFormat("underline")} disabled={previewMode}>
            Underline
          </button>
          <button type="button" onClick={togglePreview}>
            {previewMode ? "Edit" : "Preview"}
          </button>
        </div>

        {/* Preview or Edit Mode */}
        {previewMode ? (
          <div
            className="preview-section"
            dangerouslySetInnerHTML={{ __html: parseContent(blog.Content) }}
          />
        ) : (
          <textarea
            name="Content"
            id="NewBlog-Content"
            value={blog.Content}
            onChange={handleBlogChange}
          />
        )}

        {/* Submit Button */}
        <button type="submit" disabled={!blog.Title || !blog.Content || !blog.tag}>
          Submit Blog
        </button>

        {isSaved && (
          <div className="Saved-Message">
            <h1>Your Blog has been added</h1>
          </div>
        )}
      </form>
    </div>
  );
}

export default NewBlog;
