//*------ check whether a string starts and ends with a certain characters

//? This program check whether a string starts and end with certain characters using the startsWith and endsWith methods in javascript.

function startAndEnds(str, s, e) {
  if (str.length > 0) {
    let startsWith = str.startsWith(s);
    let endsWith = str.endsWith(e);

    if (startsWith && endsWith) {
      console.log(
        `The string "${str}" starts with "${s}" and ends with "${e}".`
      );
    } else {
      console.log(
        `The string "${str}" does not start with "${s}" or does not end with "${e}".`
      );
    }
  } else {
    console.log("Please enter a valid string.");
  }
}

startAndEnds("There is no tomorrow There", "There", "There");
