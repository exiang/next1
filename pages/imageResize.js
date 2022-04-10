import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function imageResize(){
    return (
        <main className={styles.main}>
            <h1>Image Resize</h1>
            <h3>Original</h3>
            <img src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter' />

            <h3>Optimized</h3>
                <Image src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                width={640}
                height={360} />

            <h3>Thumbnail</h3>
            <p>fixed, intrinsic, responsive, and fill</p>
            
            <div className={styles.grid}>

                <div className={styles.card}>
                    <div style={{ width: 100, height: 100, position:'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='fill' />
                    </div>
                    <p style={{textAlign:"center"}}>fill</p>
                </div>

                <div className={styles.card}>
                    <div style={{ width: 100, height: 100, position:'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='contain' />
                    </div>
                    <p style={{textAlign:"center"}}>contain</p>
                </div>

                <div className={styles.card}>
                    <div style={{ width: 100, height: 100, position:'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='cover' />
                    </div>
                    <p style={{textAlign:"center"}}>cover</p>
                </div>


                <div className={styles.card}>
                    <div style={{ width: 100, height: 100, position:'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='none' />
                    </div>
                    <p style={{textAlign:"center"}}>none</p>
                </div>

                <div className={styles.card}>
                    <div style={{ width: 100, height: 100, position:'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6' alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='scale-down' />
                    </div>
                    <p style={{textAlign:"center"}}>scale-down</p>
                </div>
                
            </div>
        </main>
        
    )
}