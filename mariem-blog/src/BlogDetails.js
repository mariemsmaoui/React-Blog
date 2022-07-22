import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = UseFetch("http://localhost:8000/blogs/" + id);
  const history =useHistory();
  //delete
const hanandleClick=()=>{
fetch('http://localhost:8000/blogs/'+id ,{
   method:'DELETE'
}).then(()=>{
   history.push('/');

})
}
  return (
    <div className="blog-details">
      {isLoading && <div>loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by :{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={hanandleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
