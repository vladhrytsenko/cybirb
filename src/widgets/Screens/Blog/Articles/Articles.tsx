import clsx from 'clsx'
import styles from './Articles.module.scss'
import { BlogArticles } from '../../../../features/BlogArticles/BlogArticles'

export const Articles = () => {
  return (
    <section className={clsx(styles.articles, 'section')}>
      <div className="container space-top space-bottom">
        <BlogArticles />
      </div>
    </section>
  )
}
