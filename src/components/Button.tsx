import React from 'react'

const PrimaryButton: React.FunctionComponent = () => {
       return (
              <React.Fragment>
                     <button className='w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-700 text-white hover:bg-blue-900'>Increment Button</button>
              </React.Fragment>
       )
}

const SecondaryButton: React.FunctionComponent = () => {
       return (
              <React.Fragment>
                     <button className='w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-200'>Increment Button</button>
              </React.Fragment>
       )
}

export { PrimaryButton, SecondaryButton }
