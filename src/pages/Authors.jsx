import { useState } from "react";
import { DummyAuthor } from "../data/data";
import { Link } from "react-router-dom";

export default function Author() {
  const [author, setAuthor] = useState(DummyAuthor);
  return (
    <section className="author">  
      {author.length > 0 ? (
        <div className='container author-container'>
          {author.map(({ id, Image, name, posts }, index) => (
            <Link to={`/posts/user/${id}`} key={index} className="author-avatar">
              <div className="author-image">
                <img src={Image} alt="" />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="error-center">None User By That Name Found</h2>
      )}
    </section>
  );
}
