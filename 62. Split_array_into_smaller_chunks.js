//*------ split array into smaller chunks

//? To split an array into smaller chunks in javascript,you can use a loop and the slice() method.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function chunksArray(arr, chunkSize) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  console.log(chunks);
  return chunks;
}
chunksArray(arr, 3);
