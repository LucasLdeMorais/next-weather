import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (<header>
        <h1>next-weather</h1>
        <hr/>
        <nav>
          <ul>
            <li><Link className={'link'} href={'/'}>home</Link></li>
            <li><Link className={'link'} href={'/sobre'}>sobre</Link></li>
            <li><Link className={'link'} href={'/codigo'}>código fonte</Link></li>
          </ul>
        </nav>
    </header>);
}
