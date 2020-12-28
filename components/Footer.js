const Footer = (props) => (
    <footer id="footer">
        <div className="inner" >
        <h2>Contacto:</h2>
        <p>Al momento de realizar su cita, por favor mencione el estudio que se desea realizar.</p>
            <ul className="icons">
                <li><a href="mailto:info@ultrasonidomed.com"className="icon alt fa-envelope" target="_blank" title="correo electrónico"> info@ultrasonidomed.com</a></li>
                <li><span className="label" className="icon alt fa-phone"></span> (55)14 51 90 83</li>
                <li><a href="https://maps.app.goo.gl/EMnXfexPCLksD5KQ8" className="icon alt fa-home" target="_blank" title="Dirección"> Zacatecas 35-402, CP 06700, Roma Norte, Ciudad de México</a></li>
                <li><a href="https://www.facebook.com/ultrasonidomed" className="icon alt fa-facebook" target="_blank" title="Página en Facebook"><span className="label">Facebook</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Todos los derechos reservados</li>
            </ul>
        </div>
    </footer>
)

export default Footer
