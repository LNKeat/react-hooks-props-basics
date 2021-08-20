import React from "react";

function BlogContent(props) {
  const {articleText, isPublished, minutesToRead} = props
  if (!isPublished) {
    return null;
  }else {
    return (
      <div>
        <h1>{articleText}</h1>
        <p>{minutesToRead}</p>
      </div>
    );
  }
  // return <div id="blog-content">{articleText}</div>;
}

export default BlogContent;
 