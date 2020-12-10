import React,{Component} from 'react';
import {Link,Router} from 'react-router-dom';

class Result extends Component{
    state={
        Quiz_1:this.props.final,
    }
    componentDidMount(){
        var res;
        if(this.props.value==1)
        {
            res={Quiz_1:this.props.final};
        }
        else{
            res={Quiz_2:this.props.final};
        }
        console.log(JSON.stringify(res))
        fetch(`http://localhost:5000/back/users/${window.sessionStorage.getItem("id")}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(res),
            })
    }
    render(){
        return(
            <div className="result-cont">
                <div className="Completed ">Completed , Thannks..! Come Again</div>
                <div className="result">You Score : {this.props.final*100} %</div>
                <Link to={'/dashboard'} className="Next"><i className="fas fa-fw fa-file-archive"></i>
                        <span>&nbsp;Return to Dashboard</span></Link>
            </div>
        )
    }
}

export default Result;