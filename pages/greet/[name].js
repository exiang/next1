
import styles from '../../styles/Home.module.css'

export async function getServerSideProps({ params }) {
    const { name } = params;
    return {
        props: {
            name
        }
    }
}

function Greet(props) {
    return (
        <main className={styles.main}>
            <h1 style={{backgroundColor: "yellow"}}> Hello, {props.name}! </h1>
        </main>
    )
}
   
export default Greet;