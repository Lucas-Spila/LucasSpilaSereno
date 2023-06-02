import styles from '../layout/Registro.module.css'
import logo from '../../assets/HS-ICON.png'
import registroimg from '../../assets/Cadastro.png'
import RegistroForm from '../RegistroFormulario/RegistroForm'




function Registro() {

    return(
     <>
        <div className={styles.Registro_container} >
            <h1><img src={logo} alt="HS-ICON"/>HubServis</h1>
            <h2>Registrar-se</h2>
            <p>Para começar, é importante que nos informe seus dados pessoais</p>
            <RegistroForm />

            
            
        </div>

        <div className={styles.Background_container}>
         <img src={registroimg} alt="perfil"/>
        </div>
     </>
    )


}

export default Registro