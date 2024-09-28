//*----- convert feet to meters

//? To convert feet to meters in javascript,you can use the following conversion formula:
//? Meters=Feet*0.3448

function convertFeetToMeters(feet) {
  let meters = feet * 0.3048;
  return meters;
}
console.log(convertFeetToMeters(10));
