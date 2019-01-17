import React from "react";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

const searchLeagues = () => {
  let navButtonLinks = [
    "/squallaApp/profile/leagues",
    "/squallaApp/profile/leagues/search"
  ];
  let navButtonNames = ["My Leagues", "Search Leagues"];

  return (
    <div className="squalla-app-container">
      <AppMenu link={"leagues"} />
      <div className="squalla-app-content-container">
        <div className="squalla-app-leagues-container">
          <h2 style={{ color: "var(--orange)", fontWeight: "300" }}>
            This feature is not yet available
          </h2>
        </div>
        <NavButtons
          buttons={2}
          selected={2}
          links={navButtonLinks}
          names={navButtonNames}
        />
      </div>
    </div>
  );
};

export default searchLeagues;
