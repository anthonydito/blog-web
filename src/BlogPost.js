import React from "react";

function BlogPost(props) {

    const createdAtFormatted = props.createdAt.toLocaleString();

    return (
        <div>
            <p>{props.text}</p>
            <p>{createdAtFormatted}</p>
        </div>
    );
}

export default BlogPost;
