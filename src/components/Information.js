import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation()
    const { team }  = location.state

    return(
        <div>
            <h2>{team.full_name}</h2>
            <h4>{team.abbreviation}</h4>
            <h3>Team Information:</h3>
            <p>Alias: {team.name}</p>
            <p>Division: {team.division}</p>
            <p>City: {team.city}</p>
            <p>Conference: {team.conference}</p>
        </div>
    )
}

export default Details