import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            greeting: 'Welcome in!'
        };
    }

    updateHours(hours){
        let phrase;
        if(hours > 18 || hours < 4){phrase = 'Good Evening! Take a look around.'}
        else if(hours > 12){phrase = 'Good Afternoon! Take a look around.'}
        else{phrase = 'Good Morning! Take a look around.'}
        this.state.greeting = phrase;
    }

    render(){
        let hours = new Date().getHours();
        this.updateHours(hours);
        return <>
                <h1>{this.state.greeting}</h1>
                <h3>Cars in stock:</h3>
            </>
    };
}

export default Header;