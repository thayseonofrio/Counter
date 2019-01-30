import React from 'react';

const button = (props) => {
        return( 
                <button onClick={props.clicked}>{props.label}</button>
            )
}

export default button;