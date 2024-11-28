import React, { useContext, useState } from "react";
import { FiChevronDown, FiChevronUp, FiEye } from "react-icons/fi";
import { marked } from "marked";
import { Context } from "./GlobalContext/Context";
import "./css/HomeBlogCard.css";

function HomeBlogCard({ id, Title, Views, Content, tag, Date }) {
  const { blogs, setBlogs } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const estimateReadTime=Content.length/200;
  console.log(Title," ",Content.length)
  function toggleIsOpen() {
    if (!isOpen) {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === id
          ? { ...blog, Views: blog.Views + 1 }
          : blog
      );
      setBlogs(updatedBlogs);
    }
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={`HomeBlogCard ${isOpen ? "open" : ""}`} onClick={toggleIsOpen}>
      <div className="HomeBlogCard-header">
        <div className="HomeBlogCard-top">
          <h1>{Title}</h1>
          <FiEye /> <p>{Views}</p>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        
        {/* HomeBlogCard-down is always visible now */}
        <div className="HomeBlogCard-down">
          <h1>{Date}</h1>
          <button>{tag}</button>
          <p>Estimate Read Time {estimateReadTime} mins</p>
        </div>
      </div>

      {/* The content toggles visibility based on isOpen */}
      {isOpen && (
        <div
          className="HomeBlogCard-Content"
          dangerouslySetInnerHTML={{ __html: marked(Content) }}
        />
      )}
    </div>
  );
}

export default HomeBlogCard;
