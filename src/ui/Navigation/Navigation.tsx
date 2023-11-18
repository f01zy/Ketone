"use client"

import styles from "@/ui/Navigation/Navigation.module.scss"
import { useState } from "react"
import { MdMenu } from "react-icons/md"

const Navigation = () => {
  const [active, setActive] = useState(false)

  return <nav className={active ? styles.active : styles.navigation}>
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.logo}>
          <h1>Ketone</h1>
        </div>
      </div>
      <div className={styles.col}>
        <ul>
          <li>home</li>
          <li>projects</li>
          <li>about us</li>
          <li>contacts</li>
        </ul>
        <div className={styles.language}>
          <h4>Eng</h4>
        </div>
        <div className={styles.menu} onClick={() => setActive(!active)}>
          <MdMenu />
        </div>
      </div>
    </div>
    <ul className={styles.mobile}>
      <li>home</li>
      <li>projects</li>
      <li>about us</li>
      <li>contacts</li>
    </ul>
  </nav>
}

export default Navigation;