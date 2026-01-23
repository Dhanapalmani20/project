import "./index.css";
import { User } from "./User";

//Component = UI + Logic
export default function App() {
  //Logic Start
  return (
    //UI Starts
    <div className="App">
      <User
        name="Arjun"
        img="https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg"
      />
      <User
        name="mani"
        img="https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg"
      />
      <User
        name="Saravana"
        img="https://image.gala.de/21270186/t/0U/v5/w960/r0.6667/-/elon-musk--11584341-.jpg"
      />
    </div>
  );

 
}