import { useEffect, useState } from "react";
//costom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const aboartCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: aboartCont.signal })
        .then((res) => {
          console.log(res);

          if (!res.ok) {
            throw Error("could not fetch data!");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsloading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch ab");
          } else {
            setIsloading(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => {
      aboartCont.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
