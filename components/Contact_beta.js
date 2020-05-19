const Contact = (props) => (
    <section id="contact">
        <div className="outer">

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
