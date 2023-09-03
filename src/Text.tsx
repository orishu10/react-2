

export default function Text(props: {visible: boolean}) {
  return (
    props.visible? <p>text</p> : null
  )
}