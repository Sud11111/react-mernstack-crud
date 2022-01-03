import React,{useState, useEffect} from 'react';
import axios from 'axios'

function PostList(){
  const [posts, setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/posts')
    .then((response)=>{
      setData(response.data)
  //    const data = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>
    <h1>Posts</h1>
    {posts.map((post) => (
      <div key="_id">
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.content}</p>
      </div>
    ))}
    </>
  )
}
export default PostList
