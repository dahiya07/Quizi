import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import js from '../assest/quiz.jpg';

class Dashboard extends Component{
    state = {
            id:"",
            name:'',
            quiz1:0,
            quiz2:0,
        }
        componentDidMount() {
            fetch(`http://localhost:5000/back/users?name=${window.sessionStorage.getItem('name')}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({id:data[0].id,name: data[0].Name,quiz1:data[0].Quiz_1,quiz2:data[0].Quiz_2});
                });
        }
        handleClickLogout(){
            window.sessionStorage.removeItem('name');
            localStorage.setItem('isLoggedIn', false);
            //this.setState({ toDashboard: true });
        };
    render(){
        var profile;
            profile=<div className="container">
                        <div className="profile-name">Welcome , {this.state.name}</div>
                            {profile}
                        <div className="YourScore">Your Quiz Score...
                            <div className="quiz-container">
                                <div className='QuizList'>
                                    <div className="q-title">
                                        <h4 className='Title'>React Fundamentals !</h4>
                                    </div>
                                    <div className="quiz-image">
                                        <img src={js}></img>
                                    </div>
                                    <div className="quiz-score">
                                        <h5 className='score'>Your score : {this.state.quiz1*100} %</h5>
                                    </div> 
                                </div>
                                <div className='QuizList'>
                                    <div className="q-title">
                                        <h4 className='Title'>Living a life !</h4>
                                    </div>
                                    <div className="quiz-image">
                                        <img src={js}></img>
                                    </div>
                                    <div className="quiz-score">
                                        <h5 className='score'>Your score : {this.state.quiz2*100} %</h5>
                                    </div> 
                                </div>
                            </div>
                            <Link to={'/quiz'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                                <span>&nbsp;Lets Take a Quiz .. </span></Link>
                        </div>
                    </div>
        return(<div className="container1">
                <div className='Dashboard'>
                    {profile}
                     <Link to={'/'} onClick={this.handleClickLogout} className="logout"><i className="fas fa-fw fa-file-archive"></i>
                        <span>&nbsp;LogOut</span></Link>
                </div>
            </div>
        );
    }
};

export default Dashboard;