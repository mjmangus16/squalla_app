import React, { Component } from "react";

import discsArray from "./discData/discs";

import createCards from "./discData/createCards";

import TypeSelect from "./filters/dropMenus/type";
import ManufactureSelect from "./filters/dropMenus/manufacture";
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
    distance: false,
    control: false,
    midRange: false,
    putter: false
  };

  manufacture = {
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
    veryOverstable: false,
    overstable: false,
    stable: false,
    understable: false
  };

  speed = {
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
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false,
    _6: false,
    _7: false
  };

  turn = {
    _p1: false,
    _0: false,
    _m1: false,
    _m2: false,
    _m3: false,
    _m4: false,
    _m5: false
  };

  fade = {
    _0: false,
    _1: false,
    _2: false,
    _3: false,
    _4: false,
    _5: false
  };

  filterTypeFunction = array => {
    let newArray = [];
    if (this.type.distance === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Distance Driver") {
          newArray.push(array[i]);
        }
      }
    }
    if (this.type.control === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Control Driver") {
          newArray.push(array[i]);
        }
      }
    }
    if (this.type.midRange === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Mid Range") {
          newArray.push(array[i]);
        }
      }
    }
    if (this.type.putter === true) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].Distance === "Putter") {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  };

  filterTypeHandler = e => {
    if (e.target.value === "distance-driver") {
      this.type.distance = true;
      this.filterSelections.push(<p key="dd">Distance Driver</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "control-driver") {
      this.type.control = true;
      this.filterSelections.push(<p key="cd">Control Driver</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "mid-range") {
      this.type.midRange = true;
      this.filterSelections.push(<p key="mr">Mid Range</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "putter") {
      this.type.putter = true;
      this.filterSelections.push(<p key="pu">Putter</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterManufactureHandler = e => {
    if (e.target.value === "agl") {
      this.manufacture.agl = true;
      this.filterSelections.push(<p key="agl">Above Ground Level</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "aerobie") {
      this.manufacture.aerobie = true;
      this.filterSelections.push(<p key="aerobie">Aerobie</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "aqua") {
      this.manufacture.aqua = true;
      this.filterSelections.push(<p key="aquaflight">AquaFlight</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "axiom") {
      this.manufacture.axiom = true;
      this.filterSelections.push(<p key="axiom">Axiom</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "ching") {
      this.manufacture.ching = true;
      this.filterSelections.push(<p key="ching">Ching</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "daredevil") {
      this.manufacture.daredevil = true;
      this.filterSelections.push(<p key="daredevil">Daredevil</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "dga") {
      this.manufacture.dga = true;
      this.filterSelections.push(<p key="dga">DGA</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "discmania") {
      this.manufacture.discmania = true;
      this.filterSelections.push(<p key="discmania">Discmania</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "discraft") {
      this.manufacture.discraft = true;
      this.filterSelections.push(<p key="discraft">Discraft</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "dynamic") {
      this.manufacture.dynamic = true;
      this.filterSelections.push(<p key="dynamic">Dynamic</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "element") {
      this.manufacture.element = true;
      this.filterSelections.push(<p key="element">Element</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "fullturn") {
      this.manufacture.fullturn = true;
      this.filterSelections.push(<p key="fullturn">Full Turn</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "gateway") {
      this.manufacture.gateway = true;
      this.filterSelections.push(<p key="gateway">Gateway</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "hyzerbomb") {
      this.manufacture.hyzerbomb = true;
      this.filterSelections.push(<p key="hyzerbomb">Hyzerbomb</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "infinite") {
      this.manufacture.infinite = true;
      this.filterSelections.push(<p key="infinite">Infinite</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "innova") {
      this.manufacture.innova = true;
      this.filterSelections.push(<p key="innova">Innova</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "kastaplast") {
      this.manufacture.kastaplast = true;
      this.filterSelections.push(<p key="kastaplast">Kastaplast</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "latitude") {
      this.manufacture.latitude = true;
      this.filterSelections.push(<p key="latitude">Latitude 64</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "legacy") {
      this.manufacture.legacy = true;
      this.filterSelections.push(<p key="legacy">Legacy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "millennium") {
      this.manufacture.millennium = true;
      this.filterSelections.push(<p key="millennium">Millennium</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "mvp") {
      this.manufacture.mvp = true;
      this.filterSelections.push(<p key="mvp">MVP</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "nite") {
      this.manufacture.nite = true;
      this.filterSelections.push(<p key="nite">Nite Ize</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "ozone") {
      this.manufacture.ozone = true;
      this.filterSelections.push(<p key="ozone">Ozone</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "prodigy") {
      this.manufacture.prodigy = true;
      this.filterSelections.push(<p key="prodigy">Prodigy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "prodiscus") {
      this.manufacture.prodiscus = true;
      this.filterSelections.push(<p key="prodiscus">Prodiscus</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "reptilian") {
      this.manufacture.reptilian = true;
      this.filterSelections.push(<p key="reptilian">Reptilian</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "rpm") {
      this.manufacture.rpm = true;
      this.filterSelections.push(<p key="rpm">RPM</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "salient") {
      this.manufacture.salient = true;
      this.filterSelections.push(<p key="salient">Salient</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "streamline") {
      this.manufacture.streamline = true;
      this.filterSelections.push(<p key="streamline">Streamline</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "tobu") {
      this.manufacture.tobu = true;
      this.filterSelections.push(<p key="tobu">Tobu</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "handcandy") {
      this.manufacture.handcandy = true;
      this.filterSelections.push(<p key="handcandy">UB Handcandy</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "vibram") {
      this.manufacture.vibram = true;
      this.filterSelections.push(<p key="vibram">Vibram</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "viking") {
      this.manufacture.viking = true;
      this.filterSelections.push(<p key="viking">Viking</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "westside") {
      this.manufacture.prodiscus = true;
      this.filterSelections.push(<p key="westside">Westside</p>);
      this.setState({ filterSelections: this.filterSelections });
    } else if (e.target.value === "yikun") {
      this.manufacture.yikun = true;
      this.filterSelections.push(<p key="yikun">Yikun</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  filterStailityHandler = e => {
    if (e.target.value === "veryOverstable") {
      this.stability.veryOverstable = true;
      this.filterSelections.push(<p key="veryOverstale">Very Overstable</p>);
      this.setState({ filterSelections: this.filterSelections });
    }
  };

  submitButton = () => {
    this.filteredArray = this.filterTypeFunction(this.filteredArray);

    this.setState({ discs: this.filteredArray });
    document.getElementById("type-select").value = "selected";
    document.getElementById("manufacture-select").value = "selected";
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
      distance: false,
      control: false,
      midRange: false,
      putter: false
    };

    this.filterSelections = [];
    document.getElementById("type-select").value = "selected";
    document.getElementById("manufacture-select").value = "selected";
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
              <ManufactureSelect handler={this.filterManufactureHandler} />
              <StabilitySelect />
            </div>
            <div className="filter-buttons2">
              <SpeedSelect />
              <GlideSelect />
              <TurnSelect />
              <FadeSelect />
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
