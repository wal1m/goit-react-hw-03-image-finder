import './App.css';
import { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import { getImages } from './utils/pixabayAPI';
import Button from './components/Button/Button';

function App() {
  const [imageList, setImageList] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   getImages('')
  //     .then(result => setImageList(result.hits))
  //     .catch(error => console.log(error.message));
  // }, []);

  const handleFormSubmit = search => {
    setImageList([]);
    setQuery(search);
    // setImageList(() => setImageList([]));
    setPage(1);
  };

  const handleAddPage = () => {
    setPage(page + 1);
    setImageList(prevState => [...prevState, ...imageList]);
  };

    useEffect(() => {
      if (query !== '') {
        getImages(query, page)
          .then(result => setImageList(result.hits))
          .catch(error => console.log(error.message));
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, [query, page]);
  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery imageList={imageList} />
      {imageList.length > 0 && <Button onButton={handleAddPage} />}
      {/* <Button onButton={handleAddPage} /> */}
    </div>
  );
}

export default App;
