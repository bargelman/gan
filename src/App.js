import _ from 'lodash';
import {useEffect, useState} from 'react';

import Avatar from './components/Avatar/Avatar';
import './App.css';

const users = [
  {
    firstName: 'Bar',
    lastName: 'Gelman',
  },
  {
    firstName: 'Nir',
    lastName: 'Peled',
  },
  {
    firstName: 'Zoya',
    lastName: 'Peled',
  },
];

const sizes = ['sm', 'md', 'lg'];

const App = () => {

  const [randomUser, setRandomUser] = useState({});
  const [randomUserSize, setRandomUserSize] = useState();

  useEffect(() => {

    setInterval(() => {
      const random = _.random(2);
      setRandomUser(users[random]);
    }, 1000);

    setInterval(() => {
      const random = _.random(2);
      setRandomUserSize(sizes[random]);
    }, 500);

  },[]);

  return (
    <div className="app">
      <Avatar firstName="bar" lastName="Gelman" size={randomUserSize} />
      <Avatar firstName={randomUser.firstName} lastName={randomUser.lastName} size={randomUserSize} theme="dark" />
      <Avatar firstName="zoya" lastName="peled" size={randomUserSize} />
    </div>
  );

};

export default App;
