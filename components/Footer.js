const Footer = (props) => (
    <footer id="footer">
        <div className="inner">

            <ul className="icons">
                <h2>Contacto:</h2>
                <li><a href="mailto:info@ultrasonidomed.com"className="icon alt fa-envelope" target="_blank" title="correo electrónico"> info@ultrasonidomed.com</a></li>
                <li><span className="label" className="icon alt fa-phone"></span> (55)14 51 90 83</li>
                <li><a href="https://goo.gl/maps/zgqNudtLEJ72" className="icon alt fa-home" target="_blank" title="Dirección"> Zacatecas 35-402, CP 06700, Roma Norte, Ciudad de México</a></li>
                <li><a href="https://www.facebook.com/ultrasonidomed" className="icon alt fa-facebook" target="_blank" title="Página en Facebook"><span className="label">Facebook</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Todos los derechos reservados</li>
            </ul>
        </div>
    </footer>
)

export default Footer
