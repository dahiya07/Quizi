import React,{Component  } from "react";
import {Link,Redirect} from 'react-router-dom';
import QuizList from '../components/quizlist';
import QuizQuestion from '../container/quizquuestion';
class Quizez extends Component{
    state = {
        quizez:["React Js fundamentals","Living a life !"],
        quizSelect:false,
        quizno:0
    }
    handeclick=(key)=>{
        this.setState({quizSelect:true,quizno:key+1});
    }
    handleClickLogout(){
        window.sessionStorage.removeItem('name');
        localStorage.setItem('isLoggedIn', false);
    };
    render(){
        if(this.state.quizSelect)
        {
            return(
                <div className="container1">
                    <div className="Quiz-cont">
                        <QuizQuestion value={this.state.quizno}/>
                    </div>
                    <Link to={'/'} onClick={this.handleClickLogout} className="logout"><i className="fas fa-fw fa-file-archive"></i>
                        <span>&nbsp;LogOut</span></Link>
                </div>
            );
        }
        else{
            return(
                <div className="container1">
                    <div className="Quiz-cont">
                        <div className="profile-name">Please Select Your Quiz..</div>
                        <QuizList quiz={this.state.quizez} onclick={this.handeclick}/>
                    </div>
                    <Link to={'/'} onClick={this.handleClickLogout} className="logout"><i className="fas fa-fw fa-file-archive"></i>
                        <span>&nbsp;LogOut</span></Link>
                </div>
            );
        }
    }
}

export default Quizez;