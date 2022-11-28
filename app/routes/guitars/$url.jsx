import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
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
  const { addCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);
  const guitar = useLoaderData();

  const { name, description, image, price } = guitar.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      alert("You have to select a quantity");
      return;
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity,
    };

    addCart(selectedGuitar);
  };

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

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="quantity">Quantity</label>

          <select id="quantity" onChange={(e) => setQuantity(+e.target.value)}>
            <option value="0">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Add to cart" />
        </form>
      </div>
    </div>
  );
};

export default Guitar;
