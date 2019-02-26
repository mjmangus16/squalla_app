const getCourseRating = (distance, terrain, landscape, holes) => {
  let rating;

  let terrainRating, landscapeRating, distancePerHole;

  distancePerHole = distance / holes;

  if (terrain === 1) {
    terrainRating = 1.0;
  } else if (terrain === 2) {
    terrainRating = 1.1;
  } else if (terrain === 3) {
    terrainRating = 1.25;
  }

  if (landscape === 1) {
    landscapeRating = 1.0;
  } else if (landscape === 2) {
    landscapeRating = 1.05;
  } else if (landscape === 3) {
    landscapeRating = 1.15;
  }

  rating = distancePerHole * terrainRating * landscapeRating;

  return rating / 10;
};

module.exports = getCourseRating;
