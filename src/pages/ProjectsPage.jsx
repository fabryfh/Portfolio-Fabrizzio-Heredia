import "./styles/ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <article className="resident">
      <div className="icons__father__container animated pulse">
        <h1 className="project__title">Mis Proyectos</h1>

        <div className="project__father__container">
          <div className="project__groups">
      
            <div className="project__group__1">
              <p className="project__title__cards
              __container"> E-commerce</p>
              <img
                className="project__image"
                src="/images/imge/img-1.png"
                alt=""
              />
            </div>
            <div className="project__group__2">
              <p className="project__description">
                Es una tienda virutal hecha completamente vanilla.
              </p>
              <div className="project__btn__card__container">
                <button className="project__btn__card">
                <i class='bx bx-link-alt bx-md'></i>
                </button>
                <button className="project__btn__card">
                <i class='bx bxl-github bx-md'></i>
                </button>
              </div>
            </div>
          </div>

          <div className="project__groups transUp">
            <div className="project__group__1">
              <p className="project__title__cards">Galleta</p>
              <img
                className="project__image"
                src="/images/imge/img-3.png"
                alt=""
              />
            </div>

            <div className="project__group__2">
              <p className="project__description">
                Tengo los fundamentos en Javascript que es el código que nos
                permite dar la funcionalidad de forma lógica a las páginas.
              </p>
            </div>
          </div>

          <div className="project__groups transUp">
            <div className="project__group__1">
              <p className="project__title__cards"> Aplicación del clima</p>
              <img
                className="project__image"
                src="/images/imge/img-5.png"
                alt=""
              />
            </div>
            <div className="project__group__2">
              <p className="project__description">
                Facilidad y buen desempeño en CSS3 que es el código que permite
                dar los estilos visuales a la página o app haciendolas
                completamente responsivas.
              </p>
            </div>
          </div>

          
          <div className="project__groups transUp">
          <div className='project__group__1'>
            <p className="project__title__cards"> Rick & Morty</p>
            <img
              className="project__image"
              src="/images/imge/img-7.png"
              alt=""
            />
          </div>
          <div className='project__group__2'>
            <p className="project__description">
              {" "}
              Excelente desenvolvimiento usando React que es la librería que
              permite desarrollar páginas web combinando todas las hablidades ya
              mencionadas.
            </p>
          </div>
          </div>

          <div className="project__groups transUp">
          <div className='project__group__1'>
            <p className="project__title__cards"> E-commerce Vanilla</p>
            <img
              className="project__image"
              src="/images/imge/img-9.png"
              alt=""
            />
          </div>
          
        <div className='project__group__2'>
            <p className="project__description">
              {" "}
              Conocimientos en Note Js que es un código abierto,
              multi-plataforma que permite la construcción las herramientas
              usadas en el desarrollo de apps y páginas desde el lado de los
              servidores.
            </p>
        </div>
          </div>
          <div className="project__groups transUp">
          <div className='project__group__1'>
            <p className="project__title__cards"> E-commerce Vanilla</p>
            <img
              className="project__image"
              src="/images/imge/img-11.png"
              alt=""
            />
          </div>
          <div className='project__group__2'>
            <p className="project__description">
              {" "}
              Conocimientos en Note Js que es un código abierto,
              multi-plataforma que permite la construcción las herramientas
              usadas en el desarrollo de apps y páginas desde el lado de los
              servidores.
            </p>
          </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;
