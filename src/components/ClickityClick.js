// Code ClickityClick Component Here
import React from "react"

class ClickityClick extends React.Component{
    constructor(props){
        super(props)
            this.state={
                hasBeenClicked:false,
                theme: 'blue',
                addressInfo: {
                    street: 2222,
                    number: 1111,
                    city: 'nas',
                    country: 'ff'
                },
            }
        
    }
    
    handleClick = () => {
      this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked)) // prints true
    }
    
    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
            )
    }
    
}

export default ClickityClick;