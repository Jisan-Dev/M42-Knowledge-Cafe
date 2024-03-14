import Blogs from './components/blogs';
import Bookmarks from './components/bookmarks';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <div className="md:flex gap-6">
          <Blogs />
          <Bookmarks />
        </div>
      </main>
    </>
  );
}

export default App;
