import { Button } from "@mui/material";
import axios from "axios";

const TechCard = ({ tech, token }) => {

    const deleteTech = () => {
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${tech.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
    }

    return (
        <div>
            <ul>
                <li>{tech.title}</li>
                <li>{tech.status}</li>
                <Button onClick={deleteTech} variant="contained" >Excluir</Button>
            </ul>
        </div>
    )
}

export default TechCard;