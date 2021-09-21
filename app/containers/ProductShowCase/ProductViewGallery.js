import React from 'react';
import ReactImageGallery from 'react-image-gallery';

const ProductViewGallery = (props) => {
  const images = [
    {
      original: props.images.featuredImage.original.imagePath,
      thumbnail: props.images.featuredImage.thumb.imagePath
    }
  ];
  return (
    <ReactImageGallery items={images} showPlayButton={false} />
  )
}
export default ProductViewGallery;