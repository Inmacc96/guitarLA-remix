import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({ params }) {
  const { url } = params;

  const guitar = await getGuitar(url);

  return guitar;
}

const Guitar = () => {
  const guitar = useLoaderData();

  console.log(guitar);

  return <div>Guitar</div>;
};

export default Guitar;
