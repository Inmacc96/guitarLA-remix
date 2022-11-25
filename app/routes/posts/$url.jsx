import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Post Not Found",
      description: "Guitars, sale of guitars, post not found"
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.title}`,
    description: `Guitars, sale of guitars, blog post ${data.data[0].attributes.title}`
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const { url } = params;

  const post = await getPost(url);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post Not Found",
    });
  }

  return post;
}
const Post = () => {
  const post = useLoaderData();

  const { title, content, publishedAt, image } = post.data[0].attributes;

  return (
    <article className="container post mt-3">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Blog post ${title}`}
      />

      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
};

export default Post;
