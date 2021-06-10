import React, { useState, useRef, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetch = (url: string, data?: any, type?: string) => {
  const isMounted = useRef(true);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getData(url);

        if (isMounted.current) {
          setstate({ data: res, loading: false, error: null });
        }
      } catch (error) {}
    };

    getInfo();
  }, [url]);

  return {
    state,
  };
};
