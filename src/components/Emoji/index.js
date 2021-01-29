import React from 'react';

const Emoji = ({ label, symbol }) => {

    return (
        <span
            className='emoji'
            role='img'
            aria-label={label ? label : ''}
            aria-hidden={label ? 'false' : 'true'}
        >
            {symbol}
        </span>
    )
}

export default Emoji;

// from Sean McPherson https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7 accessed 1/28/2021 at 6:15pm