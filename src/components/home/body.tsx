import React from 'react';
import '../../App.css';
import '../../App.scss';
import { Text, Box, ResponsiveContext, FormField, TextInput, Button, Tabs, Tab, Spinner } from 'grommet';
import { ReactComponent as TopoPag } from '../../assets/icones/topo-pag.svg';
import Swal from 'sweetalert2'
import api
    from '../../services/api';
function Body() {
    const size = React.useContext(ResponsiveContext);
    const styles = {
        labelForm: {
            color: 'white', fontFamily: 'Roboto Regular'
        },
        inputForm: {
            width: '500px', fontFamily: 'Helvetica Condensed Regular'
        },
        buttonForm: {
            border: 'none', borderWidth: '1px', backgroundColor: '#012d51', width: '220px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'
        },
        buttonFormText: {
            fontWeight: '100', fontSize: '2rem'
        },
        hr: { width: '100%', borderColor: '#29abe2', marginTop: '-5px', }
    }

    const [nome, setNome] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [nascimento, setNascimento] = React.useState<string>("");
    const [telefone, setTelefone] = React.useState<string>("");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleCadastro = () => {
        let dados = {
            nome: nome,
            email: email,
            nascimento: nascimento,
            telefone: telefone
        }
        api.post('/cadastrar', dados).then(({ data }) => {
            console.table(data);
            setLoading(true);
            load();
            Swal.fire(
                'Sucesso',
                'O usuário foi cadastrado',
                'success'
            )
        }).catch(error => {
            Swal.fire(
                'Erro',
                'Erro ao cadastrar usuário, tente novamente',
                'error'
            )
        })
    }

    const [cadastrados, setCadastros] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const load = () => {
        api.get('listar-todos').then(({ data }) => {
            setCadastros(data);
            setLoading(false);
        })
    }
    React.useEffect(() => {
        load();
    }, [])
    return (
        <>
            <Box background={'Fundo de cadastro'} align='center' gap={'medium'} pad={{ top: 'large', bottom: 'large' }} className="FormCadastro">
                <Text size='32px' style={{ fontWeight: '100', color: 'white' }}> CADASTRO</Text>
                <Box>
                    <FormField label="Nome" style={styles.labelForm}>
                        <TextInput style={{ width: '500px' }} onChange={event => setNome(event.target.value)} value={nome} />
                    </FormField>

                    <FormField label="Email" style={styles.labelForm}>
                        <TextInput style={styles.inputForm} onChange={event => setEmail(event.target.value)} value={email} />
                    </FormField>

                    <FormField label="Nascimento" style={styles.labelForm}>
                        <TextInput style={styles.inputForm} onChange={event => setNascimento(event.target.value)} value={nascimento} />
                    </FormField >

                    <FormField label="Telefone" style={styles.labelForm}>
                        <TextInput style={styles.inputForm} onChange={event => setTelefone(event.target.value)} value={telefone} />
                    </FormField>
                </Box>

                <Button style={styles.buttonForm} onClick={handleCadastro}>
                    <Text color={'TitulodobotaoCadastrar'} style={styles.buttonFormText}>CADASTRAR</Text>
                </Button>
            </Box>

            <Box background={'white'} align='center' gap={'large'} pad={{ top: 'large', bottom: 'large' }} className="FormCadastro">
                <Text size='32px' style={{ fontWeight: '100' }} color="TítuloLista de Cadastro">LISTA DE CADASTRO</Text>
                <Box direction='row' width={'100%'} justify='center'>
                    {size === 'xsmall' ? (
                        <>
                            {loading ? <Spinner /> :

                                <Tabs>
                                    <Tab title={
                                        <Box width={'50px'} align='center'>
                                            <Text>1 </Text>
                                        </Box>} >
                                        <Box border={{ color: 'Linhas da tabela', size: 'small' }} pad={'medium'} width={'350px'} style={{ marginTop: '-1%' }}>
                                            <Box>
                                                <h3 className='titleTb'> NOME <span className='infoTb'> {cadastrados[0] === undefined ? "" : cadastrados[0].nome}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> EMAI <span className='infoTb'> {cadastrados[0] === undefined ? "" : cadastrados[0].email}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> NASCIMENTO <span className='infoTb'> {cadastrados[0] === undefined ? "" : cadastrados[0].nascimento}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> TELEFONE <span className='infoTb'> {cadastrados[0] === undefined ? "" : cadastrados[0].telefone}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                        </Box>
                                    </Tab>
                                    <Tab title={
                                        <Box width={'50px'} align='center'>
                                            <Text>2 </Text>
                                        </Box>} >
                                        <Box border={{ color: 'Linhas da tabela', size: 'small' }} pad={'medium'} width={'350px'} style={{ marginTop: '-1%' }}>
                                            <Box>
                                                <h3 className='titleTb'> NOME <span className='infoTb'> {cadastrados[1] === undefined ? "" : cadastrados[1].nome}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> EMAIL <span className='infoTb'> {cadastrados[1] === undefined ? "" : cadastrados[1].email}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> NASCIMENTO <span className='infoTb'> {cadastrados[1] === undefined ? "" : cadastrados[1].nascimento}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> TELEFONE <span className='infoTb'> {cadastrados[1] === undefined ? "" : cadastrados[1].telefone}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                        </Box>
                                    </Tab>
                                    <Tab title={
                                        <Box width={'50px'} align='center'>
                                            <Text>3 </Text>
                                        </Box>} >
                                        <Box border={{ color: 'Linhas da tabela', size: 'small' }} pad={'medium'} width={'350px'} style={{ marginTop: '-1%' }}>
                                            <Box>
                                                <h3 className='titleTb'> NOME <span className='infoTb'> {cadastrados[2] === undefined ? "" : cadastrados[2].nome}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> EMAIL <span className='infoTb'> {cadastrados[2] === undefined ? "" : cadastrados[2].email}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> NASCIMENTO <span className='infoTb'> {cadastrados[2] === undefined ? "" : cadastrados[2].nascimento}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> TELEFONE <span className='infoTb'> {cadastrados[2] === undefined ? "" : cadastrados[2].telefone}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                        </Box>
                                    </Tab>
                                    <Tab title={
                                        <Box width={'50px'} align='center'>
                                            <Text>4 </Text>
                                        </Box>} >
                                        <Box border={{ color: 'Linhas da tabela', size: 'small' }} pad={'medium'} width={'350px'} style={{ marginTop: '-1%' }}>
                                            <Box>
                                                <h3 className='titleTb'> NOME <span className='infoTb'> {cadastrados[3] === undefined ? "" : cadastrados[3].nome}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> EMAIL <span className='infoTb'> {cadastrados[3] === undefined ? "" : cadastrados[3].email}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> NASCIMENTO <span className='infoTb'> {cadastrados[3] === undefined ? "" : cadastrados[3].nascimento}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                            <Box>
                                                <h3 className='titleTb'> TELEFONE <span className='infoTb'> {cadastrados[3] === undefined ? "" : cadastrados[3].telefone}</span></h3>
                                                <hr style={styles.hr} />
                                            </Box>
                                        </Box>
                                    </Tab>

                                </Tabs>
                            }
                        </>) : (
                        <>
                            {loading ? <Spinner /> :
                                <table>
                                    <tr>
                                        <th> <Text margin={'medium'} /></th>
                                        <th className='title'>NOME</th>
                                        <th className='title'>E-MAIL</th>
                                        <th className='title'>NASCIMENTO</th>
                                        <th className='title'>TELEFONE</th>
                                    </tr>
                                    <tr>
                                        <td className='id'>{cadastrados[0] === undefined ? "" : cadastrados[0].id}</td>
                                        <td style={{ whiteSpace: 'nowrap' }} >{cadastrados[0] === undefined ? "" : cadastrados[0].nome}</td>
                                        <td>{cadastrados[0] === undefined ? "" : cadastrados[0].email}</td>
                                        <td>{cadastrados[0] === undefined ? "" : cadastrados[0].nascimento}</td>
                                        <td>{cadastrados[0] === undefined ? "" : cadastrados[0].telefone}</td>
                                    </tr>
                                    <tr>
                                        <td className='id'>{cadastrados[1] === undefined ? "" : cadastrados[1].id}</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>{cadastrados[1] === undefined ? "" : cadastrados[1].nome}</td>
                                        <td>{cadastrados[1] === undefined ? "" : cadastrados[1].email}</td>
                                        <td>{cadastrados[1] === undefined ? "" : cadastrados[1].nascimento}</td>
                                        <td>{cadastrados[1] === undefined ? "" : cadastrados[1].telefone}</td>
                                    </tr>
                                    <tr>
                                        <td className='id'>{cadastrados[2] === undefined ? "3" : cadastrados[2].id}</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>{cadastrados[2] === undefined ? "" : cadastrados[2].nome}</td>
                                        <td>{cadastrados[2] === undefined ? "" : cadastrados[2].email}</td>
                                        <td>{cadastrados[2] === undefined ? "" : cadastrados[2].nascimento}</td>
                                        <td>{cadastrados[2] === undefined ? "" : cadastrados[2].telefone}</td>
                                    </tr>
                                    <tr>
                                        <td className='id'>{cadastrados[3] === undefined ? "4" : cadastrados[3].id}</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>{cadastrados[3] === undefined ? "" : cadastrados[3].nome}</td>
                                        <td>{cadastrados[3] === undefined ? "" : cadastrados[3].email}</td>
                                        <td>{cadastrados[3] === undefined ? "" : cadastrados[3].nascimento}</td>
                                        <td>{cadastrados[3] === undefined ? "" : cadastrados[3].telefone}</td>
                                    </tr>

                                </table>}

                            <TopoPag
                                style={{
                                    position: 'relative',
                                    height: '50px',
                                    width: '50x',
                                    marginTop: '10%',
                                    marginLeft: '2%',
                                    cursor: 'pointer'
                                }}
                                onClick={scrollToTop} />
                        </>
                    )}

                </Box>
            </Box>


        </>
    );
}

export default Body;
