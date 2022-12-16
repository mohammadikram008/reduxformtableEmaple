import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decreament } from './actions/Index';
import { increment } from './actions/Index';
import { isSigned } from './actions/Index';
import { notSign } from './actions/Index';
import { useEffect, useState } from 'react';
import NewTable from './components/NewTable';
import axios from 'axios'


function App() {

  const [value, setValue] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState([]);
  let authors = [];
  const counter = useSelector(state => state.counter);
  const log = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const handlpage = () => {
    setValue(true);
  }

  const fatch = () => {

    return (
      axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-11-14&sortBy=publishedAt&apiKey=9101115b9ffd4ea98b28da32e8546305")
        .then((response) => {
          // console.log("data:",  response);
          return (
            setUser(response.data.articles))
        })
    )
  }

  useEffect(() => {
    fatch();

  }, [])

  const handlpagefalse = () => {
    setValue(false);
  }

  const data = [
    {
      id: 1,
      name: "ikram",
      Desription: 'i am reactjs developer'
    },
    {
      id: 2,
      name: "Mudasir",
      Desription: 'Mudasir is a reactjs developer'
    },
    {
      id: 3,
      name: "Waleed",
      Desription: 'Waleed is team lead of  reactjs developer'
    }
  ]
  // console.log(counter);
  // console.log(log);
  // console.log(user);
  const allUser = () => {
    setIsShow(true);

  }
  authors = user.map(i => i.author)
  //   const renderList = authors.map((item, index) => 
  //   <div key={index}>{item}</div>
  // );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("username:"+inputs.username+"\nAge:"+inputs.age);
  }
  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
  
    setInputs(values => ({ ...values , [name]: value}))
    // console.log(inputs);
  }
  return (
    <div className="App">
      <h1>THis is Counter App</h1>
      <h3>Counter{counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decreament(2))}>-</button>
      <button onClick={() => dispatch(isSigned())}>Sign</button>
      <button onClick={() => dispatch(notSign())}>NotSign</button>
      <button onClick={() => handlpage()}>Table</button>
      <button onClick={() => handlpagefalse()} >Tableback</button>
      {value ? <NewTable data={data} /> : ''}
      {log ? <h1>User is LoggIn</h1> : <h1>User is LoggOut</h1>}
      <button onClick={() => allUser()} >Show User</button>
      <div>
        <div><h1>The List contains Author Names:</h1></div>
        <div>
          {isShow
            ? authors.map((data, index) => (
              <p key={index}>
                <h5>Name: {data}</h5>
              </p>
            ))
            : ''}
        </div>
      </div>
      <div >
        <form  onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label>Enter your age:
            <input
              type="number"
              name="age"
             value={inputs.age}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>


  );
}

export default App;
