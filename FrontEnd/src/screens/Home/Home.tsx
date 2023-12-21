import { useHome ,HomeProps } from './useHome'; 
import React from 'react';
import "./Home.css"


const Home: React.FC<HomeProps> = (props) => {

    const {} = useHome(props)

  return (
<>
<div className='MyHome'>

Home 
</div>
</>
   
  )
}

export default Home
