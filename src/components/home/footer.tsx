import React from 'react';
import '../../App.css';
import '../../App.scss';
import footer from "../../assets/imagens/rodape-desktop.jpg";
import footer_mobile from "../../assets/imagens/rodape-mobile.jpg";
import { Text, Box, ResponsiveContext } from 'grommet';


function Footer() {
    const size = React.useContext(ResponsiveContext);
    const styles = {
        background: {
            backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '30vh', width: '100%'
        },
        background_mobile: {
            backgroundImage: `url(${footer_mobile})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '200px'
        }
    }
    return (
        <Box style={size === 'xsmall' ? styles.background_mobile : styles.background} align='center' gap={'5%'} pad={{ top: '4%' }} >

            <Text style={{ fontFamily: 'roboto light', color: 'white' }} size='small'>Fulano Beltrano de Oliveira Silva</Text>
            <Text style={{ fontFamily: 'roboto light', color: 'white' }} size='small'>fulanobos@gmail.com</Text>
            <Text style={{ fontFamily: 'roboto light', color: 'white' }} size='small'>(31) 9 99666-111</Text>
            <Text style={{ fontFamily: 'roboto light', color: 'white' }} size='small'>Faculdade de Belo Horizonte</Text>


        </Box>
    );
}

export default Footer;
