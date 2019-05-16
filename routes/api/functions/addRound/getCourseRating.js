const getCourseRating = (distance, foliage, elevation) => {
  let rating, foliageRating, elevationRating, distanceRating;

  if (foliage !== "N/A") {
    foliage = parseInt(foliage);
  }
  if (elevation !== "N/A") {
    elevation = parseInt(elevation);
  }

  switch (distance) {
    case "Very Short":
      distanceRating = 20;
      break;
    case "Short":
      distanceRating = 30;
      break;
    case "Medium":
      distanceRating = 40;
      break;
    case "Long":
      distanceRating = 50;
      break;
    case "Very Long":
      distanceRating = 60;
      break;
    default:
      distanceRating = 10;
  }

  switch (foliage) {
    case 1:
      foliageRating = 1.1;
      break;
    case 2:
      foliageRating = 1.2;
      break;
    case 3:
      foliageRating = 1.3;
      break;
    case 4:
      foliageRating = 1.4;
      break;
    case 5:
      foliageRating = 1.5;
      break;
    case 6:
      foliageRating = 1.6;
      break;
    case 7:
      foliageRating = 1.7;
      break;
    case 8:
      foliageRating = 1.8;
      break;
    case 9:
      foliageRating = 1.9;
      break;
    case 10:
      foliageRating = 2;
      break;
    default:
      foliageRating = 1;
  }

  switch (elevation) {
    case 1:
      elevationRating = 1.05;
      break;
    case 2:
      elevationRating = 1.1;
      break;
    case 3:
      elevationRating = 1.15;
      break;
    case 4:
      elevationRating = 1.2;
      break;
    case 5:
      elevationRating = 1.25;
      break;
    case 6:
      elevationRating = 1.3;
      break;
    case 7:
      elevationRating = 1.35;
      break;
    case 8:
      elevationRating = 1.4;
      break;
    case 9:
      elevationRating = 1.45;
      break;
    case 10:
      elevationRating = 1.5;
      break;
    default:
      elevationRating = 1;
  }

  console.log(distanceRating, foliageRating, elevationRating);

  rating = distanceRating * foliageRating * elevationRating;

  return rating;
};

module.exports = getCourseRating;
