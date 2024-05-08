import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Instruction from '../component/Instruction'
import Quiz from '../component/Quiz'
import Result from '../component/Result'
import Home from '../pages/Home'
import { useContext } from 'react'
import { MyContext } from '../contextapi/authContextProvider'

const RoutesCom = () => {
  const {auth}=useContext(MyContext)

  return (
    <div>
      <Routes>

        <Route path="/" element={<Home/>}/>
        { <Route path="/instruction" element={<Instruction/>}/>}
        <Route path="/quiz" element={ <Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  )
}

export default RoutesCom
