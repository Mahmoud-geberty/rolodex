// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search/search.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }))
      .catch((err) => console.log(err));
  }

  render() {
    let monsters = this.state.monsters;
    let search = this.state.searchField;
    let cards = monsters.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Robots Rolodex</h1>
        <Search handleChange={this.handleChange} place={"Search Robots"} />
        <CardList cards={cards} search={this.state.searchField} />
      </div>
    );
  }
}

export default App;
