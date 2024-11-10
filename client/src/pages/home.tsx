import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const addtocartHandler=()=>{}
  return (
    <div className='p-8 flex flex-col w-full h-[calc(100vh-4rem)]'>
      {/* Background Image Section */}
      <section className="w-full h-60 mx-auto bg-[url('/src/assets/images/hero.webp')] bg-cover bg-center">
        {/* Optional Content inside the section */}
      </section>
      
      <h1 className="text-2xl font-semibold mt-4 flex justify-between items-center">Recommended Dishes  
        <Link to="/search">More</Link>
      </h1>
      <main className='w-full flex flex-1 overflow-x-auto gap-4 '>
         <ProductCard productId={'rhse'} photo={'src/assets/images/fries.jpeg'} name={'Fries'} price={30} stock={10} handler={addtocartHandler}/>
      </main>
    </div>
  )
}

export default Home
