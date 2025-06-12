import useFetch from './useFetch';

const useNoticeImages = () => {
  return useFetch('http://localhost:3001/notice');
};

export default useNoticeImages;
