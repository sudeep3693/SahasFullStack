import useFetch from './useFetch';

const useGalleryImages = () => {
  return useFetch('http://localhost:3001/images/carousel');
};

export default useGalleryImages;
