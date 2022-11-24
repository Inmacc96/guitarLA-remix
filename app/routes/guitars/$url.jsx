import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import styles from "~/styles/guitars.css";


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const { url } = params;

  const guitar = await getGuitar(url);

  return guitar;
}

const Guitar = () => {
  const guitar = useLoaderData();

  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <main className="container guitar">
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
    </main>
  );
};

export default Guitar;
