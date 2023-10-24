import { AppContext } from "../../context/app.context";
import "./Courses.scss";
import { useContext } from "react";

const Courses = () => {
  const { coursesOrder } = useContext(AppContext);
  return (
    <div id="courses" className="container">
      <div className="courses">
        <div className="course" style={{}}>
          <h2>Kurs HTML</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course">
          <h2>Kurs CSS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course">
          <h2>Kurs JavaScript</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
