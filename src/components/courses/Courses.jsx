import { AppContext } from "../../context/app.context";
import "./Courses.scss";
import { useContext } from "react";

const Courses = () => {
  const { courseOrder } = useContext(AppContext);
  return (
    <div id="courses" className="container">
      <div className="courses">
        <div className="course" style={{ order: courseOrder[1] }}>
          <h2>Kurs HTML {courseOrder[1]}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course" style={{ order: courseOrder[2] }}>
          <h2>Kurs CSS {courseOrder[2]}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course" style={{ order: courseOrder[3] }}>
          <h2>Kurs JavaScript {courseOrder[3]}</h2>
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
