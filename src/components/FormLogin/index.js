import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Container from './styled'
import { useHistory } from 'react-router';
import axios from "axios"

const FormLogin = () => {

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup
            .string()
            .min(8, "Mínimo de 8 dígitos")
            .matches(
                /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
            )
            .required("Campo obrigatório"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const getData = (data) => {
        // console.log(data)
        axios.post("https://kenziehub.herokuapp.com/sessions", data)
            .then(response => {
                console.log(response)
                localStorage.clear()
                localStorage.setItem("token", JSON.stringify(response.data.token))
                history.push("/home")
            })
            .catch((e) => console.log(e))
    };

    return (
        <Container>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(getData)}>
                <TextField {...register("email")} label="Email" variant="outlined" error={!!errors.email} helperText={errors.email?.message} ></TextField>
                <TextField {...register("password")} label="Senha" variant="outlined" error={!!errors.password} helperText={errors.password?.message}></TextField>

                <Button variant="contained" type="submit" >Entrar</Button>
            </form>
        </Container>
    )
}

export default FormLogin;