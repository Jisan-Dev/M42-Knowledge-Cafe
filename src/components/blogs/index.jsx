import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../blog';

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json').then((res) => res.json().then((data) => setBlogs(data)));
  }, []);

  return (
    <div className="md:w-2/3 font-exo">
      <h2>Blogs: {blogs.length} </h2>
      {blogs.map((blog) => (
        <Blog handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};
