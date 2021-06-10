import React from 'react';
import imageMale from '../TotalData/male.png'
import imageTwitter from '../TotalData/Twitter.png'
import imageYoTube from '../TotalData/YouTube.png'
import imageFacebook from '../TotalData/Facebook.png'
import './TotalData.css'
const TotalData = (props) => {
    const { strTeam, strTeamBanner, intFormedYear, strCountry, strAlternate, strGender, strLeague, strStadiumDescription, strTwitter, strYoutube, strFacebook} = props.teams;
    console.log(props.teams);
    const club ={hight:'80%', padding:'20px',width:'250px', marginLeft: '90% auto'}
    const strTeamBadgeStyle = {hight:'80', width:'900px', borderRadius:'30px', padding: '10px'}
    const strTeamStyle = {backgroundColor:'blue' , color:'white',border: '1px solid gray', borderRadius:'20px', margin: '30px', padding:'20px'}
    const DescriptionDEStyle = {margin:'20px', padding:'20px',hight:'30px', with:'40px'}
    
    return (
       
        <div className="teams" >
            <header className="bg">
            <img className="d-block w-100" style={strTeamBadgeStyle} src={strTeamBanner} alt=""/>
            <div className="team-detail" style={strTeamStyle}>
                <ul className="d-block w-100">
                <h1 > {strTeam}</h1>
                 <br/>
                 <strong>Founded: {intFormedYear}</strong>
                 <br/>
                 <strong>Country: {strCountry}</strong>
                 <br/>
                 <strong>{strAlternate}</strong>
                 <br/>
                 <strong>League: {strLeague}</strong>
                 <br/>
                 <strong>Gender: {strGender}</strong>
                </ul>
                 
             <div className="col-md-5">
               <img class="d-block w-100 " style={club} src={imageMale} alt=""/>
                
             </div>
             </div>
                <p  style={DescriptionDEStyle}>{strStadiumDescription}</p>
                <br/>
                <small  style={DescriptionDEStyle}> <a href={`https://${strTwitter}`}> <img src={imageTwitter} alt=""/> </a> </small>
                <small> <a href={`https://${strYoutube}`}> <img src={imageYoTube} alt=""/> </a> </small>
                <small> <a href={`https://${strFacebook}`}> <img src={imageFacebook} alt=""/> </a> </small>
            </header>
        </div>
      
    );
};

export default TotalData;