import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido obstétrico</title>
            <meta name="description" content="Conoce para qué es y cómo se realiza un estudio de ultrasonido obstétrico" />
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido obstétrico</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        
                            <h3>¿Cómo es un estudio de ultrasonido obstétrico?</h3>
                        
                        <p>Es una captura de imágenes al nivel del vientre por medio de un equipo de ultrasonido. El estudio es de máxima seguridad para la madre y el bebé. Durante el estudio se examina la anatomía del bebé (feto), características de la placenta, útero y anexos. También, de acuerdo a la edad gestacional, permite descubrir alteraciones en el del desarrollo del bebé.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>   
                            <div className="u"><span className="image fit"><img src="/static/images/4d.jpg" alt="ultrasonido obstetrico" title='ultrasonido obstétrico'/></span></div>
                        <div className="content">
                            <div className="inner">
                            <header className="minor">
                                    <h4>¿Qué puede hacer el médico con base al estudio?</h4>
                            </header>
                            <p>El médico podrá dar seguimiento del crecimiento y desarrollo del bebé. También, el médico podrá analizar características especiales como medidas del interior del cráneo, tórax, abdomen, miembros superiores/inferiores y corazón. Un estudio de ultrasonido obstétrico, al momento del rastreo, facilita la detección de enfermedades del bebé.</p>
                            <header className="minor">
                                <h4>¿En qué consiste un ultrasonido obstétrico 4D?</h4>
                            </header>
                                <p>Es un ultrasonido obstétrico con un equipo capaz de mostrar al bebé en forma volumétrica en tiempo real, es decir, podemos ver los movimientos del bebé al momento de realizar el estudio. </p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
