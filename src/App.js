import axios from 'axios';
import logo from './logo.svg';
import Card from '../src/components/atoms/Card/Card'
import Header from '../src/components/atoms/Header/Header';

import './App.css';
import { useState, useEffect} from 'react' ;

function App() {
  const [members, setMembers] = useState([]);
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    fetchFamilies();
    fetchMembers();
  },[]);

  const fetchFamilies = () =>{
    axios.get('http://localhost:3004/families')
      .then(res => {
        const list = res.data.familiesData;
        setFamilies(list);
      })
  }

  const fetchMembers = () =>{
    axios.get('http://localhost:3004/members')
      .then(res => {
        const list = res.data.membersList;
        setMembers(list);
      })
  }

  return (
    <div className="App">
      <div>
        <Header>Esto es un Header</Header>
        <div className="contentWrapper">
          <div className="familiesColumn">
            { 
               ([] || families).map((card) => (
                <Card name={card.name}></Card>
              ))
            }
          </div>

          <div className="membersColumn">
            { 
              ([] || members).map((card) => (
                <Card name={card.name}></Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
