import { Component } from "react";

class ToDoScreen extends Component{

    state={
        taskCounter : 0,
    };
    render(){
        return(
            
            <div className="screen">
                <h1 className="ui heading center">ToDo List</h1>
                <div>
                    <button className="ui secondary button" onClick={(e)=>{
                        this.setState({...this.state,taskCounter:this.state.taskCounter+1})
                    }}>Add Task</button>
                    <p>The number of tasks are:{this.state.taskCounter}</p>
                </div>
            </div>
        )
    }
}

export default ToDoScreen;