import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/Doppler_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido tiroideo</h3>
                            {/* <p>Nisl sed aliquam</p> */}
                        </header>
                        <Link href="/tiroideo"><a className="link primary"></a></Link>
                    </article>
                    
                    <article style={{backgroundImage: `url('/static/images/pregnancyNew_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido obstétrico</h3>
                        </header>
                        <Link href="/obstetrico"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/abdominal_idx.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido abdominal</h3>
                        </header>
                        <Link href="/abdominal"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/musculoEsc.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido musculoesquelético</h3>
                        </header>
                        <Link href="/musculo"><a className="link primary"></a></Link>
                    </article>                    
                    <article style={{backgroundImage: `url('/static/images/maths.jpg')`}}>
                        <header className="major">
                            <h3>¿Cómo funciona un equipo de ultrasonido?</h3>
                        </header>
                        <Link href="/funciona-ultrasonido"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h3>Dr. Rafael JIménez</h3>
                            <br></br>
                            <p>Curriculum:</p>
                            
                        </header>
                        <ul className="alt">
                            <li>Médico General por la Universidad Nacional Autónoma de México (UNAM).</li>
                            <li>Médico certificado por International Certification and Education Accreditation Foundation (ICEAF).</li>
                            <li>Médico Ultrasonografísta AMUSEM.</li>
                            <li>Médico adscrito al ISSSTE.</li>
                        </ul>
                    </div>
                    {/* <div className="inner">
                        <header className="major">
                            <h2>¿Qué es el ultrasonido?</h2>
                        </header>
                        <p>El ultrasonido es un tipo de onda sonora de alta frecuencia que, en medicina, se utiliza para rehabilitación y diagnósis. Éste último es una herramienta para analizar estructuras internas del cuerpo humano, como: corazón, vasos sanguineos, riñones, hígado, así como otros órganos. Durante el embarazo, los médicos también utilizan el ultrasonido para dar seguimiento al bebé.</p>
                    </div> */}

                </section>
                
            </div>

        </div>
    </Layout>
)
