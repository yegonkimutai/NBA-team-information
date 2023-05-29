import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getTeams } from "../redux/team/teamSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Teams = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        dispatch(getTeams())
      }, [dispatch])

      const { teams } = useSelector((store) => store.teams)

      const switchPage = (team) => {
        nav(`details/${team.id}`, {state: {team}})
      }

    const filtered = teams.filter((team) => team.id)

    return(
        <div>
            <h1>Team List</h1>
            {filtered.map((team) => (
                <div key={team.id} onClick={() => switchPage(team)}>
                    <h2>{team.full_name}</h2>
                    <p>{team.abbreviation}</p>
                </div>
            ))}
        </div>
    )
}

export default Teams