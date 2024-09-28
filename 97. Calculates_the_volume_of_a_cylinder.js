//*------ calculates the volume of a cylinder

//? This program calculates the volume of a cylinder

function calculateVolume(radius, height) {
  const pi = 3.14159;
  const volume = pi * radius * radius * height;
  console.log(volume);
  return volume;
}

console.log(calculateVolume(5, 2));
