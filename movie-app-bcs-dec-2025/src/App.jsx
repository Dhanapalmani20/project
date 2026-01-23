import "./index.css";

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

  function User({ name, img }) {
    return (
      <div>
        <img className="num-1" src={img} alt="" />
        <p className="user-msg">
          Hello,<span className="p-name"> {name}</span> 🎉🎉
        </p>
      </div>
    );
  }
}
