import React ,{Component} from 'react';
import js from '../assest/quiz.jpg';
class QuizList extends Component{
    updatequiz=(i) => {
        this.props.onclick(i);
    }
    render(){
        const quiz=this.props.quiz.map((x,i) =>(
            <div className="QuizName" key={i} onClick={() => this.updatequiz(i)}>
                <div className="title">{x}</div>
                <div className="quiz-image">
                    <img src={js}></img>
                </div>
                <div className="instruction">Click To Start This Quiz..</div>
            </div>
        ));
    return (
        <div className="Quizes">
            {quiz}
        </div>
    );
    }
}

export default QuizList;