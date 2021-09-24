import './styles.css'
import { useHistory } from "react-router";
import { Button, TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormSignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {  
    history.push('/welcomepage')
  };

  return (
    <Paper variant="outlined" square>
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="secundary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          size="small"
          color="secundary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          size="small"
          color="secundary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          label="confirmPassword"
          margin="normal"
          variant="outlined"
    
          color="secundary"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Cadastrar
        </Button>
      </div>
    </form>
    </Paper>
  );
};

export default FormSignUp;
