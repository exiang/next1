import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import { Capitalize } from '../_helpers'

export default function CarsList(props){
    const [cars, setCars] = useState("");
    useEffect(() => {
        const url = "http://localhost:3000/cars.json";
        const fetchCars = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setCars(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchCars();
    }, []);
    

    return (
    <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Cars list
        </h1>
        {cars && cars.length?(
            <ul>{cars.map(function(car, i){
                return  <li><Link href={"/cars/"+car}><a>{Capitalize(car)}</a></Link></li> ;
            })}</ul>
        ):'cars loading...'}
        </main>
    </div>
    )
}
