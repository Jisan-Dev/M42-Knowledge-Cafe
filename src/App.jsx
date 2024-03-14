import { useState } from 'react';
import Blogs from './components/blogs';
import Bookmarks from './components/bookmarks';
import Header from './components/header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <div className="md:flex gap-6">
          <Blogs handleAddToBookmark={handleAddToBookmark} />
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </main>
    </>
  );
}

export default App;
