import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div>
        <h1>
            ❌ No se ha encontrado esta página. ❌
            <img src="/images/Page404/pageErr.gif" alt="" /> 
            <Link to='/'>
            ✅ Por favor regresa a la pagina principal ✅
            </Link>
        </h1>
    </div>
  )
}

export default Page404