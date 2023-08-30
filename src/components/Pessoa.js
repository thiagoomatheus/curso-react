import styles from "./Pessoa.module.css"

// function Pessoa(props) {
//     return (
//         <div>
//             <img src={props.foto} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// }

function Pessoa({nome, foto, idade, profissao}) {
    return (
        <div>
            <img className={styles.img} src={foto} alt={nome} />
            <h2 className={styles.container}>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa