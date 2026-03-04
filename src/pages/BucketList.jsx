import styles from './ListPage.module.css'

const ITEMS = [
  { title: 'See the northern lights',       done: false, category: 'Travel' },
  { title: 'Hike the Camino de Santiago',   done: false, category: 'Travel' },
  { title: 'Learn to make pasta by hand',   done: true,  category: 'Food' },
  { title: 'Read 50 books in a year',       done: false, category: 'Learning' },
  { title: 'Get a dog',                     done: false, category: 'Life' },
  { title: 'Visit Japan during cherry blossom season', done: false, category: 'Travel' },
  { title: 'Build something people use daily', done: false, category: 'Work' },
  { title: 'Learn to surf',                done: false, category: 'Adventure' },
  { title: 'Go on a silent retreat',        done: false, category: 'Mindfulness' },
  { title: 'Write something worth reading', done: false, category: 'Creative' },
]

export default function BucketList() {
  const done  = ITEMS.filter(i => i.done).length
  const total = ITEMS.length

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>About → Bucket list</p>
          <h1 className={styles.title}>Things I want to do</h1>
          <p className={styles.sub}>{done} of {total} done.</p>
        </header>
        <ul className={styles.list}>
          {ITEMS.map((item, i) => (
            <li key={i} className={`${styles.item} ${item.done ? styles.done : ''}`}>
              <span className={styles.check}>{item.done ? '✓' : '○'}</span>
              <span className={styles.bucketTitle}>{item.title}</span>
              <span className={styles.category}>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
