import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, MenuItem } from '@mui/material';
import Container from './styled'
import { useHistory } from 'react-router';
import axios from "axios"
import { useState } from 'react';

const FormTech = () => {

    const history = useHistory();

    const statusLevel = [
        {
            value: "Iniciante",
            label: "Iniciante"
        },
        {
            value: "Intermediário",
            label: "Intermediário"
        },
        {
            value: "Avançado",
            label: "Avançado"
        }
    ];

    const [selectedStatus, setSelectedStatus] = useState();


    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || "";
        return JSON.parse(localToken)
    })

    const getData = (data) => {
        console.log(data)
        axios.post("https://kenziehub.herokuapp.com/users/techs", data, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                history.push("/home")
            })
            .catch((e) => console.log(e))
    };

    return (
        <Container>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(getData)}>
                <TextField {...register("title")} label="Nome da tecnologia" variant="outlined" error={!!errors.title} helperText={errors.title?.message} ></TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                    {...register("status")}
                    error={!!errors.status}
                    helperText={errors.status?.message}
                >
                    {statusLevel.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="contained" type="submit" >Cadastrar</Button>
            </form>
        </Container>
    )
}

export default FormTech;