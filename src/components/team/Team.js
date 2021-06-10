import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css';

const Team = (props) => {
    const {strTeam, strTeamBadge, idTeam} = props.team;
    const strTeamBadgeStyle = {hight:'50px', width:'200px', borderRadius:'6px'}
    const strTeamStyle = {backgroundColor:'white' , color:'black',border: '1px solid gray', borderRadius:'20px',margin:'30px', padding:'35px'}
    return (
        <div style={strTeamStyle}>
            <img style={strTeamBadgeStyle} src={strTeamBadge} alt=""/>
            <h2> {strTeam}</h2>
            <p>Sports: Football</p>
            <Link to={`/team/${idTeam}`}>
                <button className="btn btn-danger color">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default Team;