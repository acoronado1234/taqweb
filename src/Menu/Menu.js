import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const {currentPage} = this.state;
        return (
            <div className='menuRectangle'>
                <div>home</div>
                <div>menu</div>
                <div>location</div>
            </div>
        );
    }
}

export default Menu;