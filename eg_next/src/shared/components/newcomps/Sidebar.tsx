"use client";
/** @jsxImportSource @emotion/react */

import { _ } from "chainedcss"
import { useState } from "react"



const Sidebar = () => {
  console.log("sidebar")
  const [size, setSize] = useState(300)
  return (
    <div {..._.bgBlue300().h`100vh`.absolute().top`0`.left`0`}>
      <div {..._.w`300`.transition`width 0.2s ease-in-out`}>
        <button onClick={() => setSize(size + 50)}>size</button>
        <h1>hi</h1>
      </div>
    </div>
  )
}

export default Sidebar 