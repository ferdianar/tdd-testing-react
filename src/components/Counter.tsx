import React, { useState } from 'react'

const Counter: React.FunctionComponent = () => {
       const [count, setCount] = useState(22)
       return (
              <React.Fragment>
                     <h1 className="text-4xl font-bold text-blue-800">Counter : {count}</h1>
              </React.Fragment>
       )
}

export default Counter
