import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({
    1: "/default.jpg",
    2: "/default.jpg",
    3: "/default.jpg",
  });
  const [boxColor, setBoxColor] = useState({
    1: "#808080",
    2: "#808080",
    3: "#808080",
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
