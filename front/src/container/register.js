import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../css/style.css';
class Register extends Component {

    state = {
        name : '',
        email : '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        available:false,
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleNameChange = event => {
        this.setState({ name: event.target.value });
        fetch(`http://localhost:5000/back/users?name=${this.state.name}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then(response=>(response.json()))
        .then(res=>{
            if(!res.length)
            {
                this.setState({available:true});
            }
        })
    };
    handleSubmit= event => {
    event.preventDefault();
    this.setState({isLoading: true});
    const name=this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    var cred={
        Name:name,
        Email:email,
        Password:password,
    };
    if(!validEmailRegex.test(email)){
        this.setState({authError : true,isLoading:false});
    }
    else{
        cred.email=true;
        console.log(JSON.stringify(cred))
        fetch('http://localhost:5000/back/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred),
        }).then(response=>(response.json()))
        .then(element => {
                console.log(element);
                if(element.message)
                {
                    this.setState({authError:true,isLoading: false})
                }
                else{
                    this.setState({isLoading: false});
                    console.log()
                    window.sessionStorage.setItem('name', element.Name);
                    window.sessionStorage.setItem('id', element.id);
                    localStorage.setItem('isLoggedIn', true);
                    this.setState({redirect:true });
                }
            })
            .catch(error => {
                this.setState({ authError: true, isLoading: false });
            });
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container1">
                <div className="body">
                    <form onSubmit={this.handleSubmit} className="form">
                            <h2>REGISTER YOUR ACCOUNT</h2>
                            <div className="form-cont">
                                <div className="form-group">
                                    <input type="text" id="inputName" className="form-control" placeholder="Name"  name="name" onChange={this.handleNameChange} required/>
                                    {this.state.available?(<span className="avail">This User name is available !</span>):(<span className="invalid-feedback">This User name is not available !</span>)}
                                </div>

                            <div className="form-group">
                                <input type="email" id="inputEmail" required className={"form-control " + (this.state.authError ? 'is-invalid' : '')} placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                {this.state.authError?(<span className="invalid-feedback">
                                    Please provide a valid Email. or Email Exist.
                                </span>):(<span></span>)}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"  name="password" onChange={this.handlePwdChange} required/>
                            </div>
                        </div>
                        <div className="submit-btn">
                            <button className="btn" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                            {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                            </button>
                        </div>
                        <div className="text-center">
                            <Link className="d-block " to={''}>Login Your Account</Link>
                        </div>
                    </form>
                    <div className="image"></div>
                </div>
                {this.renderRedirect()}
            </div>
        
        );
    }
}

export default Register;


