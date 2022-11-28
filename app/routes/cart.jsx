import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/cart.css";

export function meta() {
  return {
    title: "GuitarLA - Shopping Cart",
    description: "Guitars for sale, music, blog, shopping cart, shop",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Cart = () => {
  const { cart, updateQuantity } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalc = cart.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(totalCalc);
  }, [cart]);

  return (
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>

      <div className="content">
        <div className="cart">
          <h2>Items</h2>

          {cart.length === 0
            ? "Empty cart"
            : cart.map((product) => (
                <div key={product.id} className="product">
                  <div>
                    <img src={product.image} alt={`product ${product.name}`} />
                  </div>

                  <div>
                    <p className="name">{product.name}</p>
                    <p className="quantity">Quantity:</p>

                    <select
                      value={product.quantity}
                      className="select-quantity"
                      onChange={(e) =>
                        updateQuantity({
                          id: product.id,
                          quantity: +e.target.value,
                        })
                      }
                    >
                      <option value="0">-- Select --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <p className="price">
                      $ <span>{product.price}</span>
                    </p>
                    <p className="subtotal">
                      Subtotal: ${" "}
                      <span>{product.price * product.quantity}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>

        <aside className="summary">
          <h3>Order summary</h3>
          <p>Total to be paid: $ {total}</p>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
