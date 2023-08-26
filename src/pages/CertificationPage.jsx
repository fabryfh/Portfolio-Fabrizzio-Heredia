import "./styles/CertificationPage.css";

const CertificationPage = () => {
  return (
    <div className="certif__father__container animated pulse">
      <h1 className="certif__title">Certificaciones</h1>

      <div className="icons__father__container">
        <div className="certif__groups">
          <div className="certif__img__descr1">
            <img
              className="certif__lag__imge"
              src="/images/imgCert/certif-1.png"
              alt=""
            />
            <img
              className="certif__lag__imge2"
              src="/images/imgCert/certif-1-1.png"
              alt=""
            />
          </div>
          <br />
          <div className="certif__img__descr2">
            <p className="certif__description">
              Curzado y terminado con éxito los fundamentos en HTML, CSS3 y Javascript.
            </p>
          </div>
        </div>

        <div className="certif__groups transUp">
          <div className="certif__img__descr1">
            <img
              className="certif__lag__imge"
              src="/images/imgCert/certif-2.png"
              alt=""
            />
            <img
              className="certif__lag__imge2"
              src="/images/imgCert/certif-2-2.png"
              alt=""
            />
          </div>
          <div className="certif__img__descr2">
            <br />
            <p className="certif__description">
            Curzado y terminado con éxito el módulo de la librería de React.
            </p>
          </div>
        </div>
      </div>


      <div className="certif__downland__container">
        <h1 className="certif__download__title">Descargar CV</h1>
        <div className="certif__btn__container">
        <a className="certif__btn__downlader1" href="./Cvs/Dev-FH-ES.pdf">
        <p className="certif__btn__lyrics">ES</p>
        </a>
        <a className="certif__btn__downlader2" href="./Cvs/Dev-FH-EN.pdf">
        <p className="certif__btn__lyrics">EN</p>
        </a>
        </div>
        </div>


    </div>
  );
};

export default CertificationPage;
