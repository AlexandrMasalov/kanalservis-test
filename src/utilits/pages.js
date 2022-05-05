export default function pages(dataBase, numPage = 1) {

  let arr = [];
  for (let i = 0; i <= numPage; i = i + 2) {
      arr = [];
      arr.push(dataBase[i]);
      arr.push(dataBase[i + 1]);
      console.log(i, i + 1);
  }

  return arr;
}
