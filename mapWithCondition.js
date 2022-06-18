import React from "react";

export default class App extends React.Component {
  render() {
    var users = [
      { name: "Robin", isDeveloper: true },
      { name: "Markus", isDeveloper: false },
      { name: "John", isDeveloper: true },
    ];

    return (
      <ul>
        {users
          .filter((user) => user.isDeveloper)
          .map((user) => (
            <li>{user.name}</li>
          ))}
      </ul>
    );
  }
}
