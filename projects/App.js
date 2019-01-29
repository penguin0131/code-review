import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

import Todos from './components/Todos';

const data = [
  {name: 'React 개발에 필요한 환경을 구축한다', completed: true},
  {name: '새로운 자바스크립트 문법을 익한다.', completed: false},
  {name: '개발 편의를 위한 IntelliJ 환경을 만든다', completed: true},
  {name: '기본적인 Git 사용법을 익힌다', completed: false},
  {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익한다.', completed: true},
];

class App extends Component {
  state = {
    data: data,
    isUnmount: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {name: 'React 개발에 필요한 환경을 구축한다', completed: true},
          {name: '새로운 자바스크립트 문법을 익한다.', completed: true},
          {name: '개발 편의를 위한 IntelliJ 환경을 만든다', completed: true},
          {name: '기본적인 Git 사용법을 익힌다', completed: true},
          {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익한다.', completed: true},
        ],
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        isUnmount: true,
      });
    }, 10000);
  }

  render() {
    return <div className="App">{!this.state.isUnmount && <Todos title={'강의 목표'} items={this.state.data} />}</div>;
  }
}

export default App;
