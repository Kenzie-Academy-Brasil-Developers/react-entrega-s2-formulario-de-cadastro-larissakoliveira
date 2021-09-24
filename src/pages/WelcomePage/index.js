import './styles.js'
import { Link, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { Container } from "./styles"

const WelcomePage = () => {

    const { id } = useParams()

    return (
        <Container>
            <h1>Bem-vindx {id}!</h1>
            <Button
          type="submit"
          variant="outline"
          color="inherit"
        >
            <Link to="/">Voltar</Link>
            </Button>
        </Container>
    )
}

export default WelcomePage