import './styles/ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <article className="resident">
<div className="icons__father__container animated pulse">
      <h1 className='icons__title'>Mis Proyectos</h1>
      
      <div className="project__father__container">
      <div className="project__groups">
      <img className='project__image' src="/images/imge/img-1.png" alt="" />
        <p className='description'> Conocimientos en html que es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
        </div>

         <div className="project__groups transUp">
      <img className='project__image' src="/images/imge/img-3.png" alt="" />
        <p className='description'>Tengo los fundamentos en Javascript que es el código que nos permite dar la funcionalidad de forma lógica a las páginas.</p>
      </div>

      <div className="project__groups transUp">
      <img className='project__image' src="/images/imge/img-5.png" alt="" />
        <p className='description'>Facilidad y buen desempeño en CSS3 que es el código que permite dar los estilos visuales a la página o app haciendolas completamente responsivas.</p>
      </div>

      <div className="project__groups transUp">
      <img className='project__image' src="/images/imge/img-7.png" alt="" />
        <p className='description'> Excelente desenvolvimiento usando React que es la librería que permite desarrollar páginas web combinando todas las hablidades ya mencionadas.</p>
      </div>

      <div className="project__groups transUp">
      <img className='project__image' src="/images/imge/img-9.png" alt="" />
        <p className='description'> Conocimientos en Note Js que es un código abierto, multi-plataforma que permite la construcción las herramientas usadas en el desarrollo de apps y páginas desde el lado de los servidores.</p>
      </div>
      <div className="project__groups transUp">
      <img className='project__image' src="/images/imge/img-11.png" alt="" />
        <p className='description'> Conocimientos en Note Js que es un código abierto, multi-plataforma que permite la construcción las herramientas usadas en el desarrollo de apps y páginas desde el lado de los servidores.</p>
      </div>
    </div>

    </div>  
    </article>
  )
}

export default ProjectsPage