import { Link } from "react-router-dom"
import './styles/Page404.css'

const Page404 = () => {
  return (
    <div className="page__404__father__container">
        <h1 className="page__404__container">
            ❌ No se ha encontrado esta página. ❌
            <img className="page__404img__container" src="/images/Page404/pageErr.gif" alt="" /> 
            <Link to='/'>
            ✅ Por favor regresa a la pagina principal ✅
            </Link>
        </h1>
    </div>
  )
}

export default Page404