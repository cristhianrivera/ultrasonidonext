import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido Músculo-Esquelético</title>
            <meta name="ultrasonido musculo esqueletico" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido Músculo-Esquelético</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h3>¿Cómo es un estudio de ultrasonido músculo-esquelético?</h3>
                        </header>
                        <p>Es un estudio de imagen, no invasivo y completamente indoloro que sirve para examinar los elementos blandos de los que están formados las articulaciones, estos elementos incluyen: músculos, tendones, ligamentos, etc. </p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>   
                            <div className="u"><span className="image fit"><img src="/static/images/musculoEsc1.jpg" alt="ultrasonido obstetrico" title='ultrasonido obstétrico'/></span></div>
                        <div className="content">
                            <div className="inner">
                            <header className="minor">
                                <h4>¿Qué puede hacer el médico con base al resultado de un estudio músculo-esquelético?</h4>
                            </header>
                                <p>El médico podrá ver y analizar, posibles datos de inflamación(edema), quistes, bursitis, tumores, calcificaciones, rupturas tendinosas, sospechas de artritis reumatoidea, etc.</p>
                            <header className="minor">
                                <h4>¿Por qué me pueden pedir un estudio de ultrasonio músculo-esquelético?</h4>
                            </header>
                                <p>Generalmente se realiza este estudio como estudio secundario a estados postraumáticos (golpes, contusiones) sobre músculos y articulaciones.</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
