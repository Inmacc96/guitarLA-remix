import Guitar from "./guitar";

const GuitarsList = ({ guitars }) => {
  return (
    <>
      <h2 className="heading">Our Colletion</h2>

      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar?.id} guitar={guitar?.attributes} />
          ))}
        </div>
      )}
    </>
  );
};

export default GuitarsList;
