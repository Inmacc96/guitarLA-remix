import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import PostsList from "~/components/postsList";

export function meta() {
  return {
    title: "GuitarLA - Our Blog",
    description: "GuitarLA, Music blog and guitars for sale",
  };
}

export async function loader() {
  const posts = await getPosts();

  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return <PostsList posts={posts} />;
};

export default Blog;
