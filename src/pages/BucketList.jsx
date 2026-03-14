import styles from './BucketList.module.css'
import bucketlistImg from '../assets/Bucket list/bucketlist.png'

const CATEGORIES = [
  {
    name: 'Land',
    items: [
      { title: 'Go on a road trip around the US' },
      { title: 'Complete the three peaks challenge' },
      { title: 'Do a food tour of Asia' },
      { title: 'Go to a Safari Experience' },
      { title: 'Hike to Macchu Picchu' },
      { title: 'Take part in a Japanese tea ceremony' },
      { title: 'See the Chocolate Hills in Bohol',            done: true, completedDate: '24.03.25' },
      { title: 'Take part in a mini-triathlon' },
      { title: 'Hike in the Amazon rain forest' },
      { title: 'Ride a camel in the desert' },
      { title: 'Run a 2hr 15min half marathon' },
      { title: 'Learn to ride a horse',                       done: true, completedDate: '2011' },
      { title: 'Ride a horse by the beach in a tropical country' },
      { title: 'Hike & camp in Yosemite National Park' },
      { title: 'See the tarsiers in Bohol, Philippines',      done: true, completedDate: '24.03.25' },
      { title: 'Island hopping in Bohol',                     done: true, completedDate: '22.03.25' },
      { title: 'Stay at a wolf cabin' },
      { title: 'Eat Balut',                                   done: true, completedDate: '22.03.25' },
      { title: 'Canyoneering at Kawasan falls',               done: true, completedDate: '16.03.25' },
      { title: 'Make my own wine in Italy' },
      { title: 'Hike in Patagonia' },
      { title: 'Go caving',                                   done: true, completedDate: 'in 2012' },
    ],
  },
  {
    name: 'Sea',
    items: [
      { title: 'Swim with whalesharks',                        done: true, completedDate: '05.09.13' },
      { title: 'Swim with sharks' },
      { title: 'Learn to free dive' },
      { title: 'Scuba diving in the great barrier reef' },
      { title: 'Learn to surf' },
      { title: 'Go cliff diving' },
      { title: 'Stay at a 5-star floating hotel in the Maldives' },
      { title: 'See a blue whale in the wild' },
      { title: 'Learn to sail & sail around Asia' },
      { title: 'See a manta ray in the wild' },
    ],
  },
  {
    name: 'Sky',
    items: [
      { title: 'Go sky diving' },
      { title: 'Zip-lining in Bohol',                          done: true, completedDate: '24.03.25' },
      { title: 'Learn to fly a plane' },
      { title: 'Helicopter tour of Rio / New York / London' },
      { title: 'Bungee jumping' },
      { title: 'Go abseiling',                                 done: true, completedDate: 'in 2012' },
    ],
  },
  {
    name: 'Life goals',
    items: [
      { title: 'Become fluent in my mother tongue again (Bisaya)' },
      { title: 'Be on the founding team of a tech company' },
      { title: 'Learn to make my own clothes (properly)' },
      { title: 'Work on a video game' },
      { title: 'Learn to code' },
      { title: 'Learn a new language' },
      { title: 'Open an animal rescue centre in my home town' },
      { title: 'Make an impact on someone\'s life in some way', done: true, completedLabel: 'donated stem cells on 06.08.24' },
      { title: 'Buy land in my home town in the Philippines & build a home' },
      { title: 'Live in the Philippines as an adult' },
      { title: 'Win an award for my work' },
      { title: 'Adopt a dog' },
      { title: 'Live abroad (not Philippines)', done: true, completedLabel: 'Lisbon 20.02.2026' },
      { title: 'Start a clothing brand' },
      { title: 'Sell an original piece of art of mine' },
    ],
  },
]

export default function BucketList() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>Darlene's bucket list</h1>
        <img src={bucketlistImg} alt="" className={styles.bucketImg} />
      </section>

      {/* Categories */}
      {CATEGORIES.map(cat => (
        <section key={cat.name} className={styles.categorySection}>
          <div className={styles.categoryLeft}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="17" cy="17" r="16" stroke="#0037ff" strokeWidth="2.5" />
              <path d="M12 12L22 22M22 22H14M22 22V14" stroke="#0037ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className={styles.categoryTitle}>{cat.name}</h2>
          </div>
          <ol className={styles.itemList}>
            {cat.items.map((item, i) => (
              <li key={i} className={`${styles.item} ${item.done ? styles.itemDone : ''}`}>
                <span className={styles.itemNumber}>{i + 1}.</span>
                <span className={styles.itemTitleWrapper}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  {item.done && (
                    <span className={styles.itemDate}>
                      {item.completedLabel ?? `completed ${item.completedDate}`}
                    </span>
                  )}
                </span>
                <span className={styles.itemStatus}>
                  {item.done ? '✅' : <span className={styles.itemCheckBox} />}
                </span>
              </li>
            ))}
          </ol>
        </section>
      ))}

    </div>
  )
}
