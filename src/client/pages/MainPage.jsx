import { Component } from "react";
import TodoList from "../data/TodoList.js";
import AddCheckbox from "../cmps/AddCheckbox";
import { Routes, Route } from "react-router-dom";
import FilterAll from "../cmps/FilterAll";
import FilterCompleted from "../cmps/FilterCompleted";
import FilterLeft from "../cmps/FilterLeft";
import FilterButtons from "../cmps/FilterButtons.jsx";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState((state) => {
      state.list = TodoList;
      return state;
    });
  }

  onAddCheckbox(todo, list) {
    if (todo) {
      const newTodo = {
        id: generateId(),
        todo: todo,
        completed: false,
      };
      list.push(newTodo);
      this.setState((state) => {
        state.list = list;
        return state;
      });
    }
  }

  onRemoveCheckbox(id, list) {
    const index = list.findIndex((checkbox) => checkbox.id === id);
    list.splice(index, 1);
    this.setState((state) => {
      state.list = list;
      return state;
    });
  }

  onFlipCheck(id, list) {
    const getCheck = list.find((checkbox) => checkbox.id === id);
    const correctState = !getCheck.completed;
    this.setState((state) => {
      state.list = list.map((checkbox) => {
        if (checkbox.id === id) {
          checkbox.completed = correctState;
        }
        return checkbox;
      });
      return state;
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <AddCheckbox list={list} onAddCheckbox={this.onAddCheckbox} />
        <Routes>
          <Route
            path="/"
            element={
              <FilterAll
                list={list}
                onFlipCheck={this.onFlipCheck}
                onRemoveCheckbox={this.onRemoveCheckbox}
              />
            }
          />
          <Route
            path="all"
            element={
              <FilterAll
                list={list}
                onFlipCheck={this.onFlipCheck}
                onRemoveCheckbox={this.onRemoveCheckbox}
              />
            }
          />
          <Route
            path="completed"
            element={
              <FilterCompleted
                list={list}
                onFlipCheck={this.onFlipCheck}
                onRemoveCheckbox={this.onRemoveCheckbox}
              />
            }
          />
          <Route
            path="left"
            element={
              <FilterLeft
                list={list}
                onFlipCheck={this.onFlipCheck}
                onRemoveCheckbox={this.onRemoveCheckbox}
              />
            }
          />
        </Routes>
        <FilterButtons />
      </div>
    );
  }
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateId = (limit = 20) => {
  let newId = "";
  const list = "abcdefghijklmnopqrstuvwxyz_-?1234567890";
  const chooseCase = Math.random();
  for (let i = 0; i < limit; i++) {
    const randIndex = getRandomInt(0, list.length - 1);
    const randomSymbol = list.charAt(randIndex);
    const finalizedSymbol =
      chooseCase === 0
        ? randomSymbol.toUpperCase()
        : randomSymbol.toLowerCase();
    newId = newId.concat(finalizedSymbol);
  }
  return newId;
};

export default MainPage;
