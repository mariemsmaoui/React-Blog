import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my website",
      body: "hello and welcome here",
      author: "mario",
      id: 1,
    },
    {
      title: "web developement tips",
      body: "hello here",
      author: "max",
      id: 2,
    },
    {
      title: "Web developement website",
      body: "welcome here",
      author: "maria",
      id: 3,
    },
  ]);
  const [name, setName] = useState("mariam");
  //DELETE BUTTON
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("useffect run !");
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      />
      <button onClick={() => setName("eya")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
