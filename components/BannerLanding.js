import Link from 'next/link'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                {/* <h1>Landing</h1> */}
                {props.children}
            </header>
            {/* <div className="content">
                <p>Lorem ipsum dolor sit amet nullam consequat<br />
                sed veroeros. tempus adipiscing nulla.</p>
            </div> */}
            <ul className="actions" align='right'>
                {/* <Link href="/"><a className="button small"> Ir a inicio</a></Link> */}
                {/* <Link href="/" className="button icon fa-arrow"><a>Ir a inicio</a></Link> */}
                <li><a href="/" className="button small icon fa-arrow-left" title="Ir a inicio">Ir a inicio</a></li>
            </ul>
        </div>
    </section>
)

export default BannerLanding
