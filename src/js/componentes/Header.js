import React from "react";
import Title from "./Header/Title";
export default class Header extends React.Component{

  handleChange(e){
    let t = "hola";
    this.props.changeTitle(e.target.value);
    t = e.target.value;
  }

  render(){
    return (
        <div>
          <Title title={this.props.title}/>
          <input onChange={this.handleChange.bind(this)} />
        </div>
    );
  }
}
