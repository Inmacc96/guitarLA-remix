import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarsList from "~/components/guitarsList";

export function meta() {
  return {
    title: "GuitarLA - Guitar Store",
    description: "GuitarLA - Our guitar collection",
  };
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

const Store = () => {
  const guitars = useLoaderData();

  return <GuitarsList guitars={guitars} />;
};

export default Store;
