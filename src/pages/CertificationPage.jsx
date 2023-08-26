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
          <div className="certif__img__descr2">
            <p className="certif__description">
              {" "}
              Conocimientos en html que es el código que se utiliza para
              estructurar y desplegar una página web y sus contenidos.
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
            <p className="certif__description">
              Tengo los fundamentos en Javascript que es el código que nos
              permite dar la funcionalidad de forma lógica a las páginas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
