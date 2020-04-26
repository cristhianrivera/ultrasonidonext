import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Ultrasonido Músculo Esquelético</title>
            <meta name="ultrsonido músculo esquelético" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding>
                <h1>Ultrasonido Músculo Esquelético</h1>
                <div className="content">
                <p>Estudio de alta especialidad</p>
                </div>
            </BannerLanding> 

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h3>¿Cómo es el estudio?</h3>
                        </header>
                        <p>Estudio realizado con equipo de alta definición que permite valorar el estado de los músculos, articulaciones, tendones, articulaciones, tejidos blandos y ligamentos con el objetivo de llegar un diagnóstico integral.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>¿Qué puede conocer el médico con base al estudio?</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Rhoncus magna</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
