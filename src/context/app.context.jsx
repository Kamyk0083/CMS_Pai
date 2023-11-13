import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({
    1: "https://www.konflikty.pl/wp-content/uploads/2022/10/darkstar.jpg",
    2: "https://zbiam.pl/wp-content/uploads/2019/08/F-35B-1.jpg",
    3: "https://upload.wikimedia.org/wikipedia/commons/f/ff/McDonnell_Douglas_FA-18C_Hornet_of_VMFA-212_in_flight_over_the_South_China_Sea_on_8_October_2003_%286638451%29.jpg",
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
    1: "Top speed: 7,400 km/h",
    2: "Lenght: 18 m",
    3: "Rate of climb: 205.6 m/s at top speed",
    4: "Price: $20 000 000 000 USD",
    5: "First flight: Plane will be into service in 2030",
    6: "Top speed: 1 976 km/h",
    7: "Lenght: 15,37 m",
    8: "Rate of climb: 228,6 m/s",
    9: "Price: $122 000 000 USD",
    10: "First flight: 11.06.2008",
    11: "Top speed: 1 915 km/h",
    12: "Length: 17 m",
    13: "Rate of climb: 254 m/s",
    14: "Price: $29 000 000–$57 000 000 USD",
    15: "First flight: 18.11.1978",
    16: "DarkStar",
    17: "F-35B",
    18: "F-18",
  });

  const [courseText, setCourseText] = useState({
    1: "Course 1 Topic",
    2: "Course 2 Topic",
    3: "Course 3 Topic",
    4: "Course 1 Text",
    5: "Course 2 Text",
    6: "Course 3 Text",
  });

  const [sliderText, setSliderText] = useState({
    1: "DarkStar",
    2: "F-35B",
    3: "F-18",
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
        sliderText,
        setSliderText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
