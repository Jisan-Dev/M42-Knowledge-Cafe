import PropTypes from 'prop-types';
import { IoBookmarksOutline, IoBookmarksSharp } from 'react-icons/io5';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime, bookmarks }) => {
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === blog.id);

  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="border-b pb-9 mb-10">
      <img className="w-full" src={cover} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          <img src={author_img} className="w-12" alt="author image" />
          <div>
            <p className="text-neutral-900 text-xl font-bold"> {author} </p>
            <p className="text-neutral-900 text-opacity-60 text-sm font-semibold"> {posted_date} </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-neutral-900 text-opacity-60 text-lg font-medium">{reading_time} min read</p>
          {!isBookmarked ? (
            <button onClick={() => handleAddToBookmark(blog)}>
              <IoBookmarksOutline />
            </button>
          ) : (
            <IoBookmarksSharp />
          )}
        </div>
      </div>
      <h2 className=" text-neutral-900 text-2xl font-bold">{title}</h2>
      {hashtags.map((tag, i) => (
        <span className="mr-2 text-neutral-900 text-opacity-60 text-xl font-medium" key={i}>
          <a href="#">#{tag}</a>
        </span>
      ))}
      <div>
        <button onClick={() => handleReadingTime(reading_time)} className="mt-4 text-indigo-600 text-xl font-semibold underline">
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
};
