import { useRef } from "react";

type Props = {};

export default function Counter({}: Props) {
  const myRef = useRef<HTMLDivElement>(null);
  const myCounter = useRef(0);
  return (
    <>
     <div ref={myRef}>{myCounter.current}</div>
      <button
        onClick={(e) => {
          if (myRef.current) {
            myCounter.current+=1
            myRef.current.innerText = myCounter.current.toString();
          }
        }}
      >add</button>
<button onClick={(e)=>{myRef.current!.innerText = "0"}} >reset</button>
    </>
  );
}
