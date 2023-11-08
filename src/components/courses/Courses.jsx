import { AppContext } from "../../context/app.context";
import "./Courses.scss";
import { useContext } from "react";

const Courses = () => {
  const { courseOrder, courseText } = useContext(AppContext);
  return (
    <div id="courses" className="container">
      <div className="courses">
        <div className="course" style={{ order: courseOrder[1] }}>
          <h2>
            {courseText[1]} {courseOrder[1]}
          </h2>
          <p>{courseText[4]}</p>
        </div>
        <div className="course" style={{ order: courseOrder[2] }}>
          <h2>
            {courseText[2]} {courseOrder[2]}
          </h2>
          <p>{courseText[5]}</p>
        </div>
        <div className="course" style={{ order: courseOrder[3] }}>
          <h2>
            {courseText[3]} {courseOrder[3]}
          </h2>
          <p>{courseText[6]}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
