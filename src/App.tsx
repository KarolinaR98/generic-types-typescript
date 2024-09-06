import { ReactNode } from 'react';
import './App.css'
import GenericList from './GenericList';

export type User = {
  name: string;
  age: number;
};

function App() {

  const listOfStrings: string[] = ["Adam", "Tomek", "Maciek", "Robert"];

  const renderListOfStrings = (element: string): ReactNode => {

    return (
      <div>{element}</div>
    )

  }

  const listOfUsers: User[] = [
    { name: "Dawid", age: 25 },
    { name: "Darek", age: 45 },
    { name: "Maciej", age: 33 },
    { name: "Robert", age: 28 },
    { name: "Tomek", age: 41 },

  ];

  const renderListOfUsers = (element: User): ReactNode => {

    return (
      <div>{element.name} is {element.age} years old</div>
    )
  }

  return (
    <>
      <GenericList<string> items={listOfStrings} renderItem={renderListOfStrings} />
      <hr></hr>
      <GenericList<User> items={listOfUsers} renderItem={renderListOfUsers} />
    </>
  )
}

export default App
