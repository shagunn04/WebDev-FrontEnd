import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import BlogCard from "./BlogCard";
import blogsgif from "./images/Blogs-gif.gif";
import "./css/YourBlog.css"
function YourBlog() {
  const { blogs } = useContext(Context);
  const BlogCardList = blogs.map((blog) => {
    return (
      <BlogCard 
        Title={blog.Title}
        tag={blog.tag} 
        Date={blog.Date}
        Time={blog.Time}
        Content={blog.Content}
        Views={blog.Views}
      />
    );
  });

  return (
    <div className="YourBlogSection">
     
      {BlogCardList.length === 0 ? (<div className="Empty-Blogs">
        <h1>No Blogs Yet! Pusheen is playing with empty Blogs Box...</h1>
        <img src={blogsgif} alt="Loading..." />
        </div>
      ) : (
        <div className="Filled-Blogs">
        {BlogCardList}
        </div>
      )}
    </div>
  );
}

export default YourBlog;
