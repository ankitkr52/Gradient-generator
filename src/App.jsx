
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const App = () => {
  const [gradients, setGradients] = useState([])
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear")
  const getHexColorcode = () => {
    const rgb = 256 * 256 * 256;
    const random = Math.random() * rgb
    const int = Math.floor(random)
    const hexCode = int.toString(16)
    const colorhex = hexCode.padEnd(6, "0")
    return `#${colorhex}`
  }
  const generategradients = () => {
    const colors = []
    for (let i = 0; i < num; i++) {
      const color1 = getHexColorcode()
      const color2 = getHexColorcode()
      const degree = Math.floor(Math.random() * 360)
      const degreeString = `${degree}deg`
      if (type === "linear") {
        colors.push({
          gradient: `linear-gradient(${degreeString},${color1},${color2})`,
          css: `background:'linear-gradient(${degreeString},${color1},${color2})'`
        })
      }
      else {
        colors.push({
          gradient: `radial-gradient(circle,${color1},${color2})`,
          css: `background:'radial-gradient(circle,${color1},${color2})'`
        })
      }


    }
    setGradients(colors)

  }
  const onCopy = (css) => {
    navigator.clipboard.writeText(css)
    toast.success("gradient code copied", { position: 'top-right' })
  }
  useEffect(() => {
    generategradients()
  }, [num, type])
  return (
    <div className='min-h-screen bg-gray-600'>
      <div className='w-9/12 mx-auto space-y-9'>
        <div className='flex justify-between p-6 rounded-2xl'
        style={{
          // background:'linear-gradient(351deg,#d848da,#f414ab)'
          background:getHexColorcode()
        }}>
          <h1 className='text-3xl font-bold'>
            🎨 Gradient generator
          </h1>
          <div >
            <input value={num} type="text" placeholder='12' onChange={(e) => setNum(Number(e.target.value))} className='border bg-gray-200 rounded-lg w-[200px] p-2 mr-2' />
            <select value={type} className='border bg-gray-200 rounded-lg w-[100px] p-2' onChange={(e) => setType(e.target.value)}>
              <option value="linear">linear</option>
              <option value="radial">Radial</option>
            </select>
            <button className='px-16 py-2 bg-blue-600  ml-2 rounded-2xl font-medium text-white' onClick={generategradients}>Generate</button>
          </div>
          {/* <button onClick={getHexColorcode}>test</button> */}
          {/* background:'linear-gradient(78deg,#26dca3,#4e18b4)' */}
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {
            gradients.map((items, index) => (

              <div key={index} className='h-[180px] rounded-xl relative'
                style={{
                  background: items.gradient
                }}>
                <button onClick={() => onCopy(items.css)} className='bg-black/55 hover:bg-black text-white rounded absolute bottom-3 right-3 text-xs p-1 py-1 px-2 '>Copy</button>

              </div>
            ))
          }

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default App
