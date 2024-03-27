import React from 'react'
import styles from "./QuienesSomos.module.css"
export  function QuienesSomos() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.container1}>
        <div className={styles.imgPrincipal}>
          <img src="./src/assets/QuienesSomos.png" alt="Img Quienes Somos" />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.imgLogo}>
            <img src="./src/assets/LogoQuienesSomos.png" alt="Img Logo" />
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
            <img src="./src/assets/MisionLogo.png" alt="Img Mision" />
          </div>
          <div className={styles.infoTarjeta}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati enim repellendus sit officiis iusto rerum dignissimos facere saepe debitis totam esse vel reiciendis numquam suscipit aspernatur id nulla, pariatur nesciunt!</p>
          </div>
        </div>
        <div className={styles.tarjeta}>
            <div>
              <img src="./src/assets/VisionLogo.png" alt="Img Vision" />
            </div>
            <div className={styles.infoTarjeta}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati enim repellendus sit officiis iusto rerum dignissimos facere saepe debitis totam esse vel reiciendis numquam suscipit aspernatur id nulla, pariatur nesciunt!</p>
            </div>
        </div>
        <div className={styles.linea2}></div>


      </div>

    </div>
  )
}
