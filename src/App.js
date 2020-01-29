import React from "react";
import "./App.css";
import { Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AgeTeller from "./Components/AgeTeller";

class App extends React.Component {
  state = {
    currDate: "",
    birthDate: "",
    showCongrats: false
  };
  giveAge = () => {
    this.setState({
      birthDate: this.state.currDate,
      showCongrats: true,
      currDate: ""
    });
  };
  render() {
    const { birthDate, showCongrats } = this.state;
    return (
      <div className="App">
        <Form className="App-Content">
          <h4>{"Select your birthday date"}</h4>
          <FormControl
            type="date"
            onChange={event => this.setState({ currDate: event.target.value })}
          ></FormControl>
          <Button onClick={this.giveAge}>Submit</Button>
          {showCongrats ? <AgeTeller date={birthDate} /> : <> </>}
        </Form>
      </div>
    );
  }
}

export default App;
