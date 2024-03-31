import React from 'react'
import styles from "./QuienesSomos.module.css"
export  function QuienesSomos() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.container1}>
        <div className={styles.imgPrincipal}>
          <img src="./src/assets/QuienesSomos.png" className={styles.imgCircular} alt="Img Quienes Somos" />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.imgLogo}>
            <img src="./src/assets/LogoQuienesSomos.png" className={styles.imgLogoQuienesSomos} alt="Img Logo" />
          </div>
          <div className={styles.info}>
              <p>
              Los grupos estudiantiles son una parte importante de la vida universitaria, ya que ofrecen a los estudiantes la oportunidad de desarrollar habilidades de liderazgo, trabajar en proyectos interesantes y conocer a otros estudiantes con intereses similares. Por ende nosotros somos un grupo de estudiantes  de la universidad Metropilitana que busca conectarte y ayudarte a encontrar esa agrupación que te apasione, te saque de tu zona de confort y a la misma vez te haga sentir seguro.
              </p>
          </div>

        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.linea1}></div>
        <div className={styles.tarjeta}>
          <div>
            <img src="./src/assets/MisionLogo.png" className={styles.imgMision} alt="Img Mision" />
          </div>
          <div className={styles.infoTarjeta}>
            <p className={styles.texto}>Fomentar la participación estudiantil, facilitando la conexión entre los alumnos y las agrupaciones, la página web funcionará como intermediario, brindando información detallada sobre cada una de ellas, y además, permitiendo afiliación online. La página web promoverá la diversidad, la colaboración y el crecimiento personal, enriqueciendo la vida estudiantil y fortaleciendo la comunidad universitaria</p>
          </div>
        </div>
        <div className={styles.tarjeta}>
            <div>
              <img src="./src/assets/VisionLogo.png" className={styles.imgVision} alt="Img Vision" />
            </div>
            <div className={styles.infoTarjeta}>
            <p className={styles.texto}>Consolidar una plataforma virtual dinámica que se convierta en una referencia para los estudiantes de la UNIMET en busca de participar en agrupaciones. El objetivo de “UNIMEET” es convertirse en un medio para descubrir diversas agrupaciones estudiantiles, donde cada estudiante pueda encontrar una agrupación que se ajuste a sus intereses, contribuyendo así a su desarrollo integral y a la construcción de una verdadera comunidad universitaria.</p>
            </div>
        </div>
        <div className={styles.linea2}></div>


      </div>

    </div>
  )
}
