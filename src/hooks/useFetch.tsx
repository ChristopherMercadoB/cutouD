import React, { useEffect, useState } from "react";

export interface BaseApi<T> {
  data: T | null;
  hasError: boolean;
  isLoading: boolean;
  error: {
    errorMessage: string;
    errorStatus: number;
  } | null;
}

const useFetch = <T,>(url:string) => {
  const [state, setstate] = useState<BaseApi<T>>({
    data: null,
    hasError: false,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    const res = await fetch(
      url
    );
    if (!res.ok) {
      setstate({
        data: null,
        hasError: true,
        isLoading: false,
        error: {
          errorMessage: res.statusText,
          errorStatus: res.status,
        },
      });

      const data = await res.json();
      setstate({
        data: data,
        hasError: false,
        isLoading: false,
        error: null,
      });
    }
  };

  useEffect(()=>{
    getFetch()
  }, [])
  return {
    data: state.data,
    isLoading: state.isLoading
  };
};

export default useFetch;
