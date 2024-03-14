import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      <h3 className="text-neutral-900 text-lg font-semibold">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
