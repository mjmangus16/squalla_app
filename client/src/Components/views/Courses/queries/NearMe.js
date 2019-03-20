import React from "react";
import { Button } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

const NearMe = ({ handler, submit, queryData }) => {
  const handleNearMe = () => {
    let latitude;
    let longitude;
    let combined;
    const getLocation = () => {
      if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
      } else {
        alert("Sorry, your browser does not support geolocation services.");
      }
    };

    function success(position) {
      latitude = `latitude=${position.coords.latitude}`;
      longitude = `longitude=${position.coords.longitude}`;
      combined = latitude + "&" + longitude;
      handler(combined);
    }

    function fail() {
      alert("You must allow location services to use this feature.");
    }

    getLocation();
  };

  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: lightBlue[700]
      }}
      fullWidth
      onClick={handleNearMe}
    >
      Find Courses Near Me
    </Button>
  );
};

export default NearMe;
