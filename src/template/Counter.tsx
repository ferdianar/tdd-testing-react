import React, { useState } from 'react'

const Counter = () => {
       const [count, setCount] = useState(22)
       const IncrementHandler = () => {
              setCount(count + 1)
       }
       const DecrementHandler = () => {
              setCount(count - 1)
       }
       return (
              <React.Fragment>
                     <div className="CardCounter bg-blue-200 rounded-lg p-4 w-fit">
                            <div className="flex justify-between items-center">
                                   <h1 className="text-4xl font-bold text-blue-800 pb-4">Counter</h1>
                                   <p className="text-4xl font-bold text-blue-800 pb-4" id="counter-values">{count}</p>
                            </div>
                            <button onClick={IncrementHandler} id='primary-button' className='mr-1 w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-700 text-white hover:bg-blue-900'>Primary Button</button>
                            <button onClick={DecrementHandler} id='secondary-button' className='secondary-button ml-1 w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100'>Secondary Button</button>
                     </div>
              </React.Fragment>
       )
}

export default Counter
