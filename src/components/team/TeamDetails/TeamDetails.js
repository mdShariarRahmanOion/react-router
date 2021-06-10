import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TotalData from '../TotalData/TotalData';

const TeamDetails = () => { 
    const {idTeam} = useParams();
    const [teams, setTeams] = useState({})
    useEffect(()=> {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]));
    } ,[idTeam])
    return (
        <div>
            <TotalData teams={teams}></TotalData>
        </div>
    );
};

export default TeamDetails;