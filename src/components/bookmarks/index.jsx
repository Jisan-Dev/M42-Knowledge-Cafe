import PropTypes from 'prop-types';
import Bookmark from '../bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 font-exo space-y-6">
      <div className="bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600">
        <h3 className="text-indigo-600 text-2xl font-bold text-center py-5 px-12">Spent time on read : {readingTime} mins </h3>
      </div>
      <div className=" bg-neutral-900 bg-opacity-5 rounded-lg p-7">
        <h2 className="text-neutral-900 text-2xl font-bold">Bookmarked Blogs: {bookmarks.length} </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
