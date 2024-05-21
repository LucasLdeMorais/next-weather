import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
  return (<header className={styles.header}>
        <h1 className={styles.header_title}>next-weather</h1>
        <hr/>
        <nav className={styles.header_nav}>
          <ul>
            <li><Link className={'link'} href={'/'}>home</Link></li>
            <li><Link className={'link'} href={'/sobre'}>sobre</Link></li>
            <li><Link className={'link'} href={'/codigo'}>código fonte</Link></li>
          </ul>
        </nav>
    </header>);
}
