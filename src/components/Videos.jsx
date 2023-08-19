import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Videos = ({ videos }) => {
    return (
        <div className="videos" style={{ color: 'white' }}>
            <div className="videosBoxes">
                {videos.map(e =>
                (
                    <>
                        {
                            e.id.videoId &&
                            <div className="videoBox" style={{ backgroundColor: '#303030' }} key={e.id}>
                                <div className="videoImage">
                                    <img className='thumbnail' src={e.snippet.thumbnails.high.url} />
                                </div>
                                <div className="details">
                                    <div className="title">
                                        <span>{e.snippet.title}</span>
                                    </div>
                                    <div className="channelName">
                                        <span>{e.snippet.channelTitle}
                                            <CheckCircleIcon
                                                className='channelMark'
                                                style={{
                                                    marginLeft: '5px',
                                                    fontSize: '15px'
                                                }}
                                            /></span>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div >
        </div >
    )
}

export default Videos 