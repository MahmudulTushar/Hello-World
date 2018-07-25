import React from 'react';

export default class TodoItem extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            userId : this.props.userId,
            
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
        
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps.userId);
      console.log(this.props.userId);
    }
    render(){
        console.log("render");
        const {userId} = this.state;
        console.log(this.state.users);
        return (
            <ul>
                {
                    userId.map((id)=>{
                        return (
                            <li key={id}>{id}</li>
                        )
                    })
                }
            </ul>
        )

    }
}
