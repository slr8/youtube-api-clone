import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from "react-router-dom";


const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => {
                setVideos(data.items)
                console.log(data.items)
            })
        console.log(videos)
    }, [searchTerm]);
    return (
        <div className="rightSide">
            <div className="header">
                <h1>Search Result For: <span style={{ color: 'red' }}>{searchTerm}</span> Videos</h1>
            </div>
            <Videos videos={videos} />
        </div>
    )
}

export default SearchFeed