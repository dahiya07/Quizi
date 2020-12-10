import React,{Component} from 'react';
import QuestionList from '../components/questionList';
import Result from "../components/result";
class QuizQuestion extends Component{
        state={
            fini:false,
            completed:false,
            index:0,
            que:[],
            result:0,
            duration:10,
            final:0.00
        }
    componentDidMount(){
        fetch(`http://localhost:5000/back/users/quiz/${this.props.value}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({fini:true,que:data})
            })
    }
    nextquestion=(val)=>{
        var len=this.state.que.length;
        this.setState({result:val});
        var index=this.state.index;
        var duration= this.state.duration;
        this.setState({duration:duration+10})
        if(index==len-1)
        {
            var final=(this.state.result/(len));
            final=final.toFixed(2);
            this.setState({completed:true,final:final});
        }
        else{
            this.setState({index:index+1});
        }
    }
    
    render(){
        if(!this.state.fini)
        {
            return(
                <div>Wait...</div>
            )
        }
        else
        {
            if(this.state.completed)
            {
                return(<Result value={this.props.value} res={this.state.result} final={this.state.final}/>)
            }
            else{
                var i=this.state.index;
                var duration=this.state.duration;
                return(<div className="questionlist">
                        <QuestionList que={this.state.que[i].Question}
                            ans1={this.state.que[i].Ans_1}
                            ans2={this.state.que[i].Ans_2}
                            ans3={this.state.que[i].Ans_3}
                            ans4={this.state.que[i].Ans_4}
                            res={this.state.result}
                            duration={duration}
                            correct={this.state.que[i].Correct}
                            onclick={this.nextquestion}/>
                        </div>
                );
            }
        }
    }    
}
export default QuizQuestion;