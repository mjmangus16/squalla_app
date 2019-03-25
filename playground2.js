// const getCourseRating = (distance, foliage, elevation, holes) => {
//   let rating;
//   let distanceRating;

//   if (distance === "Very Short") {
//     distanceRating = 20;
//   } else if (distance === "Short") {
//     distanceRating = 30;
//   } else if (distance === "Medium") {
//     distanceRating = 40;
//   } else if (distance === "Long") {
//     distanceRating = 50;
//   } else if (distance === "Very Long") {
//     distanceRating = 60;
//   }

//   let foliageRating, elevationRating;

//   if (foliage === 0) {
//     foliageRating = 1.0;
//   } else if (foliage === 1) {
//     foliageRating = 1.1;
//   } else if (foliage === 2) {
//     foliageRating = 1.2;
//   } else if (foliage === 3) {
//     foliageRating = 1.3;
//   } else if (foliage === 4) {
//     foliageRating = 1.4;
//   } else if (foliage === 5) {
//     foliageRating = 1.5;
//   } else if (foliage === 6) {
//     foliageRating = 1.6;
//   } else if (foliage === 7) {
//     foliageRating = 1.7;
//   } else if (foliage === 8) {
//     foliageRating = 1.8;
//   } else if (foliage === 9) {
//     foliageRating = 1.9;
//   } else if (foliage === 10) {
//     foliageRating = 2;
//   }

//   if (elevation === 0) {
//     elevationRating = 1.0;
//   } else if (elevation === 1) {
//     elevationRating = 1.05;
//   } else if (elevation === 2) {
//     elevationRating = 1.15;
//   } else if (elevation === 3) {
//     elevationRating = 1.2;
//   } else if (elevation === 4) {
//     elevationRating = 1.25;
//   } else if (elevation === 5) {
//     elevationRating = 1.3;
//   } else if (elevation === 6) {
//     elevationRating = 1.35;
//   } else if (elevation === 7) {
//     elevationRating = 1.4;
//   } else if (elevation === 8) {
//     elevationRating = 1.45;
//   } else if (elevation === 9) {
//     elevationRating = 1.5;
//   } else if (elevation === 10) {
//     elevationRating = 1.55;
//   }

//   rating = distanceRating * foliageRating * elevationRating;

//   return rating;
// };

// getCourseRating("Medium", 6, 6, 27);
// let j = 50;
// let sum = 0;
// for (let i = 0; i < 20; i++) {
//   j = j + 100;
//   sum = sum + j;
//   console.log(sum);
// }

let newSet = new Set([1, 2, 3, 3]);

console.log(newSet);
