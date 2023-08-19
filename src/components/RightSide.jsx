import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromApi';

const RightSide = ({ selectedCategory }) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideos(data.items)
                console.log(data.items)
            })
        console.log(videos)
    }, [selectedCategory]);
    return (
        <div className="rightSide">
            <div className="header">
                <h1>{selectedCategory} <span style={{ color: 'red' }}>Videos</span></h1>
            </div>
            <Videos videos={videos} />
        </div>
    )
}

export default RightSide