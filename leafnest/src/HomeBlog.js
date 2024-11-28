import React, { useContext, useRef } from "react";
import HomeBlogCard from "./HomeBlogCard";
import { Context } from "./GlobalContext/Context";
import "./css/HomeBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function HomeBlog() {
    const { blogs } = useContext(Context);
    const blogListRef = useRef(null);

    // Function to scroll up
    const scrollUp = () => {
        if (blogListRef.current) {
            blogListRef.current.scrollTop -= 3 * 200; // Scroll by 3 cards (adjust the card height if needed)
        }
    };

    // Function to scroll down
    const scrollDown = () => {
        if (blogListRef.current) {
            blogListRef.current.scrollTop += 3 * 200; // Scroll by 3 cards (adjust the card height if needed)
        }
    };

    const HomeBlogsList = blogs.map((blog) => {
        return (
            <HomeBlogCard
                key={blog.id}
                id={blog.id}
                Title={blog.Title}
                Content={blog.Content}
                tag={blog.tag}
                Date={blog.Date}
                Views={blog.Views}
            />
        );
    });
    const emptyClass = blogs.length === 0 ? "empty" : "";
    return (
        <div className="HomeBlog">
            <div className="HomeBlog-Header">
                <h1>Blogs</h1>
            </div>
            <div className="HomeBlog-Controls">
                <button className="scroll-button up" onClick={scrollUp}>
                </button>
                <button className="scroll-button down" onClick={scrollDown}>
                </button>
            </div>
            <div className={`HomeBlog-BlogsList ${emptyClass}`} ref={blogListRef}>
                {blogs.length > 0 ? HomeBlogsList : ""}
            </div>

        </div>
    );
}

export default HomeBlog;
