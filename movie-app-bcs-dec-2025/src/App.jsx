import "./index.css";
import { User } from "./User";

//Component = UI + Logic
export default function App() {
  //Logic Start
  // return (
  //UI Starts
  // <div className="App">
  const users = [
    {
      name: "Arjun",
      url: "https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg",
    },

    {
      name: "mani",
      url: "https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg",
    },
    {
      name: "Saravana",
      url: "https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg",
    },
  ];
  return (
    <div className="App">
      {users.map((user) => (
        <User name={user.name} url={user.url}/>
      ))}
    </div>
  );
}
