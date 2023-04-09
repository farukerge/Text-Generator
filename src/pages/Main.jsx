import React from 'react'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Text from '../components/Text/Text'

const Main = () => {
  return (
    <div  className=' bg-secondary  w-2/4 mx-auto justify-center p-8  rounded-lg'>
          <Header />
          <Form />
          <Text />
    </div>
  )
}

export default Main