import BlogList from "./BlogList";
import useFetch from "./UseFetch";
const Home = () => {
 const {data:blogs,isLoading,error}=useFetch("http://localhost:8000/blogs")

  /*  //DELETE BUTTON
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }; */
  //fetch data
  

  return (
    <div className="home">
        {error && <div>{error}</div> }
      {isLoading && <div>loading ..</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs" /*  handleDelete={handleDelete} */
        />
      )}
    </div>
  );
};

export default Home;
