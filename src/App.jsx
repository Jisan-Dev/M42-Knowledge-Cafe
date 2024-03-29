import { useState } from 'react';
import Blogs from './components/blogs';
import Bookmarks from './components/bookmarks';
import Header from './components/header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const isBookmarked = bookmarks.some((item) => item.id === blog.id);

    if (!isBookmarked) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
    console.log('reading time', time);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <div className="md:flex gap-6">
          <Blogs handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark} bookmarks={bookmarks} />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </main>
    </>
  );
}

export default App;
