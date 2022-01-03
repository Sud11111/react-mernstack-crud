import React from 'react';
import axios from 'axios'

class EnterPost extends React.Component {
state={
  title:'',
  author:'',
  content:'',
};
handleChange=event=>{
  this.setState({
    [event.target.name]:event.target.value,
  })
}
handleSubmit=event=>{
  event.preventDefault()
  const post ={
    title: this.state.title,
    author: this.state.author,
    content: this.state.content
  }

axios.post('http://localhost:3001/posts',post)
  .then(res=>{
    window.location="/retrieve"
  })
}


render() {
  return(
    <>
    <form onSubmit={this.handleSubmit}>
    <label>Title:
    <input type="text" name= "title" onChange={this.handleChange}/>
    </label>
    <label>Author:
    <input type="text" name= "author" onChange={this.handleChange}/>
    </label>
    <label>Content:
    <input type="text" name= "content" onChange={this.handleChange}/>
    </label>
    <button type= "submit">Post</button>
    </form>
    </>
  )
}
}
export default EnterPost;
