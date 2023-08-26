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
               <a href="https://bright-stardust-dc5df0.netlify.app/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/E-commerce-finaL.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
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
                Es un pequeño juego que cada vez que se da un click, da una frase diferente al igual que cambia el fondo.
              </p>
              <div className="project__btn__card__container">
                <button className="project__btn__card">
               <a href="https://649cc38e499347087af470af--frolicking-gelato-7a07ef.netlify.app/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/PrimerProyectoCookieFort.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
                </button>
              </div>
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
                Es una app que permite revisar la temperatura con geologalización en tiempo real.
              </p>
              <div className="project__btn__card__container">
                <button className="project__btn__card">
               <a href="https://main--hilarious-boba-e01408.netlify.app/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/ProyectoWeatherApp.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
                </button>
              </div>
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
              Es una página que permite ver el estado actual de todos los personajes del programa actalizado.
            </p>
            <div className="project__btn__card__container">
                <button className="project__btn__card">
               <a href="https://main--eloquent-tiramisu-3a8586.netlify.app/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/Rick_-_Morty_FHR.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
                </button>
              </div>
          </div>
          </div>

          <div className="project__groups transUp">
          <div className='project__group__1'>
            <p className="project__title__cards"> Formas de base de datos</p>
            <img
              className="project__image"
              src="/images/imge/img-9.png"
              alt=""
            />
          </div>
          
        <div className='project__group__2'>
            <p className="project__description">
              Es una app que permite crear nuevos usuarios llenando formas.
            </p>
            <div className="project__btn__card__container">
                <button className="project__btn__card">
               <a href="https://main--meek-melomakarona-04a3be.netlify.app/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/Entregable_4.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
                </button>
              </div>
        </div>
          </div>
          <div className="project__groups transUp">
          <div className='project__group__1'>
            <p className="project__title__cards"> Pokédex</p>
            <img
              className="project__image"
              src="/images/imge/img-11.png"
              alt=""
            />
          </div>
          <div className='project__group__2'>
            <p className="project__description">
              Es una Pokédex que permite consultas los datos completos todos los pokemons.
            </p>
            <div className="project__btn__card__container">
                <button className="project__btn__card">
               <a href="https://pokemon-app-fabrizzio-heredia.netlify.app/#/">
                <i className='bx bx-link-alt bx-md'>  
                </i>
               </a>
                </button>
                <button className="project__btn__card">
                  <a href="https://github.com/fabryfh/PokeApi.git">
                <i className='bx bxl-github bx-md'></i>
                  </a>
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;
