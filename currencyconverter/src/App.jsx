import { useState } from 'react'
import{InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  const useCurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(useCurrencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to]) 
  }

  
  return (
    <>
  <h1 className='text-3xl bg-orange-500'>currency</h1>
    </>
  )
}

export default App
