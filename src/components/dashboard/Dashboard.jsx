import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const { slider, setSlider, sliderImg, setSliderImg, boxColor, setBoxColor } =
    useContext(AppContext);

  const setSliderImgHanlder = (e) => {
    const sliderNumber = Number(e.target.name);
    const sliderImgValue = e.target.value;

    sliderImg[sliderNumber] = sliderImgValue;

    setSliderImg(sliderImg);
  };

  const setBoxColorHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    boxColor[boxNumber] = boxColorValue;

    setBoxColor(boxColor);
  };

  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="title">
          <h2>Slider</h2>
          <button onClick={() => setSlider(!slider)}>
            {slider ? "OFF" : "ON"}
          </button>
        </div>
        <div className="sliders-img">
          <h2>Sliders IMGs</h2>
          <div className="inputs">
            <p>1</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[1]}
              type="text"
              name="1"
              placeholder="paste here URL to img"
            />
            <p>2</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[2]}
              type="text"
              name="2"
              placeholder="paste here URL to img"
            />
            <p>3</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[3]}
              type="text"
              name="3"
              placeholder="paste here URL to img"
            />
          </div>
          <div className="box-colors">
            <h2>Box colors</h2>
            <div className="color-input">
              <p>1</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[1]}
                type="color"
                name="1"
              />
              <p>2</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[2]}
                type="color"
                name="2"
              />
              <p>3</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[3]}
                type="color"
                name="3"
              />
            </div>
          </div>
          <div className="courses-order">
            <p>Courses Order</p>
            <div className="courses-inputs">
              <p>1</p>
              <input type="number" min={1} max={3} />
              <p>2</p>
              <input type="number" min={1} max={3} />
              <p>3</p>
              <input type="number" min={1} max={3} />
            </div>
          </div>
        </div>
        <div className="settings"></div>
      </div>
    </div>
  );
};

export default Dashboard;
