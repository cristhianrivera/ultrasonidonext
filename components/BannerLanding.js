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
                <Link href="/"><a>Ir a inicio</a></Link>
            </ul>
        </div>
    </section>
)

export default BannerLanding
