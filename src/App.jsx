import Blogs from './components/blogs';
import Bookmarks from './components/bookmarks';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div className="md:flex">
          <Blogs />
          <Bookmarks />
        </div>
      </main>
    </>
  );
}

export default App;
