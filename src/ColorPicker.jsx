import React, { useState } from 'react'

const ColorPicker = () => {

  const [color, setcolor] = useState("#FFFFFF")
    const handlecolor = (event) =>{
      setcolor(event.target.value)
    }
    
  return (
    <div className='container'>
      <h1>Color Picker</h1>
      <div className='display' style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handlecolor}/>
    </div>
  )
}

export default ColorPicker