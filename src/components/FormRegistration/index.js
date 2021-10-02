import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Container from './styled'
import { useHistory } from 'react-router';
import axios from "axios"

const FormRegistration = () => {

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
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
        console.log(data)
        axios.post("https://kenziehub.herokuapp.com/users", data)
            .then((response) => {
                history.push("/login")
            })
            .catch((e) => console.log(e))
    };

    return (
        <Container>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(getData)}>
                <TextField {...register("email")} label="Email" variant="outlined" error={!!errors.email} helperText={errors.email?.message} ></TextField>
                <TextField {...register("name")} label="Nome Completo" variant="outlined" error={!!errors.name} helperText={errors.name?.message}></TextField>
                <TextField {...register("bio")} label="Bio" variant="outlined" error={!!errors.bio} helperText={errors.bio?.message}></TextField>
                <TextField {...register("course_module")} label="Módulo do curso" variant="outlined" error={!!errors.course_module} helperText={errors.course_module?.message}></TextField>
                <TextField {...register("contact")} label="Contato" variant="outlined" error={!!errors.contact} helperText={errors.contact?.message}></TextField>
                <TextField {...register("password")} label="Senha" variant="outlined" error={!!errors.password} helperText={errors.password?.message}></TextField>

                <Button variant="contained" type="submit" >Cadastrar</Button>
            </form>
        </Container>
    )
}

export default FormRegistration;