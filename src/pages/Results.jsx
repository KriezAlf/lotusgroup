import { Heading } from "@chakra-ui/react"
import React, {useContext, useEffect} from 'react'
import { SearchContext } from '../context/search'

const Results=()=>{
    const search = useContext(SearchContext);
    useEffect(()=>{
        search.search('Boruto').then((data)=>{
            console.log(data);
        });
    }, [search]);
  return (
    <div className="results">
        <Heading my="30px" p="10px">Results</Heading>
        </div>
  )
}

export default Results;
