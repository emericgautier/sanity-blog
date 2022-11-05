import { urlFor } from "../lib/sanity";
import Tag from "./Tag";
import { forwardRef } from "react";

const Card = forwardRef(({ onClick, href, post }, ref) => {
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  const { publishedAt, mainImage, title, username, authorImage, categories } =
    post;
  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{post.title}</h2>
      <p>Publié le: {dateFormater(post.publishedAt)}</p>
      <img
        className="main-image"
        alt={post.title + " image"}
        src={urlFor(post.mainImage)}
      />

      <span></span>

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
          <>{category && <Tag key={category._id} title={category?.title} />}</>
        ))}
      </div>
    </div>
  );
});

export default Card;
