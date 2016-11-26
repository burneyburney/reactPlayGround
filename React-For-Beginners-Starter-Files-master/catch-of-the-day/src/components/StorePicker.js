import React from 'react';

class StorePicker extends React.Component { // create component, cap first componenet name so it can be used more than once
    render(){
        return(
            <form className="store-selector">
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name"/>

            </form>//can only return 1 parent element
        )
    }
}

export default StorePicker;
