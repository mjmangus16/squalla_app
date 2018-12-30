const filterFunctions = {
  type: (array, object) => {
    let newArray = [];
    if (object.distance === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Distance Driver") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.control === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Control Driver") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.midRange === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Mid Range") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.putter === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Putter") {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  manufacturer: (array, object) => {
    let newArray = [];
    if (object.agl === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Above Ground Level") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.aerobie === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Aerobie") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.aqua === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "AquaFlight") {
          console.log("works3");
          newArray.push(array[i]);
        }
      }
    }
    if (object.axiom === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Axiom") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.ching === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Ching") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.daredevil === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Daredevil Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.dga === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "DGA") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.discmania === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "DiscMania") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.discraft === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Discraft") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.dynamic === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Dynamic Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.element === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Element Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.fullturn === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Full Turn") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.gateway === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Gateway") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.galaxy === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Galaxy Disc Golf") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.hyzerbomb === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Hyzer Bomb") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.infinite === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Infinite Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.innova === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Innova") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.kastaplast === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Kastaplast") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.latitude === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Latitude 64") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.legacy === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Legacy Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.lightning === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Lightning Golf Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.millennium === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Millennium") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.mvp === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "MVP") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.nite === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Nite Ize Innovation") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.ozone === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Ozone Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.prodigy === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Prodigy") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.prodiscus === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Prodiscus") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.reptilian === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Reptilian Disc Golf") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.rpm === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "RPM Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.salient === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Salient Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.storm === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Storm Disc Golf") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.streamline === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Streamline Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.tobu === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "TOBU") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.handcandy === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "UB Hand Candy") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.vibram === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Vibram") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.viking === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Viking Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.westside === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "Westside Discs") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.yikun === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Manufacturer === "YiKun") {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  stability: (array, object) => {
    let newArray = [];
    if (object.veryOverstable === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Stability === "Very Overstable") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.overstable === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Stability === "Overstable") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.stable === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Stability === "Stable") {
          newArray.push(array[i]);
        }
      }
    }
    if (object.understable === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Stability === "Understable") {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  speed: (array, object) => {
    let newArray = [];
    if (object._1 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 0 && array[i].Speed <= 1.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._2 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 1.6 && array[i].Speed <= 2.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._3 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 2.6 && array[i].Speed <= 3.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._4 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 3.6 && array[i].Speed <= 4.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._5 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 4.6 && array[i].Speed <= 5.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._6 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 5.6 && array[i].Speed <= 6.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._7 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 6.6 && array[i].Speed <= 7.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._8 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 7.6 && array[i].Speed <= 8.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._9 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 8.6 && array[i].Speed <= 9.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._10 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 9.6 && array[i].Speed <= 10.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._11 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 10.6 && array[i].Speed <= 11.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._12 === true) {
      for (let i = 0; i <= array.length; i++) {
        if (array[i].Speed > 11.6 && array[i].Speed <= 12.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._13 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 12.6 && array[i].Speed <= 13.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._14 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 13.6 && array[i].Speed <= 14.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._15 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Speed >= 14.6 && array[i].Speed <= 15.5) {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  glide: (array, object) => {
    let newArray = [];
    if (object._1 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide > 0 && array[i].Glide <= 1.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._2 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 1.6 && array[i].Glide <= 2.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._3 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 2.6 && array[i].Glide <= 3.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._4 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 3.6 && array[i].Glide <= 4.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._5 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 4.6 && array[i].Glide <= 5.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._6 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 5.6 && array[i].Glide <= 6.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._7 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Glide >= 6.6 && array[i].Glide <= 7.5) {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  turn: (array, object) => {
    let newArray = [];
    if (object._p1 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= 1.6 && array[i].Turn >= 0.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._0 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= 0.6 && array[i].Turn >= -0.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._m1 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= -0.6 && array[i].Turn >= -1.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._m2 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= -1.6 && array[i].Turn >= -2.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._m3 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= -2.6 && array[i].Turn >= -3.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._m4 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= -3.6 && array[i].Turn >= -4.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._m5 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Turn <= -4.6 && array[i].Turn >= -5.5) {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },
  fade: (array, object) => {
    let newArray = [];
    if (object._1 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Fade > 0 && array[i].Fade <= 1.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._2 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Fade >= 1.6 && array[i].Fade <= 2.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._3 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Fade >= 2.6 && array[i].Fade <= 3.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._4 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Fade >= 3.6 && array[i].Fade <= 4.5) {
          newArray.push(array[i]);
        }
      }
    }
    if (object._5 === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Fade >= 4.6 && array[i].Fade <= 5.5) {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  }
};

export default filterFunctions;
