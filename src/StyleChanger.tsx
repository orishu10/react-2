import React, { useRef } from 'react'

type Props = {}
export default function StyleChanger({}: Props) {
    const refStyledivA  = useRef <HTMLDivElement[]>([])
    // const refStyledivA = useRef<HTMLDivElement>(null)
  return (
    <>
    <div ref={(el: HTMLDivElement) => (refStyledivA.current[0] = el)} style={{backgroundColor : 'blue'}} >im a blue rectengle </div>
    <div ref={(el: HTMLDivElement) => (refStyledivA.current[1] = el)} style={{backgroundColor : 'red'}} >im a red rectengle </div>
    <button onClick={(e)=>{
        refStyledivA.current[0]!.style.backgroundColor = 'white'
        refStyledivA.current[1]!.style.backgroundColor = 'white'
    }} > change background</button>
    <button onClick={(e)=>{
        [refStyledivA.current[0]!.innerText, refStyledivA.current[1]!.innerText] = [refStyledivA.current[1]!.innerText, refStyledivA.current[0]!.innerText]
    }} > switch text</button>
    </>
  )
}