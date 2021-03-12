import React, { useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
const Like = () => {
    const [like, setLike] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const handleClick = ()=> {
        const color = like ? '' : 'primary';
        const count = likeCount ? 0 : 1;
        setLikeCount(count);
        setLike(color);
    }


    return (
        <div>
            <h1>Handle your facebook like...</h1>
            <h1>Like Count : {likeCount}</h1>
            <ThumbUpAltIcon onClick={handleClick} color={like}></ThumbUpAltIcon>
        </div>
    );
};

export default Like;