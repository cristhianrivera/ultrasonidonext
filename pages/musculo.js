import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido musculoesquelético</title>
            <meta name="description" content="conoce cómo es y para qué sirve un ultrasonido músculo esquelético" />
            <meta name="keywords" content="ultrasonido musculoesqueletico, que es el ultrasonido musculoesqueletico"/>
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido musculoesquelético</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        
                            <h3>¿Cómo es un estudio de ultrasonido musculoesquelético?</h3>
                        
                        <p>Es un estudio de imagen, no invasivo y completamente indoloro que sirve para examinar los elementos blandos de los que están formados las articulaciones, estos elementos incluyen: músculos, tendones, ligamentos, etc. </p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>   
                        <div className="u"><span className="image fit"><img src="/static/images/MusculoEsq.png" alt="ultrasonido musculoesquelético" title='ultrasonido músculo-esquelético'/></span></div>
                        <div className="content">
                            <div className="inner">
                            <header className="minor">
                                <h4>¿Qué puede hacer el médico con base al resultado de un estudio musculoesquelético?</h4>
                            </header>
                                <p>El médico podrá ver y analizar, posibles datos de inflamación(edema), quistes, bursitis, tumores, calcificaciones, rupturas tendinosas, sospechas de artritis reumatoidea, etc.</p>
                            <header className="minor">
                                <h4>¿Por qué me pueden pedir un estudio de ultrasonio musculoesquelético?</h4>
                            </header>
                                <p>Generalmente se realiza este estudio como estudio secundario a estados postraumáticos (golpes, contusiones, lesiones) sobre músculos y articulaciones.</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
