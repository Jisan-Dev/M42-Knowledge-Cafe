import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../blog';

const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json').then((res) => res.json().then((data) => setBlogs(data)));
  }, []);

  return (
    <div className="md:w-2/3 font-exo">
      <span className="text-neutral-900 text-lg font-semibold bg-neutral-900 bg-opacity-5 p-4 rounded-lg">Blogs: {blogs.length} </span>
      <div className="mt-4">
        {blogs.map((blog) => (
          <Blog handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
