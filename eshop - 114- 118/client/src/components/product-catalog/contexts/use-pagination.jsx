import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchParamsToObject } from '../helpers/search-params-helpers';

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const syncToUrlParams = () => {
    const urlParams = searchParamsToObject(searchParams);
    urlParams.limit = limit;
    urlParams.page = page;
    setSearchParams(urlParams);
  };

  useEffect(() => {
    const limitParam = searchParams.get('limit');
    if (limitParam) {
      setLimit(limitParam);
    }
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(pageParam);
    }
  }, []);

  useEffect(() => {
    syncToUrlParams();
  }, [limit, page]);

  return { limit, page };
};

export default usePagination;
