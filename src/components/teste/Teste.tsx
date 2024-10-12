import Head from 'next/head'
import styles from './Teste.module.css'

export default function Teste() {
  return (
     <div className={styles.container}>
       {/* <Head>
         <title>Homepage</title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/favicon.ico" />
       </Head> */}
 
       {/* <header className={styles.header}>
         <div className={styles.navbar}>
           <div className={styles.logo}>ANDY!</div>
           <nav>
             <ul className={styles.navList}>
               <li><a href="#">Homepage</a></li>
               <li><a href="#">Portfolio</a></li>
               <li><a href="#">Motion</a></li>
             </ul>
           </nav>
           <div className={styles.getInTouch}>Get in touch</div>
         </div>
       </header> */}
 
       <main className={styles.main}>
         <section className={styles.hero}>
           <div className={styles.overlay}>
             <div className={styles.heroContent}>
               <h1>Homepage</h1>
               <nav className={styles.subNav}>
                 <a href="#">Mail List</a>
                 <a href="#">Education</a>
                 <a href="#">My Presets</a>
                 <a href="#">Prints</a>
               </nav>
             </div>
           </div>
         </section>
       </main>
 
      
     </div>
   )
}
