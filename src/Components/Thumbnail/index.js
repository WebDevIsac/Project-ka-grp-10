import React from 'react';
import './style.css';
import TypeIcon from '../TypeIcon';

const Thumbnail = (props) => {
    return (
        <div className={`thumbnail-box ${props.size}`} style={{backgroundImage:"url(https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg)"}}>
            <TypeIcon type="video" size="small"/>
        </div>
    );
};

export default Thumbnail;