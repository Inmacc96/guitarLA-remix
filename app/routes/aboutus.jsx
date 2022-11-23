import image from "../../public/img/aboutus.jpg";

const Aboutus = () => {
  return (
    <main className="container">
      <h2 className="heading">About Us</h2>

      <div className="content">
        <img src={image} alt="about us" />

        <div>
          <p>
            Suspendisse vel nulla non turpis scelerisque fringilla. In vel
            tortor vitae sem aliquam mattis. Donec a metus sodales, elementum
            erat ut, posuere ipsum. Donec eget condimentum mi, vitae pretium
            purus. Integer fermentum sem metus, sit amet laoreet nisl fringilla
            non. Pellentesque eu arcu volutpat, imperdiet neque sit amet,
            lacinia urna.
          </p>

          <p>
            Suspendisse vel nulla non turpis scelerisque fringilla. In vel
            tortor vitae sem aliquam mattis. Donec a metus sodales, elementum
            erat ut, posuere ipsum. Donec eget condimentum mi, vitae pretium
            purus. Integer fermentum sem metus, sit amet laoreet nisl fringilla
            non. Pellentesque eu arcu volutpat, imperdiet neque sit amet,
            lacinia urna.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Aboutus;
