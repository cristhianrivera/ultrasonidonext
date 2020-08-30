import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido en 4d</title>
            <meta name="description" content="conoce cómo es y para qué sirve un ultrasonido 4d (cuarta dimensión)" />
            <meta name="keywords" content="ultrasonido musculoesqueletico, que es el ultrasonido en 4d"/>
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido en cuarta dimensión (4d)</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="two" className="spotlights">
                    <section>   
                        <div className="u"><span className="image fit"><img src="/static/images/4d1.jpg" alt="ultrasonido musculoesquelético" title='ultrasonido músculo-esquelético'/></span></div>
                        <div className="content">
                            <div className="inner">
                                <header className="minor">
                                    <h4>¿Qué es un ultrasonido en 4d?</h4>
                                    </header>
                                    <p>Un ultrasonido 4D es la última tecnología de ultrasonido. A través de muchas imágenes convencionales en 2d se crea una imagen en donde se aprecia una superficie, una imagen en 3d. Por último, esta imagen en 3d es actualizada constantemente por el equipo de ultrasonido dando lugar a un video que muestra en tiempo real los movimientos del bebé. 
                                    </p>
                                    <header className="minor">
                                    <h4>¿Qué ventajas tienen los ultrasonidos en 4d?</h4>
                                    </header>
                                    <p>Los ultrasonidos en 4d son especialmente útiles al momento de identificar posibles anomalías en el bebé, pues en las imágenes se pueden apreciar diferentes profundidades y con esto los nuevos padres pueden entender mejor el diagnóstico del médico.</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
