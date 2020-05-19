const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <h2>Contacto:</h2>
                    <div className="field half first">
                        <label htmlFor="name">Nombre*</label>
                        <input type="text" name="name" id="name" required="yes"/>
                    </div>
                    <div className="field half">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="text" name="phone" id="phone" placeholder="Teléfono a 10 dígitos"/>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="text" name="email" id="email" placeholder="ejemplo@ejemplo.com" required="yes"/>
                    </div>
                    {/* <div className="field half">
                        <label htmlFor="email">Fecha de consulta</label>
                        <input type="date" name="email" id="email" />
                    </div> */}
                    <div className="field" >
                        <label htmlFor="message">Mensaje*</label>
                        <textarea name="message" id="message" rows="6" required="yes"></textarea>
                    </div>
                    <p><em>*Campos obligatorios</em></p>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar mensaje" className="special" /></li>
                        {/* <li><input type="reset" value="Clear" /></li> */}
                    </ul>
                    
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Correo electrónico</h3>
                        <a href="mailto:info@ultrasonidomed.com" target="_blank">info@ultrasonidomed.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Teléfono</h3>
                        <span>(55) 1451 9083</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Dirección</h3>
                        <span>
                        <a href="https://goo.gl/maps/zgqNudtLEJ72" target="_blank">
                            Zacatecas 35-402, CP 06700<br/>
                            Roma Norte, Ciudad de México
                        </a>
                        </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
