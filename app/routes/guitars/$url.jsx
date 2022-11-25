import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({ params }) {
  const { url } = params;

  const guitar = await getGuitar(url);

  if (guitar.data.length === 0) {
    throw new Response("", { status: 404, statusText: "Guitar Not Found" });
  }

  return guitar;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitar Not Found",
      description: `Guitars, sale of guitars, guitar not found`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitars, sale of guitars, ${data.data[0].attributes.name} guitar`,
  };
}

const Guitar = () => {
  const guitar = useLoaderData();

  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <div className="guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`${name} guitar`}
      />

      <div className="content">
        <h3>{name}</h3>
        <p className="text-description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default Guitar;
