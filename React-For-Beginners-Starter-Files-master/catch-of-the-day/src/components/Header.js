import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="top">
                <h1>
                    <span className="Catch">Catch</span>
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    <span className="Day">Day</span>
                </h1>
                <h3 className="tagline">{this.props.tagline}</h3>
            </header>
         )
    }
}

export default Header;
