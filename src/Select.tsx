
type Props = {shareData: (color: string)=>void}

export default function Select(props: Props) {
  return (

<select onChange ={(event) => props.shareData(event.target.value) }>
  
    <option value="red" >red</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
</select>
    )
}