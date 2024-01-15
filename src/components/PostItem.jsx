import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

export default function PostItem({ Image, authorId, category, title, des, postId }) {
  const shortTitle = title.length > 40 ? title.substr(0, 40) + "..." : title;
  const shortDes = des.length > 145 ? des.substr(0, 145) + "..." : des;

  return (
    <article className="post">
      <Link to={`/posts/${postId}`} className="post-link">
        <div className="post-image">
          <img src={Image} alt="" />
        </div>
        <div className="post-content">
          <h3>{shortTitle}</h3>
          <p>{shortDes}</p>
          <div className="post-footer">
            <PostAuthor />
            <Link to={`/posts/categories/${category}`} className="btn btn-category">
              {category}
            </Link>
          </div>
        </div>
      </Link>
    </article>
  );
}






// import { Link } from "react-router-dom"

// import PostAuthor from "./PostAuthor"

// export default function PostItem({Image, authorId, category, title, des, postId}) {

//     const shortTitle = title.length > 40 ? title.substr(0, 40) + '...' : title;
//     const shortDes = des.length > 145 ? des.substr(0, 145) + '...' : des;

//   return (
//     <article className="post">
//         <div className="post-image">
//             <img src={Image} alt="" />
//         </div>
//         <div className="post-content">
//             <Link to={`/posts/${postId}`}>
//                 <h3>{shortTitle}</h3>
//             </Link>            
//             <p>{shortDes}</p>
//             <div className="post-footer">
//                 <PostAuthor />
//                 <Link to={`/posts/categories/${category}`} className="btn btn-category" >{category}</Link>
//             </div>
//         </div>
//     </article>
//   )
// }
