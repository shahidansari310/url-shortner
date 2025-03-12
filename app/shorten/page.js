"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [short, setshort] = useState("")
    const [generate, setGenerate] = useState(false)

    const handlechange=()=>{

    }
  return (
    <div className='mx-auto max-w-lg bg-purple-50 my-16 p-8 rounded-lg'>
      <h1>Generate your short Url</h1>
      <div>
        <input type="url" placeholder='Enter your Url' onChange={handlechange} />
        <input type="url" placeholder='Enter your Prefered short Url'  onChange={handlechange}/>
        <button>Generate</button>
      </div>
    </div>
  )
}

export default Shorten
