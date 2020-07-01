import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  constructor(props){
    super(props);
    this.color = "#227755"

    this.hover = this.hover.bind(this)
  }

  hover(){
    this.color = "#FF9933"
  }



  render(){
    var divStyle = {background: this.props.color}
    return( 
      <dir class="square" style={{background: this.props.color}} onclick={this.hover} />
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
        <dir class="dimondGrid" onclick={() => this.click}>
        <table onclick={() => this.click}>{
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

function hgjfdk(){
  return this.state.cMap.map(row => 
    <dir class="gridRow">
      
    </dir>
  );
}


class App extends React.Component{

  render(){
    return(
      <DimondGrid />
    )
  }
}







ReactDOM.render(<App />, document.getElementById('root'));


