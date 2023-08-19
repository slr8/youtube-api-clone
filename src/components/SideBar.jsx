import React from 'react'
import { categories } from '../utils/constants'
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="sideBar">
            {categories.map((category) => (
                <button
                    className="categoryBtn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        backgroundColor: category.name === selectedCategory && "#FC1503",
                    }}
                    key={category.name}
                >
                    <span className='sideBarFirstSpan' style={{ color: category.name === selectedCategory ? "white" : "red" }}>
                        {category.icon}
                    </span>
                    <span className='sideBarSecondSpan'>
                        {category.name}
                    </span>
                </button>
            ))}
        </div>
    )
}

export default SideBar