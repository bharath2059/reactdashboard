import React, { useEffect, useState } from "react";
import { Component } from "react";
import SideNavBar from "../../NavBar/SideNavBar";
import "./../styles/style.css";

const Weather = () => {
  //declaring the variables using UseState
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [comment, setComment] = useState("");

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  //function to get coordinates of a user and fetch location.
  function success(pos) {
    console.log("hello");
    var crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
    console.log(latitude);
    console.log(longitude);
    getWeather();
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  //function to fetch the weather.
  async function getWeather() {
    console.log("came here");
    const URL = "https://weatherdbi.herokuapp.com/data/weather/";
    const WeatherUrl = URL + latitude + "," + longitude;
    console.log(latitude);
    try {
      let data = await fetch(WeatherUrl).then((res) => res.json());
      console.log(data);
      setCity(data.region);
      setTemp(data.currentConditions.temp.c);
      setWind(data.currentConditions.wind.km);
      setComment(data.currentConditions.comment);

      console.log(temp);
    } catch {
      console.log("error while connecting to Weather Api");
    }
  }
  // class to get location of a user using geoloaction.
  class GeoLocation extends Component {
    componentDidMount() {
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              console.log("hhh");
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(success);
              console.log("hello");
            } else if (result.state === "prompt") {
              navigator.geolocation.getCurrentPosition(
                success,
                errors,
                options
              );
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        alert("Sorry Not available!");
      }
    }

    render() {
      return <div></div>;
    }
  }

  return (
    <>
      <SideNavBar />
      <div className="Header1">
        <div className="Body">
          <GeoLocation />
          <div className="weather">
            <h1> You are at {city}</h1>
            <h2> {temp}° c</h2>
            <p>{comment}</p>
            <h3>Wind is at {wind} km</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
