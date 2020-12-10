import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';


class Login extends Component{
    state = {
        name: '',
        password: "",
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleNameChange = event => {
        this.setState({name: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };
    handleSubmit=event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const name = this.state.name;
        const password = this.state.password;
        console.log(password);
        if(!this.state.authError)
        {
            fetch(`http://localhost:5000/back/users?name=${name}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response=>(response.json()))
            .then(response => {
                if(response[0].Password==password)
                {
                    window.sessionStorage.setItem('name',response[0].Name)
                    window.sessionStorage.setItem('id',response[0].id)
                    this.setState({quiz1:response[0].Quiz_1,quiz2:response[0].Quiz_2});
                    this.setState({redirect: true, isLoading: false});
                    localStorage.setItem('isLoggedIn', true);
                }                  
                if(this.state.isLoading){
                    this.setState({authError:true , isLoading:false})
                }
            })
                .catch(error => {
                    console.log(error);
                    this.setState({authError: true, isLoading: false});
                });
        }else{
            this.setState({redirect:false ,isLoading:false});
        }
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard'/>
        }
    };
    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container1">
                <div className="body">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2>ACCOUNT LOGIN</h2>
                        <div className="form-cont">
                            <div className="form-group">
                                <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="User name" type="text" name="email" onChange={this.handleNameChange} autoFocus required/>
                                    {this.state.authError ? (<span className="invalid-feedback">
                                        Please provide a valid User Name.
                                    </span>):(<span></span>)}
                            </div>
                            <div className="form-group">
                                <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="Password" name="password" onChange={this.handlePwdChange} required/>
                                    {this.state.authError ? (<span className="invalid-feedback">
                                    Please provide a valid Password.
                                    </span>):(<span></span>)}
                            </div>
                        </div>
                        <div className="submit-btn">
                            <button className="btn" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
                            {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                            </button>
                        </div>
                        <div className="text-center">
                        <Link className="d-block register" to={"Register"}>Register an Account</Link>
                        </div>
                    </form>
                    <div className="image">
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
};

export default Login;