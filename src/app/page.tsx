import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";
import Weather from "./Weather";

export default function Home() {
  return (<>
    <Header />
    <main>
      <Weather />
    </main>
  </>);
}
