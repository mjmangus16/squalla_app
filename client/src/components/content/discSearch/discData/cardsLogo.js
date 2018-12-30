import aerobie from "../../../../img/logo/aerobie.png";
import agl from "../../../../img/logo/agl.png";
import aquaFlight from "../../../../img/logo/aquaflight.png";
import axiom from "../../../../img/logo/axiom.png";
import ching from "../../../../img/logo/ching.png";
import daredevil from "../../../../img/logo/daredevil.png";
import dga from "../../../../img/logo/dga.png";
import discMania from "../../../../img/logo/discmania.png";
import discraft from "../../../../img/logo/discraft.png";
import dynamic from "../../../../img/logo/dynamic.png";
import element from "../../../../img/logo/element.png";
import fullTurn from "../../../../img/logo/fullturn.png";
import gateway from "../../../../img/logo/gateway.png";
import galaxy from "../../../../img/logo/galaxy.png";
import handCandy from "../../../../img/logo/handCandy.png";
import hyzerBomb from "../../../../img/logo/hyzerbomb.png";
import infinite from "../../../../img/logo/infinite.png";
import innova from "../../../../img/logo/innova.png";
import kastaplast from "../../../../img/logo/kastaplast.png";
import latitude from "../../../../img/logo/latitude.png";
import legacy from "../../../../img/logo/legacy.png";
import lightning from "../../../../img/logo/lightning.png";
import millennium from "../../../../img/logo/millennium.png";
import mvp from "../../../../img/logo/mvp.png";
import niteIze from "../../../../img/logo/niteIze.png";
import ozone from "../../../../img/logo/ozone.png";
import prodigy from "../../../../img/logo/prodigy.png";
import prodiscus from "../../../../img/logo/prodiscus.png";
import reptilian from "../../../../img/logo/reptilian.png";
import rpm from "../../../../img/logo/rpm.png";
import salient from "../../../../img/logo/salient.png";
import streamline from "../../../../img/logo/streamline.png";
import storm from "../../../../img/logo/storm.png";
import tobu from "../../../../img/logo/tobu.png";
import vibram from "../../../../img/logo/vibram.png";
import viking from "../../../../img/logo/viking.png";
import westside from "../../../../img/logo/westside.png";
import yikun from "../../../../img/logo/yikun.png";

const logoFunction = manufacturer => {
  if (manufacturer === "DiscMania") {
    return discMania;
  } else if (manufacturer === "Discraft") {
    return discraft;
  } else if (manufacturer === "Dynamic Discs") {
    return dynamic;
  } else if (manufacturer === "Innova") {
    return innova;
  } else if (manufacturer === "Kastaplast") {
    return kastaplast;
  } else if (manufacturer === "Latitude 64") {
    return latitude;
  } else if (manufacturer === "Millennium") {
    return millennium;
  } else if (manufacturer === "MVP") {
    return mvp;
  } else if (manufacturer === "Prodigy") {
    return prodigy;
  } else if (manufacturer === "Vibram") {
    return vibram;
  } else if (manufacturer === "Westside Discs") {
    return westside;
  } else if (manufacturer === "Aerobie") {
    return aerobie;
  } else if (manufacturer === "Axiom") {
    return axiom;
  } else if (manufacturer === "Ching") {
    return ching;
  } else if (manufacturer === "Daredevil Discs") {
    return daredevil;
  } else if (manufacturer === "DGA") {
    return dga;
  } else if (manufacturer === "Element Discs") {
    return element;
  } else if (manufacturer === "Full Turn") {
    return fullTurn;
  } else if (manufacturer === "Gateway") {
    return gateway;
  } else if (manufacturer === "Hyzer Bomb") {
    return hyzerBomb;
  } else if (manufacturer === "Legacy Discs") {
    return legacy;
  } else if (manufacturer === "Lightning Golf Discs") {
    return lightning;
  } else if (manufacturer === "Nite Ize Innovation") {
    return niteIze;
  } else if (manufacturer === "Prodiscus") {
    return prodiscus;
  } else if (manufacturer === "Reptilian Disc Golf") {
    return reptilian;
  } else if (manufacturer === "RPM Discs") {
    return rpm;
  } else if (manufacturer === "Salient Discs") {
    return salient;
  } else if (manufacturer === "TOBU") {
    return tobu;
  } else if (manufacturer === "UB Hand Candy") {
    return handCandy;
  } else if (manufacturer === "Viking Discs") {
    return viking;
  } else if (manufacturer === "YiKun") {
    return yikun;
  } else if (manufacturer === "AquaFlight") {
    return aquaFlight;
  } else if (manufacturer === "Infinite Discs") {
    return infinite;
  } else if (manufacturer === "Above Ground Level") {
    return agl;
  } else if (manufacturer === "Ozone Discs") {
    return ozone;
  } else if (manufacturer === "Streamline Discs") {
    return streamline;
  } else if (manufacturer === "Storm Disc Golf") {
    return storm;
  } else if (manufacturer === "Galaxy Disc Golf") {
    return galaxy;
  }
};

export default logoFunction;
