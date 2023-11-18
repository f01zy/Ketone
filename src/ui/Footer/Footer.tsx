import styles from "@/ui/Footer/Footer.module.scss"

const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.copy}>
      <p>Copyright &copy;  2010-2020 Qipper Company S.L. All rights reserved.</p>
    </div>
    <div>
      <h1>Ketone</h1>
      <p>WARNING: The site was made by professionals. Do not repeat yourself in any case. If you need a better site, contact Qipper</p>
    </div>
    <ul>
      <li>home</li>
      <li>portfolio</li>
      <li>about us</li>
      <li>contacts</li>
    </ul>
  </footer>
}

export default Footer;