import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import React from 'react';

export default () => (
    <Layout>

        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/Doppler_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido tiroideo</h3>
                            <div className="inner">
                            <p>Ecografía que produce imágenes de la glándula tiroides y estructuras adyacentes en el cuello, utilizada principalmente para evaluar nódulos que se detectan en exámenes físicos rutinarios, así como otros no palpables.</p>
                            <Link href=""><a className="button" title="Leer más">Leer más</a></Link>
                            </div>
                        </header>
                        <Link href="/tiroideo"><a className="link primary" title="Más información sobre el ultrasonido tiroideo"></a></Link>                        
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pregnancyNew_best.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido obstétrico</h3>
                            <div className="inner">
                            <p>Procedimiento enfocado al seguimiento y desarrollo del feto en el útero materno. Siendo 100% seguro y no invasivo tanto para la madre como para el bebé.</p>
                            <Link href=""><a className="button" title="Leer más">Leer más</a></Link>
                            </div>
                        </header>
                        <Link href="/obstetrico"><a className="link primary" title="Más información sobre el ultrasonido obstétrico"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/abdominal_idx_optimized.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido abdominal</h3>
                            <div className="inner">
                            <p>Estudio que valora órganos intraabdominales, (hígado, páncreas, vesícula biliar, bazo etc.) siendo un auxiliar diagnóstico de gran utilidad para el clínico.</p>
                            <Link href=""><a className="button" title="Leer más">Leer más</a></Link>
                            </div>
                        </header>
                        <Link href="/abdominal"><a className="link primary" title="Más información sobre el ultrasonido abdominal"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/musculoEsc_optimized.jpg')`}}>
                        <header className="major">
                            <h3>Ultrasonido musculoesquelético</h3>

                            <div className="inner">
                            <p>Estudio realizado con equipo de alta definición que permite valorar el estado de los músculos, articulaciones, tendones y ligamentos con el objetivo de llegar un diagnóstico integral.</p>
                            <Link href=""><a className="button" title="Leer más">Leer más</a></Link>
                            </div>

                        </header>
                        <Link href="/musculo"><a className="link primary" title="Más información sobre el ultrasonido musculoesquelético"></a></Link>
                    </article>                    
                    <article style={{backgroundImage: `url('/static/images/maths_optimized.jpg')`}}>
                        <header className="major">
                            <h3>¿Cómo funciona un equipo de ultrasonido?</h3>
                            
                            <div className="inner">
                            <p>Un estudio de ultrasonido médico es 100% seguro. Conoce cómo se generan las imágenes en un equipo de ultrasonido. </p>
                            <Link href=""><a className="button" title="Leer más">Leer más</a></Link>
                            </div>

                        </header>
                        <Link href="/funciona-ultrasonido"><a className="link primary" title="¿Cómo funciona un equipo de ultrasonido?"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h3>Dr. Rafael Jiménez</h3>
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
