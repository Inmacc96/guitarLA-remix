import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import GuitarsList from "~/components/guitarsList";
import PostsList from "~/components/postsList";
import stylesGuitars from "~/styles/guitars.css";
import stylesPosts from "~/styles/blog.css";

export function meta() {}

export function links() {
  return [
    { rel: "stylesheet", href: stylesGuitars },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
  ];
}

export async function loader() {
  const [guitars, posts] = await Promise.all([getGuitars(), getPosts()]);

  return { guitars: guitars.data, posts: posts.data };
}

const Index = () => {
  const { guitars, posts } = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitars} />
      </main>

      <section className="container">
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
