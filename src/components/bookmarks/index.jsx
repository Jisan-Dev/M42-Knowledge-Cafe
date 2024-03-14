import PropTypes from 'prop-types';
import Bookmark from '../bookmark';
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 font-exo">
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
};

export default Bookmarks;
