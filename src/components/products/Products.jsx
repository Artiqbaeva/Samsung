import React from 'react'
const Products = ({title, main,about, image, lists }) => {
  return (
    <div style={{background: `url(${image}) no-repeat center/cover `}} className='products container h-screen text-black text-center p-2 '>
       <div >
            <h2 className=''>{title}</h2>
           <ul className='flex gap-14 items-center justify-center '>
               {
                lists?.map((list, index)=>(
                    <li key={index}>{list}</li>
                ))
               }
           </ul>
       </div>       
       <div>
            <div>
            <h1>{main}</h1>
            <p>{about}</p>
            </div>
               <div className=''>
                <a href="">Shop more phone deals</a>
                 <button>Buy now</button>
               </div>
       </div>    
    </div>
  )
}

export default Products