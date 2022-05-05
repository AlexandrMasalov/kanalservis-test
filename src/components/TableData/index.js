import randomID from '../../utilits/randomID';


export default function TableData ({ data }) {
  return(
    <tr key={data.id + randomID}>
      <td key={data.id + '23'}>{data.date}</td>
      <td key={data.id + '24'}>{data.name}</td>
      <td key={data.id + '25'}>{data.amount}</td>
      <td key={data.id + '26'}>{data.distance}</td>
    </tr>

  )
}
