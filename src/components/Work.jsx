import { useEffect, useState } from 'react'
import styles from './Work.module.css'

// Replace with your actual GitHub username
const GITHUB_USERNAME = 'dariveral'

// Featured projects shown first (add your own)
const FEATURED = [
  {
    id: 'tapestry',
    title: 'Tapestry',
    description: 'A personal beliefs and memory visualization app — your life as woven threads.',
    tags: ['Design', 'HTML', 'JavaScript'],
    link: null,
  },
]

export default function Work() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data.filter(r => !r.fork && r.description)
          setRepos(filtered.slice(0, 4))
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.label}>Selected work</span>
        </div>

        <div className={styles.grid}>
          {FEATURED.map(p => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
          {!loading && repos.map(r => (
            <ProjectCard
              key={r.id}
              project={{
                title: r.name.replace(/-/g, ' '),
                description: r.description,
                tags: r.topics?.slice(0, 3) ?? [],
                link: r.html_url,
                stars: r.stargazers_count,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardTop}>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.tags}>
          {project.tags.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            View →
          </a>
        )}
      </div>
    </div>
  )
}
