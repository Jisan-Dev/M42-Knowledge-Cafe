import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h2>Each blog</h2>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
