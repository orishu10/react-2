
type Props = {
  color: string
}

export default function Card(props: Props) {
  return (
    <>
    <div style={{backgroundColor:props.color}}>
    <h1>Card</h1>
    <img style={{height:'100px'}} src="https://rb.gy/v7w9c" alt="" /> 
    <p>this is a hand of cards</p>
    </div>
    </>
    )
}