import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import GuitarsList from "~/components/guitarsList";
import Course from "~/components/course";
import PostsList from "~/components/postsList";
import stylesGuitars from "~/styles/guitars.css";
import stylesPosts from "~/styles/blog.css";
import stylesCourse from "~/styles/course.css";

export function meta() {}

export function links() {
  return [
    { rel: "stylesheet", href: stylesGuitars },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCourse,
    },
  ];
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return { guitars: guitars.data, posts: posts.data, course: course.data };
}

const Index = () => {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitars} />
      </main>

      <Course course={course.attributes} />

      <section className="container">
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
