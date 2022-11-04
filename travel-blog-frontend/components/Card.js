import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

const Card = ({ post }) => {
  return (
    <div className="card-container">
      <h2>{post.title}</h2>
      <p>Publié le: {new Date(post.publishedAt).toDateString()}</p>
      <img
        className="main-image"
        alt={post.title + " image"}
        src={urlFor(post.mainImage)}
      />

      <hr />

      <div className="info-container">
        <p>Publié par: {post.username}</p>
        <img
          className="avatar"
          alt={post.username + " avatar"}
          src={urlFor(post.authorImage)}
        />
      </div>

      <div className="tag-container">
        {post.categories.map((category) => (
          <>{category && <Tag key={category} title={category?.title} />}</>
        ))}
      </div>
    </div>
  );
};

export default Card;
