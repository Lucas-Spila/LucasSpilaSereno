import styles from './RegistroForm.module.css'


import Input from '../Form/input'
 


function RegistroForm() {
    return(
       <form className={styles.form}>

          <div className={styles.Inputnome}>
            <Input type="text" text="Qual o seu Nome?" placeholder="Lorem Ipslum" name="name" />
          </div>

          <div className={styles.Inputemail}>
          <Input type="text" text="Qual o seu E-mail?" placeholder="Ex: LoremIsplum@???.com " name="email" />
          </div>

          <div className={styles.InputDuplo}>
           <Input type="text" text="Qual o seu nome de usuário?" placeholder="Ex: Lorem_Ipslum123 " name="nameUser" />
           <Input type="number" text="Qual o seu CPF?" placeholder="xxx.xxx.xxx-xx" name="number" />
          </div>

          
          <div className={styles.FormInput}>
          <Input type="number" text="Qual a sua senha?" placeholder="Ex: 12345" name="number" />
          <Input type="text" text="Confirme a sua senha" placeholder="Digite sua Senha " name="number" />
          </div>


          <div className={styles.formP}>
            <p>Já tem uma conta? <a href="#">Faça Login</a></p>
          </div>


          <button className={styles.btn}>Registrar</button>
          
       </form>
    )
}

export default RegistroForm