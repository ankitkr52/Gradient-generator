import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear")
  const getHexColorcode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb
    const int = Math.floor(random)
    console.log(int)
  }
  return (
    <div className='min-h-screen bg-gray-600'>
      <div className='w-9/12 mx-auto'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>
            🎨 Gradient generator
          </h1>
          <div >
            <input value={num} type="text" placeholder='12' onChange={(e) => setNum(Number(e.target.value))} className='border bg-gray-200 rounded-lg w-[200px] p-2 mr-2' />
            <select value={type} className='border bg-gray-200 rounded-lg w-[100px] p-2' onChange={(e) => setType(e.target.value)}>
              <option value="linear">linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
          <button onClick={getHexColorcode}>test</button>
        </div>

      </div>

    </div>
  )
}

export default App
