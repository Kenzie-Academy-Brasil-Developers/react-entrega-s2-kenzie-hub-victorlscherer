import { Button } from "@mui/material";
import axios from "axios"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TechCard from "../../components/TechCard";

const Home = () => {

    const history = useHistory()

    const [id] = useState(JSON.parse(localStorage.getItem("id")));

    const [user, setUser] = useState({})

    const [techs, setTech] = useState([])

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || "";
        return JSON.parse(localToken)
    })

    useEffect(() => {


        axios.get(`https://kenziehub.herokuapp.com/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((response) => {
            setUser(response.data)
            setTech(response.data.techs)
        })
            .catch((e) => console.log(e))

    })

    const toPageTech = () => {
        history.push("/tech")
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <div>
                {techs.map((tech) => <TechCard key={tech.title} tech={tech} token={token} />)}
            </div>
            <Button onClick={toPageTech} >Cadastrar nova tecnologia</Button>
        </div>
    )
}

export default Home;