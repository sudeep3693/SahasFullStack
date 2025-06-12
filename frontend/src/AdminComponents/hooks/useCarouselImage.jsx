import useFetch from './useFetch';

const useCarouselImages = () => {
  return useFetch('http://localhost:3001/images/carousel');
};

export default useCarouselImages;
