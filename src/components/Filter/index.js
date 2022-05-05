export default function Filter ({ data }) {

  return (
    <>
      <div>
        <select>
          { data.map(<option value=""></option>)}
        </select>
      </div>
    </>
  )
}
