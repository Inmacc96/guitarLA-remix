import { useState } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import styles from "~/styles/index.css";

export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width, initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addCart = (guitar) => {
    setCart([...cart, guitar]);
  };

  return (
    <Document>
      <Outlet context={{ addCart }} />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/* Manejo de errores */
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link to="/" className="error-link">
        You may want to go back to the home page
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link to="/" className="error-link">
        You may want to go back to the home page
      </Link>
    </Document>
  );
}
