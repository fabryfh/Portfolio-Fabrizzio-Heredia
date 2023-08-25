import './styles/TranslatePage.css'


const TranslatePage = () => {
  return (
    <div className="icons__father__container animated pulse">
      <h1 className='icons__title'>Mis Habilidades</h1>
      
      <div className="icons__father__container">
      <div className="icons__groups">
      <img className='icons__abilities' src="/images/html-01.svg" alt="" />
        <p className='description'> Conocimientos en html que es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
        </div>

         <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/js-01.svg" alt="" />
        <p className='description'>Tengo los fundamentos en Javascript que es el código que nos permite dar la funcionalidad de forma lógica a las páginas.</p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/css-01.svg" alt="" />
        <p className='description'>Facilidad y buen desempeño en CSS3 que es el código que permite dar los estilos visuales a la página o app haciendolas completamente responsivas.</p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/react-01.svg" alt="" />
        <p className='description'> Excelente desenvolvimiento usando React que es la librería que permite desarrollar páginas web combinando todas las hablidades ya mencionadas.</p>
      </div>

      <div className="icons__groups transUp">
      <img className='icons__abilities' src="/images/node-01.svg" alt="" />
        <p className='description'> Conocimientos en Note Js que es un código abierto, multi-plataforma que permite la construcción las herramientas usadas en el desarrollo de apps y páginas desde el lado de los servidores.</p>
      </div>

      </div>

    </div>
  )
}

export default TranslatePage