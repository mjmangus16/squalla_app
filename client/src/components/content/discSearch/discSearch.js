import React, { Component } from "react";

import discsArray from "./discData/discs";

import filterFunctions from "./filters/filterFunctions";
import createCards from "./discData/createCards";

import TypeSelect from "./filters/dropMenus/type";
import ManufacturerSelect from "./filters/dropMenus/manufacturer";
import StabilitySelect from "./filters/dropMenus/stability";
import SpeedSelect from "./filters/dropMenus/speed";
import GlideSelect from "./filters/dropMenus/glide";
import TurnSelect from "./filters/dropMenus/turn";
import FadeSelect from "./filters/dropMenus/fade";

import "./discSearch.css";
import "./card.css";
import "./filters/dropMenus/dropMenu.css";

const shuffledArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

class discSearch extends Component {
  state = {
    discs: shuffledArray(discsArray),
    filterSelections: []
  };

  filteredArray = discsArray;
  filterSelections = [];

  type = {
    type: false,
    distance: false,
    control: false,
    midRange: false,
    putter: false
  };

  manufacturer = {
    manufacturer: false,
    agl: false,
    aerobie: false,
    aqua: false,
    axiom: false,
    ching: false,
    daredevil: false,
    dga: false,
    discmania: false,
    discraft: false,
    dynamic: false,
    element: false,
    fullturn: false,
    gateway: false,
    hyzerbomb: false,
    infinite: false,
    innova: false,
    kastaplast: false,
    latitude: false,
    legacy: false,
    lightning: false,
    millennium: false,
    mvp: false,
    nite: false,
    ozone: false,
    prodigy: false,
    prodiscus: false,
    reptilian: false,
    rpm: false,
    salient: false,
    streamline: false,
    tobu: false,
    handcandy: false,
    vibram: false,
    viking: false,
    westside: false,
    yikun: false
  };

  stability = {
    stability: false,
    veryOverstable: false,
    overstable: false,
    stable: false,
    understable: false
  };

  speed = {
    speed: false,
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false,
    _6: false,
    _7: false,
    _8: false,
    _9: false,
    _10: false,
    _11: false,
    _12: false,
    _13: false,
    _14: false,
    _15: false
  };

  glide = {
    glide: false,
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false,
    _6: false,
    _7: false
  };

  turn = {
    turn: false,
    _p1: false,
    _0: false,
    _m1: false,
    _m2: false,
    _m3: false,
    _m4: false,
    _m5: false
  };

  fade = {
    fade: false,
    _0: false,
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false
  };

