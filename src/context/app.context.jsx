import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({
    1: "/chuj.ci.w.dupe",
    2: "/default.jpg",
    3: "/default.jpg",
  });
  const [boxColor, setBoxColor] = useState({
    1: "#808080",
    2: "#808080",
    3: "#808080",
  });
  const [courseOrder, setCourseOrder] = useState({
    1: "1",
    2: "2",
    3: "3",
  });
  const [footerText, setFooterText] = useState({
    1: "Made by ",
    2: "#Ksawery",
  });

  const [boxText, setBoxText] = useState({
    1: "Lorem Ipsum",
    2: "Lorem Ipsum",
    3: "Lorem Ipsum",
    4: "Lorem Ipsum",
    5: "Lorem Ipsum",
    6: "Lorem Ipsum",
    7: "Lorem Ipsum",
    8: "Lorem Ipsum",
    9: "Lorem Ipsum",
    10: "Lorem Ipsum",
    11: "Lorem Ipsum",
    12: "Lorem Ipsum",
    13: "Lorem Ipsum",
    14: "Lorem Ipsum",
    15: "Lorem Ipsum",
    16: "Box 1 topic",
    17: "Box 2 topic",
    18: "Box 3 topic",
  });

  const [courseText, setCourseText] = useState({
    1: "Course 1 Topic",
    2: "Course 2 Topic",
    3: "Course 3 Topic",
    4: "Course 1 Text",
    5: "Course 2 Text",
    6: "Course 3 Text",
  });

  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        slider,
        setSlider,
        sliderImg,
        setSliderImg,
        boxColor,
        setBoxColor,
        courseOrder,
        setCourseOrder,
        footerText,
        setFooterText,
        boxText,
        setBoxText,
        courseText,
        setCourseText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
