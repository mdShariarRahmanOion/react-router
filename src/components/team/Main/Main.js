import { useEffect, useState } from 'react';
import Team from '../Team';

import './Main.css';
const Main = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League   ')
      .then(res => res.json())
      .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="App">
        <div className="myTeams">
        <h1 className="introduction">{teams.length} Teams: <span className="epl"> Tracker</span> </h1>
        
        </div>
        <header className="row d-flex align-items-center p-5">
          
          {
            teams.map(team => <Team team={team}></Team>)
          }
        </header>
      </div>
    );
};

export default Main;