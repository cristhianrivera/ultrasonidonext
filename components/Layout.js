import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact_beta'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109100491-2"></script>
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-109100491-2');
                            `,
                        }}/>
                    <title>Ultrasonido médico general y de alta especialidad en CDMX</title>
                    /*<meta name="description" content="Ultrasonido médico general y de alta especialidad." />*/
                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content="ultrasonido médico diagnóstico" />
                    <meta name="og:description" property="og:description" content="Ultrasonido médico con equipo de última generación en la colonia Roma CDMX." />
                    <meta property="og:site_name" content="ultrasonido médico diagnóstico" />
                    <meta property="url" content="https://www.ultrasonidomed.com/" />  
                    <meta property="og:url" content="https://www.ultrasonidomed.com/" />  
                    <link rel="shortcut icon" href="/static/images/logoUM.jpg"></link>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="https://www.ultrasonidomed.com/static/images/logoUM.jpg" />  
                    <meta name="ultrasonido médico diagnóstico" content="información sobre consultorio médico especializado en ultrasonido médico diagnóstico en la Colonia Roma, Ciudad de México" />
                    <meta name="keywords" content="ultrasonido medico CDMX, ultrasonido medico diagnostico"/>
                    {/* <link href="/static/css/skel.css" rel="stylesheet" /> */}
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div id="wrapper">
                    {/* <Header onToggleMenu={this.handleToggleMenu} /> */}
                    {this.props.children}
                    {/* <Contact /> */}
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default Layout
