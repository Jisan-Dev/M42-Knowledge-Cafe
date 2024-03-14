import PropTypes from 'prop-types';
import bookmark from '../../assets/images/bookmark.png';

const Blog = ({ blog }) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="border-b pb-9 mb-10">
      <img className="w-full" src={cover} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          <img src={author_img} className="w-14" alt="author image" />
          <div>
            <p className="text-neutral-900 text-2xl font-bold"> {author} </p>
            <p className="text-neutral-900 text-opacity-60 text-base font-semibold"> {posted_date} </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-neutral-900 text-opacity-60 text-xl font-medium">{reading_time} min read</p>
          <button>
            <img src={bookmark} alt="bookmark icon" />
          </button>
        </div>
      </div>
      <h2 className="w-[737px] text-neutral-900 text-[40px] font-bold leading-[64px]">{title}</h2>
      {hashtags.map((tag, i) => (
        <span className="mr-2 text-neutral-900 text-opacity-60 text-xl font-medium" key={i}>
          <a href="#">#{tag}</a>
        </span>
      ))}
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
