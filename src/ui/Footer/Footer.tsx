import styles from "@/ui/Footer/Footer.module.scss"
import Link from "next/link";

const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.copy}>
      <p>Copyright &copy;  2023 Ketone Company S.L. All rights reserved.</p>
    </div>
    <div>
      <h1>Ketone</h1>
      <p>WARNING: The site was made by professionals. Do not repeat yourself in any case. If you need a better site, contact Ketone</p>
    </div>
    <ul>
      <Link href={"/#home"}><li>home</li></Link>
      <Link href={"/#projects"}><li>projects</li></Link>
      <Link href={"/#about_us"}><li>about us</li></Link>
      <Link href={"/#contact"}><li>contacts</li></Link>
    </ul>
  </footer>
}

export default Footer;