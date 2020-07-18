import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Funcionamiento de un equipo de ultrasonido</title>
            <meta name="description" content="conoce cómo funciona un equipo de ultrasonido" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    
                        <h1>¿Cómo funciona un equipo de ultrasonido?</h1>
                    
                    <span className="image main"><img src="/static/images/sound.jpg" alt="ondas de sonido" /></span>
                    <p class="excert">
                    Primero, el sonido es una vibración que es transmitida a través de un medio(el aire). Todas las vibraciones tienen una frecuencia y esta medida hace referencia a las vibraciones por segundo. <br/>
                    Ahora, llamamos sonido a todo lo que el oido humano puede escuchar, es decir, a todas las frecuencias que el oido humano puede identificar, pero... ¿qué pasa con las demás frecuencias?
                    </p>
                    <p>
                    La unidad de medida para la frecuencia son los Hertz (Hz), y puede ser considerada como las vibraciones por segundo (¡esta no es una definición formal!).
                    <ul class="col">
                        <li><b>Infrasonido:</b> Frecuencias menores a 20 Hz.</li>
                        <li><b>Sonido:</b> Frecuencias en el rango 20 Hz a 20,000 Hz.</li>
                        <li><b>Ultrasonido:</b> Frecuencias superiores a los 20,000 Hz.</li>
                    </ul>
                    </p>
                    <p>
                    Con lo anterior, podemos enforcarnos (¡por fin!) en saber, ¿cómo funciona un equipo de ultrasonido? <br/>
                    Un equipo de ultrasonido consiste de varios componentes, siendo los más importantes el procesador (similar al que tiene una computadora), y un transductor. Éste último es el que el médico acerca a tu cuerpo. El transductor tiene unos finísimos componententes llamados <a href="https://es.wikipedia.org/wiki/Piezoelectricidad" target="_blank"> <b>piezoeléctricos</b></a>, estos están conectados a un switch eléctrico que se prende y apaga (muy rápidamente) lo que ocasiona expansiones y contracciones de los piezoelétricos. Los movimientos de los piezoelétricos son tan veloces que generan vibraciones a más de 20,000 Hz.
                    </p>
                    <p>
                    El siguiente paso del proceso es del transductor al cuerpo, aquí es indispensable el uso de gel, pues ese líquido espeso es el medio idóneo para que las ondas de ultrasonido lleguen a su objetivo sin ser desviadas por alguna resistencia, en este caso, el aire. Entonces, cada vez que el médico ponga gel en tu cuerpo, recuerda que es para un mejor estudio, lo que se traduce en un mejor diagnóstico.
                    Una vez que las ondas están siendo enviadas a tu cuerpo, dos cosas pueden pasar, se dispersan o se reflejan, las ondas que se dispersan simplemente se pierden, mientras que las útlimas son las que el transductor recibe por medio de los piezoeléctricos (sí, ¡otra vez!).
                    Por último, las ondas que recibe el transductor son enviadas al procesador del equipo y aquí empieza otra gran parte del proceso (que no explicaremos aquí, ¡no hay suficiente espacio!). Una vez que las ondas son procesadas, se muestran las imágenes en el monitor del equipo de ultrasonido y el médico puede entonces hacer su análisis e interpretación.
                    </p>
                    <p>
                    En resumen:
                    <ul class="col">
                        <li>Ondas de ultrasonido son producidas y enviadas a tu cuerpo,</li>
                        <li>Una porción de las ondas que fueron enviadas a tu cuerpo regresan,</li>
                        <li>Las ondas son procesadas (muchas mátematicas y física aquí <span class="lnr lnr-smile"></span>) y se generan imágenes que el médico analiza.</li>
                    </ul>
                    <br/>
                    Toma en cuenta que, <b>¡todo el proceso sucede en fracciones de segundo!</b>, y aún mejor, un ultrasonido diagnóstico es 100% seguro.
                    </p>
                    <blockquote>Solo falta un componente, el que da sentido a las imágenes y sabe qué es importante analizar: <b>el médico</b>.</blockquote>
                    <a href="/" className="button small icon fa-arrow-left">Ir a inicio</a>
                </div>
            </section>
                
        </div>


    </Layout>
)
