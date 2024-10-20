"use client";
import { useState, useEffect } from "react";

export const useStore = (
  // store: (callback: (state) => unknown) => unknown,
  // callback: (state: T) => F
  store,
  callback
) => {
  const result = store(callback);
  const [data, setData] = useState();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
