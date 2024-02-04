import React from 'react'
export const getStaticPaths=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(engineer =>{
  return {
    params: {id: engineer.id.toString()}
  }
  })
  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async(context)=>{
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

 return {
  props: {engineer:data}
 } 
}

const Details = ({engineer})=> {
  return (
    <div>
      <h1 className='text-4xl'>{engineer.name}</h1>
      <p>{engineer.email}</p>
      <p>{engineer.website}</p>
      <p>{engineer.address.city}</p>

    </div>
  )
} 

export default Details 