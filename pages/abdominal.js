import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido abdominal</title>
            <meta name="description" content="Conoce qué es y para qué sirve un ultrasonido abdominal" />
            <meta name="keywords" content="ultrasonido abdominal, que es un ultrasonido abdominal"/>
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido abdominal</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        
                            <h3>¿Cómo es un estudio de ultrasonido abdominal?</h3>
                        
                        <p>El ultrasonido abdominal consiste en examinar las imágenes obtenidas a través del equipo de ultrasonido de órganos intra-abdominales como: hígado, vesícula, páncreas, bazo, riñones, estructuras vasculares(abdomen superior), etc.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>   
                        <div className="u"><span className="image fit"><img src="/static/images/abdominal.jpg" alt="ultrasonido abdominal" title='ultrasonido abdominal'/></span></div>
                        <div className="content">
                            <div className="inner">
                            <header className="minor">
                                <h4>¿Qué puede hacer el médico con base al resultado de un estudio abdominal?</h4>
                            </header>
                                <p>El médico puede diagnosticar alteraciones hepáticas (hepatitis, hígado graso, etc), revisar alteraciones en su vesícula biliar (piedras, pólipos, etc), páncreas(pancreatitis, tumores, etc), riñones (crecimientos caliciales-hidronefrosis, piedras, etc), bazo (esplenomegalia-crecimiento por varios motivos, etc)</p>
                            {/* <header className="minor">
                                <h4>¿Por qué me pueden pedir un estudio de abdomen?</h4>
                            </header>
                                <p>Generalmente se realiza este estudio como estudio secundario a estados postraumáticos (golpes, contusiones, lesiones) sobre músculos y articulaciones.</p> */}
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
