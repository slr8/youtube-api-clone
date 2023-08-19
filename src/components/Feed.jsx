import React, { useState } from 'react'
import SideBar from './SideBar'
import RightSide from './RightSide'

const Feed = () => {
    let [selectedCategory, setSelectedCategory] = useState('New')
    return (
        <div className="feedBody">
            <SideBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <RightSide
                selectedCategory={selectedCategory}
            />
        </div>
    )
}

export default Feed