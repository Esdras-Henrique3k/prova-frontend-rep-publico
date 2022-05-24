import React from 'react';
import '../../App.css';
import '../../App.scss';
import background from "../../assets/imagens/index-image.jpg";
import background_mobile from "../../assets/imagens/index-image-mobile.jpg";
import logo from '../../assets/logo-in8-dev.svg';
import hamb from '../../assets/icones/hamburguer.svg';
import hamb_aberto from '../../assets/icones/hamburguer-aberto0.svg';
import { Text, Box, ResponsiveContext, Header } from 'grommet';

function HeaderHome() {
    const size = React.useContext(ResponsiveContext);

    const styles = {
        backgroundHeader: {
            backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
        },
        backgroundHeaderMobile: {
            backgroundImage: `url(${background_mobile})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
        },
        title: {
            fontWeight: '100', color: 'white'
        },
        subtitle: {
            fontWeight: '100', color: 'white', marginBottom: '60%'
        },
        title_mobile: {
            fontWeight: '100', color: 'white'
        },
        subtitle_mobile: {
            fontWeight: '100', color: 'white', marginBottom: '200%'
        }
    }
    const Navbar = () => {
        return (
            <Box direction='row' className='nav' align='center'>
                <li> <a id='cad' href="#">cadastro</a></li>
                <div className='dot' />
                <li> <a id='lis' href="#">lista</a></li>
                <div className='dot' />
                <li> <a id='sob' href="#">sobre mim  </a></li>
            </Box>
        )
    }

    const [sideBar, setSideBar] = React.useState<string>('none');
    return (
        <>
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: sideBar, backgroundColor: '#29abe2' }} id="mySidebar">


                <Box className='nav' pad={{ left: '5%', top: '5%' }} gap="medium">
                    <Box>
                        <img src={hamb_aberto} style={{ height: '4vh', cursor: 'pointer', marginLeft: '-70%' }} onClick={() => setSideBar('none')} />
                    </Box>
                    <Box>
                        <li> <a id='lis' href="#" >cadastro</a></li>
                        <li> <a id='lis' href="#">lista</a></li>
                        <li> <a id='sob' href="#">sobre mim  </a></li>
                    </Box>
                </Box>
            </div>
            <Box
                style={size == 'xsmall' ? styles.backgroundHeaderMobile : styles.backgroundHeader}
                pad={
                    size == 'large' ? {
                        left: '25%',
                        right: '25%',
                    } : size === 'medium' ? {
                        left: '25%',
                        right: '25%',
                    } : {
                        left: '15%',
                        right: '10%',
                        top: '2%'
                    }
                }


            >
                <Header pad={{ top: 'medium' }}>
                    {size == 'large' ? <img src={logo} style={{ height: '4vh' }} />
                        : size === 'medium' ? <img src={logo} style={{ height: '4vh' }} />
                            : <img src={hamb} style={{ height: '4vh', cursor: 'pointer' }} onClick={() => setSideBar('block')} />}



                    {size === 'large' ? <Navbar /> : size === 'medium' ? <Navbar /> : <img src={logo} style={{ height: '4vh' }} />}
                </Header>
                <Box gap={'0%'} style={{ marginTop: '20%' }} margin={size === 'small' ? { left: '10%' } : size === 'xsmall' ? '20%' : "0%"}>
                    <Text size='80px' style={size === 'xsmall' ? styles.title_mobile : styles.title}> ESTÁGIO </Text>
                    <Text size='34.5px' style={size === 'xsmall' ? styles.subtitle_mobile : styles.subtitle}> PROVA DE SELEÇÃO </Text>
                </Box>
            </Box >
        </>
    );
}

export default HeaderHome;
