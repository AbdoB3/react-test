import React , {Component}from 'react'

class Form extends Component{
   
    state={
        Nom:'',
        email:'',
        nomErro:'',
        mailErro:''
    }
    

    validation=()=>{
        if(!this.state.Nom>0 && !this.state.email>0){
            this.setState({nomErro:'The Nom was wrong'})
            this.setState({mailErro:'The mail was wrong'})
        }else if(!this.state.Nom>0){
            this.setState({nomErro:'The Nom was wrong'})
        }else if(!this.state.email>0){
            this.setState({mailErro:'The mail was wrong'})
        }else{
            return true
        }
    }

    submitForm=(e)=>{
        e.preventDefault()  
        if(this.validation()){
            alert('form was done')

        
    }}

    render(){
        return(
            <div className='form'>
                <h1>Login panel</h1>
                <div>
                    <form onSubmit={this.submitForm}> 
                        <label>Nom</label> <br/>
                        <input type='text'onChange={(e)=>this.setState({Nom:e.target.value})}/> <br/>
                        <strong style={{color:'red'}}>{this.state.nomErro}</strong> <br/>
                        <label>Email</label> <br/>
                        <input type='text'onChange={(e)=>this.setState({email:e.target.value})}/> <br/>
                        <strong style={{color:'red'}}>{this.state.mailErro}</strong> <br/> <br/>
                        <button type='submit'>Submit</button> <br/> <br/>
                    </form>
                </div>
            </div>
        )
    }
} 

export default Form