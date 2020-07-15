import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido de tiroides</title>
            <meta name="description" content="conoce las características de un ultrasonido de tiroides" />
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido tiroideo</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        
                            <h3>¿Cómo es el estudio de tiroides?</h3>
                        
                        <p>Es un estudio de imagen, no invasivo, para examinar la forma y posición de la glándula tiroides, y poder descartar enfermedades propias.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                            {/* <a className="image "><img src="/static/images/Doppler_best.jpg" alt="" /></a> */}
                            <div className="u"><span className="image fit"><img src="/static/images/Doppler_short.jpg" alt="ultrasonido de tiroides" title='ultrasonido tiroides'/></span></div>
                        <div className="content">
                            <div className="inner">
                            <header className="minor">
                                    <h4>¿Qué puede conocer el médico con base al estudio?</h4>
                            </header>
                            <p>Se reportan características de normalidad y enfermedades de la glándula, desde: Bocio (crecimiento de la tiroides), nodulaciones, quistes; simples y complejos, adenomas, calcificaciones, así como sospecha de cáncer.</p>
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
