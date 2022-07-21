import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isLoading, setIsloading] = useState(true);
  /*  //DELETE BUTTON
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }; */
  //fetch data
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsloading(false)
      });
  }, []);

  return (
    <div className="home">
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
