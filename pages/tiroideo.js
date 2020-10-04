import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido de tiroides</title>
            <meta name="description" content="Conoce las características y la utilidad de un ultrasonido de tiroides" />
            <meta name="keywords" content="ultrasonido tiroideo, ultrasonido tiroideo para que sirve, ultrasonido tiroides CDMX"/>
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido tiroideo</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="two" className="spotlights">
                    <section>
                        <div className="u"><span className="image fit"><img src="/static/images/Tiroides.jpg" alt="ultrasonido de tiroides" title='ultrasonido tiroides'/></span></div>
                        <div className="content">
                            <div className="inner">
                                <header className="minor">
                                <h3>¿Qué es un ultrasonido de tiroides?</h3>
                                </header>
                                <p>Es un estudio médico diágnotisco en donde se utiliza un equipo de ultrasonido de alta definición para examinar la forma y posición de la <b>glándula tiroides</b> así como las estructuras cercanas en el cuello.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="u"><span className="image fit"><img src="/static/images/Doppler_short.jpg" alt="ultrasonido de tiroides" title='ultrasonido tiroides'/></span></div>
                        <div className="content">
                            <div className="inner">
                                <header className="minor">
                                    <h4>¿Qué puede conocer el médico con base al estudio?</h4>
                                </header>
                                    <p>En el informe del ultrasonido de tiroides se reportan características de normalidad, medidas y enfermedades de la glándula, desde: Bocio (crecimiento de la tiroides), nodulaciones, quistes; simples y complejos, adenomas, calcificaciones, así como sospecha de cáncer.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        {/* <div className="u"><span className="image fit"><img src="/static/images/Doppler_short.jpg" alt="ultrasonido de tiroides" title='ultrasonido tiroides'/></span></div> */}
                        <div className="content">
                            <div className="inner">
                                <header className="minor">
                                    <h4>¿Porqué me pueden enviar un estudio de ultrasonido de tiroides?</h4>
                                </header>
                                    <p>Habitualmente se realizan cuando hay sospecha de función baja o alta de la tiroides(hipo ó hiper), abultamiento del cuello en su porción anterior y por síntomas que puede detectar el médico.</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
