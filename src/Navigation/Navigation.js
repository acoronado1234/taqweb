import React from 'react';
import './Navigation.css';


const NavigationButton = ({id, text, selected, onChange}) => {
    const className = selected === id ? 'navSelectedButton' : 'navBarButton';
    return(
        <div className='navButtonDiv'>
            <button id={id} className={className} onClick={onChange}>{text}</button>
        </div>
    );
}

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentPage: 'menu'}
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        this.setState({currentPage: event.target.id})
    }

    render(){
        const {currentPage} = this.state;
        return(
            <div className='navBarRectangle'>
                <div className='navBarButtonDiv'>
                    <NavigationButton id={'menu'} text={'Menu'} selected={currentPage} onChange={this.onClick}/>
                    <NavigationButton id={'locations'} text={'Locations'} selected={currentPage} onChange={this.onClick}/>
                    <NavigationButton id={'catering'} text={'Catering'} selected={currentPage} onChange={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Navigation;