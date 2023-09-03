import { useState } from 'react'
import './App.css'
import Text from './Text'
// import Card from './Card'
// import Select from './Select'
import Counter from './Counter'
import StyleChanger from './StyleChanger'
import Users from './Users'
import UsersFromServer from './UsersFromServer'

function App() {
  const [isText, change] = useState(true)
//  const [color , setColor] = useState("red")
  return (
    <>
      <div>
        <Text visible = {isText}/>
        <button onClick={() => change((prev) => !prev )}>
         change 
        </button>
        {/* <Card color={color}/> */}
        <Counter  />
        <StyleChanger/>
        <Users/>
        <UsersFromServer/>
        {/* <Select shareDate={(color:string)=>setColor(color)} /> */}
      </div>
    </>
  )
}

export default App
