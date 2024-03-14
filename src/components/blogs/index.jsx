import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json').then((res) => res.json().then((data) => setBlogs(data)));
  }, []);

  return (
    <div className="md:w-2/3 font-exo">
      <h2>Blogs: {blogs.length} </h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
