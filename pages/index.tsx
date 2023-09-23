import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import styles from "@/components/Index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h2 className={styles.orange}>Hello</h2>
      <Header />
      <div className={"bg-red-600"}></div>
    </div>
  );
}
