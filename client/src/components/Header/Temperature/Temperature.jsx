import { useEffect, useState } from "react";

const Temperature = () => {

  const [weather, setWeather] = useState({});

  useEffect(()=>{
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(async (pos) => {
  
        let { latitude: lat, longitude: lon } = pos.coords;
        
        try {
          let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d96ac8728492b4bae1caf1e47f7501d8`);
          const data = await res.json();
          setWeather(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [])

  return (
    <>
      {weather && <><p>{weather.name}</p><p>{weather.main.temp} ºC</p></>}
    </>
  );
};

export default Temperature;
