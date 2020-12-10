import React ,{Component} from 'react';
import Timer from './timer';
class Questions extends Component{
    state={
        result:0,
        selected:0,
    }
    update=(evt)=>{
        this.setState({selected:evt.target.value});
    }
    onSubmit=(e)=>{
        //e.preventDefault();
        var resu=this.state.result;
        if(this.state.selected==this.props.correct)
        {
            resu=resu+1;
            this.setState({result:resu})
        }
        this.setState({selected:""})
        this.props.onclick(resu);
    }
    render(){
        return(
                <div className="que-cont">
                    <Timer check={this.onSubmit} duration={this.props.duration} start={this.props.start}/>
                    <div className="questions">
                        {this.props.que}
                    </div>
                    <form >
                    <label> 1) 
                        <input type="radio" className="answer" value='1' onChange={this.update} checked={this.state.selected==="1"}/>
                        <div className="check">{this.props.ans1}</div>
                    </label><br/>
                    <label>2) <input type="radio" className="answer" value='2' onChange={this.update} checked={this.state.selected==="2"}/><div className="check">{this.props.ans2}</div></label><br/>
                    <label>3) <input type="radio" className="answer" value='3' onChange={this.update} checked={this.state.selected==="3"}/><div className="check">{this.props.ans3}</div></label><br/>
                    <label>4) <input type="radio" className="answer" value='4' onChange={this.update} checked={this.state.selected==="4"}/><div className="check">{this.props.ans4}</div></label>
                    </form>
                    <button className="next" onClick={this.onSubmit}>
                        Next
                    </button>
                </div>
            );
        }
}

export default Questions;