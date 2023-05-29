import { useLocation } from "react-router-dom";
import './Information.css';

const Details = () => {
    const location = useLocation()
    const { team }  = location.state

    return(
        <div className="details-container">
            <h2>{team.full_name}</h2>
            <h4>{team.abbreviation}</h4>
            <h3>Team Information:</h3>
            <div className="info-container">
            <p>Alias: {team.name}</p>
            <p>Division: {team.division}</p>
            <p>City: {team.city}</p>
            <p>Conference: {team.conference}</p>
            </div>
        </div>
    )
}

export default Details