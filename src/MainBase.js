import React from 'react';

class Mainbase extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { window } = this.props;
        console.log(this.props)
    }
    render(){
        return (<div>
            Hi
        </div>)
    }
}

export default Mainbase;