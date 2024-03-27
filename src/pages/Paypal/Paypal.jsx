import React from 'react';
import styles from "./Paypal.module.css";
export function Paypal(){

    return(
        <div className={styles.box}>
            <img className={styles.vectorImg} src="src\assets\VectorImage.png" alt="" />
            <div className={styles.title}>
                Agradecemos su <span class={styles.colaboracion}>colaboración</span>
            </div>
            <div className={styles.mid}>
                <div className={styles.text}>
                    UNIMEET es un sistema sin fines de lucro, financiado por donaciones y colaboraciones hechas por sus usuarios que disfrutan de sus servidios.
                    Cualquier aporte nos ayuda a seguir fomentando la cultura en la universidad!
                </div>
                <button>asd</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.square}>
                    <div className={styles.topSquare}>Colaboración sugerida</div>
                    <div className={styles.botSquare}>10$</div>
                </div>
            </div>
        </div>
    )
}