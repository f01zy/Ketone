import styles from "@/pages/Home/Home.module.scss"
import Image from "next/image";

const Home = () => {
  return <div className={styles.home}>
    <header>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image alt="header" src={"/home/header/header.png"} width={458} height={441} />
        </div>
        <div className={styles.col}>
          <div className={styles.block}>
            <div className={styles.col_block}>
              <h1>Ketone</h1>
            </div>
            <div className={styles.col_block}>
              <p>With qipper, You don't have to think about the quality of web content anymore. The qipper project was designed only for those in need of quality and style. We know how to sell and we do it well.</p>
              <button>Get a discount</button>
            </div>
            <div className={styles.col_block}>
              <p>We have been a close-knit team for a long time, we are more than 10 years old. Qipper is our common interest and common goal. Everyone who contacts us receives only positive feedback from their customers. We don't try to please everyone, but we try to open everyone's eyes. Keep track of who you are asking for help.</p>
            </div>
          </div>
          <div className={styles.block}>
            <h3>We are doing this</h3>
            <ul>
              <li>Web sites</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div className={styles.two_block}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.text}>
            <h1>Just do it</h1>
            <h5>...said once a good man</h5>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className={styles.col}>
          <Image src={"/home/two_block/two_block.png"} alt="two_block" width={636} height={415} />
        </div>
      </div>
    </div>
    <div className={styles.three_block}>
      <div className={styles.text}>
        <h1>WE CAN - WE DO</h1>
        <h5>..and these are our words</h5>
      </div>
      <div className={styles.images}>
        <Image src={"/home/three_block/three_block_white.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_black.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_white.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_black.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_black.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_white.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_black.png"} alt="image" width={292} height={264} />
        <Image src={"/home/three_block/three_block_white.png"} alt="image" width={292} height={264} />
      </div>
    </div>
    <div className={styles.contact}>
      <div className={styles.text}>
        <h1>FILL OUT THE APPLICATION FORM AND WE WILL CALL YOU</h1>
      </div>
      <form>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input type="text" placeholder="Your name*" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Your Telephone*" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Your E-mail*" />
          </div>
        </div>
        <div className={styles.button}>
          <button>Call me</button>
        </div>
      </form>
    </div>
  </div>
}

export default Home;