import { Link } from "react-router-dom";
import data from "../components/data.json";

const Home = () => {
  return (
    <>
      <h1>SuperCarList</h1>
      <section>
        <article className="carArticle">
          {data.map((car, index) => (
            <div key={index}>
              <h2>{car.CarMake}</h2>
              <Link to={`/car/${car.id}`}>Read More</Link>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default Home;
