import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Capitalize } from '../_helpers'


export default function Car({car}){
    const router = useRouter();
    const { slug } = router.query;

    return (
    <div className={styles.container}>
        <Head>
            <title>{car.color} {car.slug}</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                {Capitalize(slug)}
            </h1>

            <img src={car.image} width="300px" />

        </main>
    </div>)
}

/*
//
// this is server side rendering
export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.slug}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}
*/

//
// or, these code below render static rendering
export async function getStaticProps({ params }){
    const req = await fetch(`http://localhost:3000/${params.slug}.json`);
    const data = await req.json();

    return {
         props: { car: data },  
    }
}


export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/cars.json');
    const data = await req.json();

    const paths = data.map(car => {
        return { params: { slug: car } }
    })

    return {
        paths,
        fallback: false
    }
}