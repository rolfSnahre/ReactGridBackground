import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {color: props.color}

    this.hover = this.hover.bind(this)
  }

  hover(){
    this.setState( {color:"#FF9933"})
  }

  render(){
    return( 
      <dir class="square" 
      style={{background: this.state.color}} 
      onMouseOver={this.hover} 
      onMouseOut={()=> this.setState( {color:this.props.color})} />
    )
  }
}

class DimondGrid extends React.Component{
  constructor(props){
    super(props);

    let colorMap = new Array(100).fill(Array(100).fill(null))
  
    colorMap = colorMap.map(row => row.map(this.randomColor));

    this.colorMap = colorMap
    this.cMap = colorMap
    this.state = {cMap: this.cMap, a: "A"}
    this.setState({a: "A"})

  }

  randomColor(){
    let colors = ["#3656F6", "#2469D6", "#3FA6EB", "#2FB5D4"]
    let cn = Math.floor(Math.random()*3)
    return colors[cn]

  }

  click(){
    let a = 2
    let b = 3
  }

  render(){
    return(
        <dir class="dimondGrid" onClick={() => this.click}>
        <table onClick={() => this.click}>{
          this.state.cMap.map(row => { 
            return(
              <tr class="gridRow">{
                row.map(c => {
                  return(<th>{<Square color={c}/>}</th> )
                })
              }
              </tr> 
            )        
          })
        }
        </table>
        </dir>
    )
  }
}


class App extends React.Component{

  render(){
    return(
      <DimondGrid />
    )
  }
}







ReactDOM.render(<App />, document.getElementById('root'));


