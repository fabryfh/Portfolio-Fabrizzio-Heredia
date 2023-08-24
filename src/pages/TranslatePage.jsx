import './styles/TranslatePage.css'


const TranslatePage = () => {
  return (
    <div className="icons__father__container animated pulse">
      <h1 className='icons__title'>Mis Habilidades</h1>
      
      <div className="icons__father__container">
      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/html-01.svg" alt="" />
        <p className='description'> Es uno de los básicos que no pueden faltar para ser un desarrollador Full Stack. 
        Es lo que me permite dar estilo.</p>
        </div>

         <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/js-01.svg" alt="" />
        <p className='description'>Creando proyectos innovadores y hechos a la medida.  </p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/css-01.svg" alt="" />
        <p className='description'>Me permite darle estilo al contenido y decorar la parte más cercana al usuario, así mismo
        poder darle un diseño responsivo. </p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/react-01.svg" alt="" />
        <p className='description'> Dando funcionalidad dinámica, estilos unicos y personalizados. </p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/node-01.svg" alt="" />
        <p className='description'> Lenguaje que me permite desarrollar aplicaciones web al igual que JS, dando estilos unicos. </p>
      </div>

      </div>

    </div>
  )
}

export default TranslatePage