import { Component } from "react";
import axios from "axios";

export class ApiCall extends Component {
  // constructor is optional if no state is defined
  constructor(props) {
    super(props);
    this.state = {
      data: [], // store API response
    };
  }

  // axios call function
  getData = async (api) => {
    try {
      let respond = await axios.get(api);
      console.log(respond.data);
      this.setState({ data: respond.data });
    } catch (error) {
      console.log(error);
    }
  };

  // lifecycle method (componentDidMount is equal to useEffect with [])
  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    this.getData(url);
  }

  render() {
    return (
      <div>
        <h1>ApiCall (Class Component)</h1>
        <ul>
          {this.state.data.slice(0, 10).map((todo) => (
            <li key={todo.id}>
              {todo.id}. {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
