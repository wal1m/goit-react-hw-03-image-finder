import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ImageGallery: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '16px',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const ImageGallery = ({ imageList }) => {
  const classes = useStyles();
  return (
    <ul className={classes.ImageGallery}>
      {imageList.map(image => (
        <ImageGalleryItem
          url={image.webformatURL}
          titel={image.type}
          key={image.id}
          // contact={contact}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
