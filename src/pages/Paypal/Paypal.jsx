import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from "./Paypal.module.css";


export function Paypal() {
    const paypalClientID = "AYs5IpQ_d-bnfxXF9ZzcbkG4k_0g4ykp2_xxAkylV7PIr1m7zD2ddodCLkpMcyAivmNO21qCWRAAjLkb";
    const [selectedAmount, setSelectedAmount] = useState("10.00");
    const [paypalVisible, setPaypalVisible] = useState(true); 

    const handleChangeAmount = (e) => {
        setSelectedAmount(e.target.value);
        return selectedAmount;
    };

    const handleVectorImgClick = () => {
        setPaypalVisible(false);
        document.querySelector('.vectorImg').classList.add('clicked');
    };

    return (
        <PayPalScriptProvider options={{ "client-id": paypalClientID }}>
            {paypalVisible && (
                <div className={styles.box}>
                    <img className={styles.vectorImg} src="src\assets\VectorImage.png" alt="" onClick={handleVectorImgClick} />
                    <div className={styles.title}>
                        Agradecemos su <span className={styles.colaboracion}>colaboración</span>
                    </div>
                    <div className={styles.mid}>
                        <div className={styles.text}>
                            UNIMEET es un sistema sin fines de lucro, financiado por donaciones y colaboraciones hechas por sus usuarios que disfrutan de sus servicios.
                            !Cualquier aporte nos ayuda a seguir fomentando la cultura en la universidad!
                        </div>
                        <div>
                        <h4>Selecciona el monto y haz clic en el botón para colaborar:</h4>
                        <select id='donation-select' className={styles.donationSelect}value={selectedAmount} onChange={handleChangeAmount}>
                            <option value="1.00">$1</option>
                            <option value="5.00">$5</option>
                            <option value="10.00">$10</option>
                            <option value="20.00">$20</option>
                            <option value="50.00">$50</option>
                            <option value="100.00">$100</option>
                            <option value="500.00">$500</option>
                            <option value="1000.00">$1000</option>
                        </select>
                        <PayPalButtons
                            style={{ layout: "horizontal", color: "blue", height: 45 }}
                            createOrder={(data, actions) => {
                                const selectedAmount = document.getElementById('donation-select').value;
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: selectedAmount, // Usar el monto seleccionado por el usuario
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                console.log("Pago aprobado:", data);
                                Swal.fire({
                                    icon: "success",
                                    title: "¡Pago exitoso!",
                                    text: "Gracias por tu colaboración.",
                                });
                            }}
                            onError={(err) => {
                                console.error("Error en el pago:", err);
                                Swal.fire({
                                    icon: "error",
                                    title: "¡Error en el pago!",
                                    text: "Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo más tarde.",
                                });
                            }}
                        />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.square}>
                            <div className={styles.topSquare}>Colaboración sugerida</div>
                            <div className={styles.botSquare}>$10</div>
                        </div>
                    </div>
                </div>
            )}
        </PayPalScriptProvider>
    );
}