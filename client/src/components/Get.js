import {useState, useEffect} from "react";

export default function useFetch(url) {
  //Initialize State with an empty array
  const [data, setData] = useState([]);
  //State for loading
  const [loading, setLoading] = useState(true);

  function fetchUrl() {
    fetch(url).then(res => res.json())
      .then(response => {
        setData(response[0]);
        setLoading(false);
      });
  }

  useEffect(() => {
   
    fetchUrl();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [data, loading];
}