import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import GuitarsList from "~/components/guitarsList";
import stylesGuitars from "~/styles/guitars.css";

export function meta() {}

export function links() {
  return [{ rel: "stylesheet", href: stylesGuitars }];
}

export async function loader() {
  const [guitars, posts] = await Promise.all([getGuitars(), getPosts()]);

  return { guitars: guitars.data, posts };
}

const Index = () => {
  const { guitars, posts } = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitars} />
      </main>
    </>
  );
};

export default Index;
