import React from 'react';
import './Navigation.css';
import {NavigationButtons} from './NavigationHelpers.js';

class Navigation extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // const {currentPage} = this.state;
        return(
            <div className='navRectangle'>
                <NavigationButtons
                    scrollTo={this.props.scrollTo}
                />
            </div>
        );
    }
}

export default Navigation;