import logo from './logo.svg';
import React from 'react'
import './App.css';

//Lyfecycle
/**
 * 1. componenteDidMount
 * 2. componentWillMount
 * 3. componentDidUpdate
 */

class Util extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { util } = this.props 
    return(
      <tr>
          <th style={{ border: '1px solid gray' }}>{util.id}</th>
          <th style={{ border: '1px solid gray' }}>{util.name}</th>
          <th style={{ border: '1px solid gray' }}>{util.price}</th>
      </tr>
    )
  }
}
 
class MyApp extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        articulos: [],
        facturas: [],
        utiles: [
          {
            id: 1,
            name: 'Lapiz',
            price: 10.5
          },
          {
            id: 2,
            name: 'Borrador',
            price: 5
          },
          {
            id: 3,
            name: 'Cuaderno',
            price: 1
          }
        ]
      }
    }

    componentDidMount() {
      //llamados a apis
    }

    onIncrementClicked() {
      this.setState({ count: this.state.count + 1 })
      const lastUtil = this.state.utiles[2]
      this.setState({ utiles: [...this.state.utiles, lastUtil] })
    }

    onDecrementClicked() {
      this.setState({ count: this.state.count - 1 })
    }

    suma = (a, b) => (a + b)

    render() {
      //console.log(this.state.count)
      return(
        <div>
          <h1>Hola Gente Class Component</h1>
          <span>{this.state.count}</span>
          <span>{this.suma(5, 7)}</span>
          <p/>
          <button onClick={()=>this.onIncrementClicked()}>Increase</button>
          <button onClick={()=>this.onDecrementClicked()}>Decrease</button>
          <table >
            <tr >
              <th style={{ border: '1px solid gray' }}>ID</th>
              <th style={{ border: '1px solid gray' }}>Name</th>
              <th style={{ border: '1px solid gray' }}>Price</th>
            </tr>
           {
            this.state.utiles.map((obj) => (
              <Util util={obj} />
            ))
           } 
          </table>
        </div>
      )
    } 
}

function App() {
  return (
      <div>
        <h1>Hola Gente Function Component</h1>
        <button>Touch me</button>
      </div>
  );
}

export default MyApp;
