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
                    <title>Ultrasonido médico diagnóstico</title>
                    <meta name="description" content="estudios de ultrasonido médico con equipo de última generación en la ciudad de méxico" />
                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content="ultrasonido médico diagnóstico" />
                    <meta name="og:description" property="og:description" content="estudios de ultrasonido médico en la ciudad de méxico" />
                    <meta property="og:site_name" content="ultrasonido médico diagnóstico" />
                    <meta property="og:url" content="http://www.ultrasonidomed.com/" />  
                    <link rel="shortcut icon" href="/static/images/logoUM.jpg"></link>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="" />  

                    <link href="/static/css/skel.css" rel="stylesheet" />
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
