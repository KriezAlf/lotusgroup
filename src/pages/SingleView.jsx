import React, {useState, useEffect, useContext} from 'react'
import { SearchContext } from '../context/search'

const View = () =>{
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
  useEffect(()=>{
    if(search.animeData === undefined || search.animeData.length === 0){
      try{
        search.setData(JSON.parse(localStorage.getItem('myData')))
        setDataExists(true)
      } catch (error){
        console.log(error);
        setDataExists(false);
      }
    }
  }, [search]);

  return <div>
    {(dataExists && 'Data Exists')|| 'Data does not exist'}
  </div>;
};

export default View;
