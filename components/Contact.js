const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Teléfono</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="name">Correo</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Fecha de consulta</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
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
                        <a href="#">info@ultrasonidomed.com</a>
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
