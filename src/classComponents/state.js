import React,{Component} from 'react'
class States extends Component{
    constructor(){
        super()
        this.state={
            number: 0
        }
    }
    update=()=>
        this.setState({
            number:4
        }
        )

    render(){
        return(
            <div>
                <h1>my name is {this.state.number} </h1>
                <button onClick={this.update}>Click Me!</button>
            </div>
        )
    }
}

export default States