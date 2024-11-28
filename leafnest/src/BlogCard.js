import { marked } from "marked";
import "./css/BlogCard.css";
import { FiEye } from "react-icons/fi"; // Corrected the import

function BlogCard({ Title, Content, Date, Time, Views, tag }) {

  // Function to apply different styles based on the tag
  const applyStyle = () => {
    switch(tag) {
      case "Watering":
        return { backgroundColor: "#0d2ae8" }; 
      case "Fertilising":
        return { backgroundColor: "#23a9ab" };
      case "Repotting":
        return { backgroundColor: "#32cd32" }; 
      case "Pruning":
        return { backgroundColor: "#0f918f" }; 
      case "Trimming":
        return { backgroundColor: "#c53f53" }; 
      case "PestControl":
        return { backgroundColor: "#ff1493" }; 
      case "AeratingSoil":
        return { backgroundColor: "#1e90ff" }; 
      default:
        return { backgroundColor: "#ff6347" }; 
    }
  };

  // Marking down content to be rendered as HTML
  const formattedContent = marked(Content);

  return (
    <div className="BlogCard">
      <div className="BlogCard-header">
        <h1>{Title}</h1>
        <p>Added on {Date} at {Time}</p>
        <button style={applyStyle()}>{tag}</button>
      </div>
      <div className="BlogCard-Content">
        <p
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </div>
      <div className="Views">
        <button>
          <FiEye />
          <span>{Views}</span> {/* Display the number of views */}
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
