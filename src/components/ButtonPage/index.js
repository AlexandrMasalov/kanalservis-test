import randomID from '../../utilits/randomID';

export default function ButtonPage (props) {
  console.log(props);
  const { number, changePage } = props;
  let arr = [];
  const buttons = Math.floor(number / 2);

  for (let i = 1; i <= buttons; i++) {
    arr.push(String(i));
  }
  
  return arr.map((num) => <button key={randomID + num} value={num} onClick={changePage}>{num}</button>)
}
