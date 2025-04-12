import React, {memo} from 'react';

interface  Props {
}


const Child = (props: Props)  => {
    console.log('rerender')
    return (
        <div>hello</div>
    );
}

export default Child;