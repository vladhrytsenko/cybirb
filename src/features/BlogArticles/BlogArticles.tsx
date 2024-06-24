import { useEffect, useState } from 'react'
import { blogArticles, blogCategories } from '../../data'
import { BlogCard } from '../../entities/BlogCard/BlogCard'
import { Button } from '../../shared/Button/Button'
import styles from './BlogArticles.module.scss'
import { TabClip } from './components/TabClip'
import clsx from 'clsx'
import { IArticle } from '../../interfaces/IArticle'

export const BlogArticles = () => {
  const [articlesData, setArticlesData] = useState<IArticle[]>([])
  const [blogCategoriesData, setBlogCategoriesData] = useState<string[]>([])

  const [filteredArticlesData, setFilteredArticlesData] = useState<IArticle[]>()
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const [articlesPerPage, setArticlesPerPage] = useState<number>(9)

  function selectFilter(slug: string) {
    setActiveFilter(slug)
  }

  useEffect(() => {
    if (blogArticles) {
      setArticlesData(blogArticles)
    }
  }, [blogArticles])

  useEffect(() => {
    if (blogCategories) {
      setBlogCategoriesData(blogCategories)
    }
  }, [blogCategories])

  useEffect(() => {
    if (articlesData) {
      const data = articlesData
      const filteredData =
        activeFilter === 'all'
          ? articlesData
          : data.filter((article) => article.category === activeFilter)

      setFilteredArticlesData(filteredData)

      activeFilter !== 'all'
        ? setArticlesPerPage(filteredData.length)
        : setArticlesPerPage(9)
    }
  }, [activeFilter, articlesData])

  return (
    <div className={styles.blogArticles}>
      <div className={styles.blogArticlesHead}>
        <div className={styles.blogArticlesFilter}>
          <div
            onClick={() => selectFilter('all')}
            className={clsx(
              styles.blogArticlesActionTab,
              activeFilter === 'all' && styles.active
            )}
          >
            <div className={clsx(styles.blogArticlesActionTabBg)}>
              <TabClip type={1} />
            </div>
            all
          </div>
          {blogCategoriesData &&
            blogCategoriesData.map((category, idx) => (
              <div
                onClick={() => selectFilter(category)}
                className={clsx(
                  styles.blogArticlesActionTab,
                  activeFilter === category && styles.active
                )}
              >
                <div className={clsx(styles.blogArticlesActionTabBg)}>
                  <TabClip type={idx % 2 !== 0 ? 1 : 2} />
                </div>
                {category}
              </div>
            ))}
        </div>

        <div className={styles.blogArticlesSort}>
          <div className={styles.blogArticlesActionTab}>
            <div className={clsx(styles.blogArticlesActionTabBg)}>
              <TabClip type={1} />
            </div>
            Sort by
          </div>
        </div>
      </div>

      <div className={styles.blogArticlesWrapper}>
        {filteredArticlesData &&
          filteredArticlesData
            .slice(0, articlesPerPage)
            .map((article, idx) => (
              <BlogCard
                link={article.link}
                fullBorder={true}
                id={idx + 1}
                title={article.title}
                thumbnail={article.thumbnail}
              />
            ))}
      </div>

      {filteredArticlesData &&
        articlesPerPage !== filteredArticlesData?.length && (
          <div className={styles.blogArticlesMore}>
            <Button
              handleClick={() =>
                filteredArticlesData &&
                setArticlesPerPage(filteredArticlesData.length)
              }
              size="big"
            >
              View all
            </Button>
          </div>
        )}
    </div>
  )
}
