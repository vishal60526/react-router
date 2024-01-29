import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    function profile(){
 fetch("https://api.github.com/users/vishal60526")
.then((Response)=>(Response.json()))
.then((Response)=>setData(Response))

    }
    
    useEffect(()=>
    profile(),[])
    console.log(data)
  return (
    <>
      <div className=' border-2 w-full min-h-[200px] flex justify-center items-center flex-wrap '>
      <div className=' w-full'><h1 className=' text-center'>{data.login}</h1></div>
      <div className='mt-5'><img src={data.avatar_url} alt="" /></div>
      </div>
    </>
  )
}

export default Github;
