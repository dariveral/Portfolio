import styles from './AirbnbCaseStudy.module.css'
import heroImg from '../assets/Header image.png'
import caseStudyHome from '../assets/case study home.png'
import homeMockup from '../assets/Home.png'
import searchMockup from '../assets/Where Map.png'
import mockupBg from '../assets/mockup background.jpg'
import gridImg1 from '../assets/Where.png'
import gridImg2 from '../assets/Map preview.png'
import gridImg3 from '../assets/home preview.png'
import gridImg4 from '../assets/When.png'

export default function AirbnbCaseStudy() {
  return (
    <main>

      {/* Hero */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>
            <svg width="22" height="27" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.7-317.9 269-317.9 70.7 0 129.5 46.4 173.5 46.4 42.3 0 109.2-49 192.2-49 31 0 113.3 2.6 181.5 84.9zm-192.5-261.7c33.5-39.5 56.9-94.4 56.9-149.3 0-7.7-.6-15.5-1.9-21.7-53.5 2-116.8 35.5-154.3 80.5-29.6 34.5-56.9 89.4-56.9 145.1 0 8.3 1.3 16.5 1.9 19.1 3.2.6 8.4 1.3 13.6 1.3 47.9 0 108.2-32.1 140.7-75z"/>
            </svg>
            Apple
          </span>
          <h1 className={styles.heroTitle}>Reimagining the Airbnb app in landscape mode on iOS</h1>
          <a href="#" className={styles.heroBtn}>Download full case study</a>
        </div>
      </section>

      {/* Description */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContent}>
          <p className={styles.descriptionBody}>
            Open up Airbnb on your iPhone and it's portrait mode all the way - landscape is just sitting on the sidelines, unused. So, when Apple handed me a design challenge to reimagine Airbnb in landscape mode for iOS, I saw a chance to redefine the current experience and give sideways browsing its moment in the sun.
          </p>
          <p className={styles.descriptionBody}>
            My aim was to craft an experience that feels immersive and intuitive, with visuals that invite you to explore rather than just scroll. I wanted users to feel like they're discovering new destinations, not simply navigating another app.
          </p>
          <p className={styles.descriptionBody}>
            Throughout the process, adaptability and scalability were key. The design needed to look stunning and work seamlessly across any compatible iOS device, balancing eye-catching visuals with navigation that's always straightforward.
          </p>
        </div>
      </section>

      {/* Mockup Showcase */}
      <section className={styles.mockupHangSection}>
        <div className={styles.mockupHangBg} style={{ backgroundImage: `url(${caseStudyHome})` }}>
          <h2 className={styles.mockupHangHeading}>A new view opens up new journeys.</h2>
        </div>
        <div className={styles.mockupHangImgWrap}>
          <img src={homeMockup} alt="Airbnb home screen in landscape" className={styles.mockupHangImg} />
        </div>
      </section>

      {/* More description */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <p className={styles.body}>
              Reimagining Airbnb's landscape experience for iOS challenged me to rethink how users interact with travel apps beyond the familiar portrait mode. By analysing the current design and prototyping new layouts, I focused on maximising horizontal space, streamlining navigation, and enhancing visual immersion.
            </p>
            <p className={styles.body}>
              My final solution balances intuitive interactions with adaptability, making it easier for users to browse, plan, and book, regardless of orientation or accessibility needs. This project reinforced my belief that thoughtful design can transform even small shifts in interface into meaningful improvements for diverse audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot grid 2x2 */}
      <section>
        <div className={styles.screenshotGrid}>
          <div className={styles.screenshotCell}>
            <img src={gridImg1} alt="Where screen" />
          </div>
          <div className={styles.screenshotCell}>
            <img src={gridImg2} alt="Map preview" />
          </div>
          <div className={styles.screenshotCell}>
            <img src={gridImg3} alt="Home preview" />
          </div>
          <div className={styles.screenshotCell}>
            <img src={gridImg4} alt="When screen" />
          </div>
        </div>
      </section>

      {/* Text */}
      <section className={styles.section} style={{ minHeight: '460px', padding: '100px 40px' }}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
<p className={styles.body}>
              The design blends elements from Airbnb's design language with Apple's system conventions, making the experience feel authentically Airbnb while remaining native to iOS. Apple's Human Interface Guidelines informed key decisions throughout.
            </p>
            <p className={styles.body}>
              Notable features include Apple's new liquid glass material for the search field, and a full-height map that subtly fades into listings on the search page to support spatial discovery.
            </p>
            <p className={styles.body}>
              I was deliberate about when to use liquid glass versus solid colour surfaces, prioritising clarity and contrast, to align with Airbnb's principle of simplicity and maintain visual consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Frame with mockup on background */}
      <section className={styles.mockupBanner} style={{ backgroundImage: `url(${mockupBg})` }}>
        <img src={searchMockup} alt="Airbnb search in landscape" className={styles.bannerMockup} />
      </section>

      {/* Text / description */}
      <section className={styles.section} style={{ minHeight: '460px', padding: '100px 40px' }}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <p className={styles.body}>
              Extending the map to full-screen delivers a more immersive, desktop-like feel, thanks to the wider field of view. This approach eases the shift from desktop to mobile and boosts accessibility by maximising horizontal space - making content clearer for users who rely on docks or external keyboards.
            </p>
            <p className={styles.body}>
              Using a liquid glass material for the search box allows the map to subtly shine through, deepening the sense of immersion without compromising clarity or readability.
            </p>
          </div>
        </div>
      </section>

      {/* Feature cards 2x2 — Solution */}
      <section className={styles.sectionGrey}>
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>Design Decisions</span>
          <div className={styles.cardGrid}>
            <div className={styles.featureCard}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Side-by-side layout</h3>
              <p className={styles.cardBody}>Map and listings sit side by side, letting users browse and orient themselves simultaneously.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Left-rail navigation</h3>
              <p className={styles.cardBody}>Tabs move to a vertical left rail — closer to the thumb zone and freeing up vertical screen space.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Condensed search</h3>
              <p className={styles.cardBody}>The search experience is redesigned to show recent searches and suggestions in a two-column layout.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.cardNumber}>04</span>
              <h3 className={styles.cardTitle}>Adaptive typography</h3>
              <p className={styles.cardBody}>Font sizes and line lengths are tuned for the wider canvas, maintaining readability at a glance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Text / description */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <span className={styles.sectionLabel}>Search Screen</span>
            <h2 className={styles.sectionHeading}>Rethinking search for a wider view</h2>
            <p className={styles.body}>
              The search screen takes advantage of the extra width to show recent searches alongside
              suggested destinations, reducing the number of taps needed to find and book a stay.
            </p>
          </div>
        </div>
      </section>

      {/* Frame with mockup on background */}
      <section className={styles.mockupBanner} style={{ backgroundImage: `url(${heroImg})` }}>
        <img src={searchMockup} alt="Airbnb search in landscape" className={styles.bannerMockup} />
      </section>

      {/* Closing description + download */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.closing}>
            <h2 className={styles.sectionHeading}>Want to see the full case study?</h2>
            <p className={styles.body}>
              The full case study includes the complete design process — research, wireframes, component
              decisions, and final screens. Download the PDF to explore the work in detail.
            </p>
            <a href="#" className={styles.downloadBtn}>Download case study</a>
          </div>
        </div>
      </section>

    </main>
  )
}
