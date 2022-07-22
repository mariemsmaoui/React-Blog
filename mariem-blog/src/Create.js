import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title , setTitle]=useState('');
    const [body , setBody]=useState('');
    const [author , setAuthor]=useState('mario');
    const [isPending , setIsPending]=useState(false);

    //for redirecting to home page when adding new blog
    const history =useHistory();


//add button
    const hundleSubmit=(e)=>{
    e.preventDefault()
    const blog ={title,body,author}
    //loading
    setIsPending(true)
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log("blog added");
        //when we finish
        setIsPending(false)
        //history.go(-1)
        history.push('/');

    })
}
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit ={hundleSubmit}>
        <label>blog title:</label>
        <input type="text" 
        required 
        value={title}
        onChange={(e)=>setTitle(e.target.value)
        }/>

        <label>blog body:</label>
        <textarea type="text" 
        required
        value={body} 
        onChange={(e)=>setBody(e.target.value)}/>

        <label>blog author:</label>
        <select 
        value ={author}
        onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoroshi">yoroshi</option>
        </select>
        {!isPending&& <button>Add blog</button>}
        {isPending&& <button disabled>Adding blog ..</button>}

      </form>
    </div>
  );
};

export default Create;
