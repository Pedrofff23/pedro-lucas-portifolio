import Head from 'next/head'
import styles from './Teste.module.css'

export default function Teste() {
  return (
     <div className={styles.container}> 
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
