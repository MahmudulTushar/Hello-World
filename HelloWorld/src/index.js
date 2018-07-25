import React from 'react';
import ReactDom from 'react-dom';
import TodoItem from './app/component/TodoItem';
class HelloWorld extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            count : 0,
            userId : [1,2,3],
            
        }
        
        console.log('constructor');
    }
    componentWillMount(){
    }
    componentDidMount(){
        
    }
    render(){
        console.log("render");
        const {userId} = this.state;
        return (
           <div>
             <form onSubmit={(e)=>{
                 const {userId} = this.state;
                 userId.push(this.refs.addUserId.value);
                 e.preventDefault();
                 this.setState({
                     userId
                 })
                 this.refs.addUserId.value ="";
             }}>
             <input type ="number" ref="addUserId"/>
             <button type="submit">Add userId</button>
             </form>
             <TodoItem userId ={userId}/>
           </div>
        )

    }
}
ReactDom.render(<HelloWorld/>,document.getElementById('root'));