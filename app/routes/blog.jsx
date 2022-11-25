import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import PostsList from "~/components/postsList";
import styles from "~/styles/blog.css";

export function meta() {
  return {
    title: "GuitarLA - Our Blog",
    description: "GuitarLA, Music blog and guitars for sale",
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const posts = await getPosts();

  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container">
      <PostsList posts={posts} />
    </main>
  );
};

export default Blog;
