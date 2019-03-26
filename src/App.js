import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=e8780420f8d0a3cf13e80ff3ad27cf96')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.list
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const {isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading</div>
    }

    else {
      return (
        <div className="App">
            Data has been loaded !
            <ul>
                {items.map((item, index) => (
                  <li key={item.dt}>{JSON.stringify(item.main)}
                  </li>
                ))}
                }
            </ul> 
        </div>
      );
    }
  }
}

export default App;
