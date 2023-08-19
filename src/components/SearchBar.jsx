import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    let [input, setInput] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input) {
            navigate(`/search/${input}`);
            setInput('');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder='Search...'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }} />
                <button type="submit" className='formButton'>
                    <SearchIcon />
                </button>
            </form>
        </>
    )
}

export default SearchBar