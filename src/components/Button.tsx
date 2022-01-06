import React from 'react'

const PrimaryButton: React.FunctionComponent = () => {
       return (
              <React.Fragment>
                     <button id='primary-button' className='mr-1 w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-700 text-white hover:bg-blue-900'>Primary Button</button>
              </React.Fragment>
       )
}

const SecondaryButton: React.FunctionComponent = () => {
       return (
              <React.Fragment>
                     <button id='secondary-button' className='secondary-button ml-1 w-fit py-2 px-4 text-sm font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100'>Secondary Button</button>
              </React.Fragment>
       )
}

export { PrimaryButton, SecondaryButton }
