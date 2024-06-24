import clsx from 'clsx'
import styles from './Blog.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { blogArticles } from '../../../../data'
import { BlogCard } from '../../../../entities/BlogCard/BlogCard'

export const Blog = () => {
  return (
    <section className={clsx(styles.blog, 'section')}>
      <div className="container space-top">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 02 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// information security</span>
            <h2>
              Our <br /> Blog
            </h2>
          </div>
          <div className={clsx('section-text-block', styles.blogTextBlock)}>
            <p>
              <div className="triangle"></div>
              leveraging best-in-class AI technology to protect and monitor
              blockchain protocols and smart ntracts.leveraging best-in-class AI
              technology to protect and monitor blockchain protocols and smart
              contracts.
            </p>
            <Button type="link" href="/blog">
              View blog
            </Button>
          </div>
        </div>
        <div className={styles.blogCards}>
          {blogArticles.slice(0, 3).map((blog, idx) => (
            <BlogCard
              link={blog.link}
              title={blog.title}
              thumbnail={blog.thumbnail}
              id={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
