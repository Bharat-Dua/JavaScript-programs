//*----- Replace characters of a string

//? This program prompts the user to enter a string, a target character,and a replacement character.It then replaces all occurences of the target character wtih the replacement character and displays the modified string.

function repStr(str, target, rep) {
  let replaceStr = str.replaceAll(target, rep);
  console.log(replaceStr);
}
repStr("full stack programmer", "programmer", "developer");
