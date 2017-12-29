require('./css/app.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Main extends React.Component {

  constructor(props) {
    super(props);
    /**
     * Until AJAX request below updates it, the message will be default value here
     */
    this.state = { message: "(loading..)" };
  }

  componentWillMount() {
    /*
     * Send an AJAX request to the server to get a message to display
     */
    $.ajax({
      type: "GET",
      url: "/hello/MY_NAME",
      success: (message) => {
        this.setState({message})
      },
      error: (xhr, status, err) => {
        console.log("FAIL", status, err)
      }
    })
  }

  render() {
    return (
      <div>
        <p>Server says: {this.state.message}</p>
        <p>Here is a resource from src/public/baby.gif</p>
        <img src="/baby.gif"/>
      </div>
    )
  }
}

ReactDOM.render( <Main />, document.querySelector('#root') );