  filterTypeHandler = e => {
    if (e.target.value === "distance-driver") {
      this.type.distance = true;
      this.type.type = true;
      this.filterSelections.push(<p key="dd">Distance Driver</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "control-driver") {
      this.type.control = true;
      this.type.type = true;
      this.filterSelections.push(<p key="cd">Control Driver</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "mid-range") {
      this.type.midRange = true;
      this.type.type = true;
      this.filterSelections.push(<p key="mr">Mid Range</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "putter") {
      this.type.putter = true;
      this.type.type = true;
      this.filterSelections.push(<p key="pu">Putter</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterManufacturerHandler = e => {
    if (e.target.value === "agl") {
      this.manufacturer.agl = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="agl">Above Ground Level</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "aerobie") {
      this.manufacturer.aerobie = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="aerobie">Aerobie</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "aqua") {
      this.manufacturer.aqua = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="aquaflight">AquaFlight</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "axiom") {
      this.manufacturer.axiom = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="axiom">Axiom</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "ching") {
      this.manufacturer.ching = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="ching">Ching</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "daredevil") {
      this.manufacturer.daredevil = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="daredevil">Daredevil</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "dga") {
      this.manufacturer.dga = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="dga">DGA</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "discmania") {
      this.manufacturer.discmania = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="discmania">Discmania</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "discraft") {
      this.manufacturer.discraft = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="discraft">Discraft</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "dynamic") {
      this.manufacturer.dynamic = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="dynamic">Dynamic</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "element") {
      this.manufacturer.element = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="element">Element</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "fullturn") {
      this.manufacturer.fullturn = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="fullturn">Full Turn</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "gateway") {
      this.manufacturer.gateway = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="gateway">Gateway</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "hyzerbomb") {
      this.manufacturer.hyzerbomb = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="hyzerbomb">Hyzerbomb</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "infinite") {
      this.manufacturer.infinite = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="infinite">Infinite</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "innova") {
      this.manufacturer.innova = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="innova">Innova</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "kastaplast") {
      this.manufacturer.kastaplast = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="kastaplast">Kastaplast</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "latitude") {
      this.manufacturer.latitude = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="latitude">Latitude 64</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "legacy") {
      this.manufacturer.legacy = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="legacy">Legacy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "lightning") {
      this.manufacturer.lightning = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="lightning">Lightning</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "millennium") {
      this.manufacturer.millennium = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="millennium">Millennium</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "mvp") {
      this.manufacturer.mvp = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="mvp">MVP</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "nite") {
      this.manufacturer.nite = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="nite">Nite Ize</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "ozone") {
      this.manufacturer.ozone = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="ozone">Ozone</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "prodigy") {
      this.manufacturer.prodigy = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="prodigy">Prodigy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "prodiscus") {
      this.manufacturer.prodiscus = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="prodiscus">Prodiscus</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "reptilian") {
      this.manufacturer.reptilian = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="reptilian">Reptilian</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "rpm") {
      this.manufacturer.rpm = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="rpm">RPM</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "salient") {
      this.manufacturer.salient = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="salient">Salient</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "streamline") {
      this.manufacturer.streamline = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="streamline">Streamline</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "tobu") {
      this.manufacturer.tobu = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="tobu">Tobu</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "handcandy") {
      this.manufacturer.handcandy = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="handcandy">UB Handcandy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "vibram") {
      this.manufacturer.vibram = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="vibram">Vibram</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "viking") {
      this.manufacturer.viking = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="viking">Viking</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "westside") {
      this.manufacturer.westside = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="westside">Westside</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "yikun") {
      this.manufacturer.yikun = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="yikun">Yikun</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "yikun") {
      this.manufacturer.yikun = true;
      this.manufacturer.manufacturer = true;
      this.filterSelections.push(<p key="yikun">Yikun</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterStabilityHandler = e => {
    if (e.target.value === "veryOverstable") {
      this.stability.veryOverstable = true;
      this.stability.stability = true;
      this.filterSelections.push(<p key="veryOverstable">Very Overstable</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "overstable") {
      this.stability.overstable = true;
      this.stability.stability = true;
      this.filterSelections.push(<p key="overstable">Overstable</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "stable") {
      this.stability.stable = true;
      this.stability.stability = true;
      this.filterSelections.push(<p key="stable">Stable</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "understable") {
      this.stability.understable = true;
      this.stability.stability = true;
      this.filterSelections.push(<p key="understable">Understable</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterSpeedHandler = e => {
    if (e.target.value === "1") {
      this.speed._1 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_1">Speed: 1</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "2") {
      this.speed._2 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_2">Speed: 2</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "3") {
      this.speed._3 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_3">Speed: 3</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "4") {
      this.speed._4 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_4">Speed: 4</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "5") {
      this.speed._5 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_5">Speed: 5</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "6") {
      this.speed._6 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_6">Speed: 6</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "7") {
      this.speed._7 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_7">Speed: 7</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "8") {
      this.speed._8 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_8">Speed: 8</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "9") {
      this.speed._9 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_9">Speed: 9</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "10") {
      this.speed._10 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_10">Speed: 10</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "11") {
      this.speed._11 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_11">Speed: 11</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "12") {
      this.speed._12 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_12">Speed: 12</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "13") {
      this.speed._13 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_13">Speed: 13</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "14") {
      this.speed._14 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_14">Speed: 14</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "15") {
      this.speed._15 = true;
      this.speed.speed = true;
      this.filterSelections.push(<p key="speed_15">Speed: 15</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterGlideHandler = e => {
    if (e.target.value === "1") {
      this.glide._1 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_1">Glide: 1</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "2") {
      this.glide._2 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_2">Glide: 2</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "3") {
      this.glide._3 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_3">Glide: 3</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "4") {
      this.glide._4 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_4">Glide: 4</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "5") {
      this.glide._5 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_5">Glide: 5</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "6") {
      this.glide._6 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_6">Glide: 6</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "7") {
      this.glide._7 = true;
      this.glide.glide = true;
      this.filterSelections.push(<p key="glide_7">Glide: 7</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterTurnHandler = e => {
    if (e.target.value === "+1") {
      this.turn._p1 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_1">Turn: 1</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "0") {
      this.turn._0 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_2">Turn: 0</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "-1") {
      this.turn._m1 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_3">Turn: -1</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "-2") {
      this.turn._m2 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_4">Turn: -2</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "-3") {
      this.turn._m3 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_5">Turn: -3</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "-4") {
      this.turn._m4 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_6">Turn: -4</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "-5") {
      this.turn._m5 = true;
      this.turn.turn = true;
      this.filterSelections.push(<p key="turn_7">Turn: -5</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterFadeHandler = e => {
    if (e.target.value === "0") {
      this.fade._0 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_1">Fade: 0</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "1") {
      this.fade._1 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_2">Fade: 1</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "2") {
      this.fade._2 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_3">Fade: 2</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "3") {
      this.fade._3 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_4">Fade: 3</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "4") {
      this.fade._4 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_5">Fade: 4</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "5") {
      this.fade._5 = true;
      this.fade.fade = true;
      this.filterSelections.push(<p key="fade_6">Fade: 5</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  searchByNameHandler = () => {
    let input = document.getElementById("name-search");
    let filter = input.value.toUpperCase();
    let cards = document.querySelectorAll(".search-card");

    for (let i = 0; i < cards.length; i++) {
      let name = cards[i].firstChild.textContent;
      if (name.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  };

  submitButton = () => {
    if (this.type.type === true) {
      this.filteredArray = filterFunctions.type(this.filteredArray, this.type);
    }
    if (this.manufacturer.manufacturer === true) {
      this.filteredArray = filterFunctions.manufacturer(
        this.filteredArray,
        this.manufacturer
      );
    }
    if (this.stability.stability === true) {
      this.filteredArray = filterFunctions.stability(
        this.filteredArray,
        this.stability
      );
    }
    if (this.speed.speed === true) {
      this.filteredArray = filterFunctions.speed(
        this.filteredArray,
        this.speed
      );
    }
    if (this.glide.glide === true) {
      this.filteredArray = filterFunctions.glide(
        this.filteredArray,
        this.glide
      );
    }
    if (this.turn.turn === true) {
      this.filteredArray = filterFunctions.turn(this.filteredArray, this.turn);
    }
    if (this.fade.fade === true) {
      this.filteredArray = filterFunctions.fade(this.filteredArray, this.fade);
    }

    this.setState({ discs: this.filteredArray });
    document.getElementById("type-select").value = "selected";
    document.getElementById("manufacturer-select").value = "selected";
    document.getElementById("stability-select").value = "selected";
    document.getElementById("search-speed").value = "selected";
    document.getElementById("search-glide").value = "selected";
    document.getElementById("search-turn").value = "selected";
    document.getElementById("search-fade").value = "selected";
    document.getElementById("name-search").value = "";
  };

  resetButton = () => {
    this.setState({ discs: discsArray, filterSelections: [] });
    this.filteredArray = discsArray;
    this.type = {
      type: false,
      distance: false,
      control: false,
      midRange: false,
      putter: false
    };

    this.manufacturer = {
      manufacturer: false,
      agl: false,
      aerobie: false,
      aqua: false,
      axiom: false,
      ching: false,
      daredevil: false,
      dga: false,
      discmania: false,
      discraft: false,
      dynamic: false,
      element: false,
      fullturn: false,
      gateway: false,
      hyzerbomb: false,
      infinite: false,
      innova: false,
      kastaplast: false,
      latitude: false,
      legacy: false,
      lightning: false,
      millennium: false,
      mvp: false,
      nite: false,
      ozone: false,
      prodigy: false,
      prodiscus: false,
      reptilian: false,
      rpm: false,
      salient: false,
      streamline: false,
      tobu: false,
      handcandy: false,
      vibram: false,
      viking: false,
      westside: false,
      yikun: false
    };

    this.stability = {
      stability: false,
      veryOverstable: false,
      overstable: false,
      stable: false,
      understable: false
    };

    this.speed = {
      _1: false,
      _2: false,
      _3: false,
      _4: false,
      _5: false,
      _6: false,
      _7: false,
      _8: false,
      _9: false,
      _10: false,
      _11: false,
      _12: false,
      _13: false,
      _14: false,
      _15: false
    };

    this.glide = {
      _1: false,
      _2: false,
      _3: false,
      _4: false,
      _5: false,
      _6: false,
      _7: false
    };

    this.turn = {
      _p1: false,
      _0: false,
      _m1: false,
      _m2: false,
      _m3: false,
      _m4: false,
      _m5: false
    };

    this.fade = {
      _0: false,
      _1: false,
      _2: false,
      _3: false,
      _4: false,
      _5: false
    };

    this.filterSelections = [];
    document.getElementById("type-select").value = "selected";
    document.getElementById("manufacturer-select").value = "selected";
    document.getElementById("stability-select").value = "selected";
    document.getElementById("search-speed").value = "selected";
    document.getElementById("search-glide").value = "selected";
    document.getElementById("search-turn").value = "selected";
    document.getElementById("search-fade").value = "selected";
    document.getElementById("name-search").value = "";
  };

  render() {
    return (
      <div className="disc-search-container">
        <div className="filter-container">
          <div className="filter-container1">
            <h4>Selected</h4>

            <div className="filter-container1-selected-filters-out">
              <div className="filter-container1-selected-filters-in">
                {this.state.filterSelections}
              </div>
            </div>
          </div>
          <div className="filter-container2">
            <h2 className="filter-container-heading">FILTER</h2>
            <div className="filter-buttons1">
              <TypeSelect handler={this.filterTypeHandler} />
              <ManufacturerSelect handler={this.filterManufacturerHandler} />
              <StabilitySelect handler={this.filterStabilityHandler} />
            </div>
            <div className="filter-buttons2">
              <SpeedSelect handler={this.filterSpeedHandler} />
              <GlideSelect handler={this.filterGlideHandler} />
              <TurnSelect handler={this.filterTurnHandler} />
              <FadeSelect handler={this.filterFadeHandler} />
            </div>
            <div className="filter-buttons3">
              <button id="filter-reset-button" onClick={this.resetButton}>
                RESET
              </button>
              <button id="filter-submit-button" onClick={this.submitButton}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="search-content-container">
          <div className="search-content-top-bar">
            <div id="filter-card-search">
              <input
                id="name-search"
                type="text"
                placeholder="Search By Name"
                onChange={this.searchByNameHandler}
              />
            </div>
          </div>
          <div className="search-content-cards-container">
            <div className="search-content-cards">
              {createCards(this.state.discs)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default discSearch;
