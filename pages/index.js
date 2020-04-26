import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/HumanBody_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido músculo esquelético</h3>
                        </header>
                        <Link href="/me"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pregnancyNew_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido Obstétrico</h3>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/transductorModified_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido Abdominal</h3>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/Doppler_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido Tiroideo</h3>
                            {/* <p>Nisl sed aliquam</p> */}
                        </header>
                        <Link href="/tiroideo"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/transductorModified_best.jpg')`}}>
                        <header className="major">
                            <h3>¿Cómo funciona un equipo de ultrasonido?</h3>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>¿Qué es el ultrasonido?</h2>
                        </header>
                        <p>El ultrasonido es un tipo de onda sonora de alta frecuencia que, en medicina, se utiliza para rehabilitación y diagnósis. Éste último es una herramienta para analizar estructuras internas del cuerpo humano, como: corazón, vasos sanguineos, riñones, hígado, así como otros órganos. Durante el embarazo, los médicos también utilizan el ultrasonido para dar seguimiento al bebé.</p>
                        {/* <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul> */}
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
