import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [search,setSearch] = useState("");
  const [sort, setSort] = useState ("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addtocartHandler= () => {}

  const isNextPage = page > 1;
  const isPrevPage = page < 4;

  return (
    
    <div className='p-8 flex flex-row justify-start items-stretch gap-8 min-h-[calc(100vh-6.5vh)]'> 
      <aside className='min-w-80 shadow-lg p-8 flex flex-col justify-start items-stretch gap-4'>
        <h2 className='my-8 uppercase tracking-wide text-3xl'>Filters</h2>
        <div >
          <h4 >Sort</h4>
          <select value={sort} onChange={e=>setSort(e.target.value)} className='w-full p-4 bg-white outline-none border-2 border-black rounded-md my-2'>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price(High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={e=>setCategory(e.target.value)}
            className='w-full p-4 bg-white outline-none border-2 border-black rounded-md my-2'>
            <option value="">All</option>
            <option value="snc">Snacks</option>
            <option value="bvr">Beverages</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input 
          type="range"
          min={10}
          max={200}
          value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}
          className='w-full p-4 bg-white border-none outline-none border-2 border-black rounded-md my-2'/>
        </div>
      </aside>

      <main className='w-full py-8'> 
        <h1 className='tracking-wide uppercase font-semibold text-4xl ml-2'>Products</h1>
        <input type="text" placeholder='Search by name...' value={search} onChange={(e) => setSearch(e.target.value)}
        className='w-1/2 rounded-md my-4 text-xl block border-2 border-black p-2 ml-2'/>
        <div className='flex justify-start items-start flex-wrap h-[calc(100%-10rem)]
        overflow-y-auto'>
        <ProductCard productId={'rhse'} photo={'src/assets/images/fries.jpeg'} name={'Fries'} price={30} stock={10} handler={addtocartHandler}/>
        </div>
      

       <article className='flex justify-center items-center gap-2'>
        <button onClick={()=>{setPage((prev)=> prev-1)}}
        disabled={isPrevPage} className='flex justify-center items-center cursor-pointer border-none outline-none p-2 bg-red-600 rounded-md disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-500'>Prev</button>
        <span>
          {page}  of  {4}
        </span>
        <button onClick={()=>{setPage((prev)=> prev+1)}}
          disabled={isNextPage}
          className='flex justify-center items-center cursor-pointer border-none outline-none p-2 bg-red-600 rounded-md disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-500'>Next</button>
       </article>
      </main>
    </div>
  )
}

export default Search