import { Header } from '@/components/header'
import { getSortedContents } from '@/lib/contents'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default async function Page() {
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''
  const contents = await getSortedContents()

  return (
    <>
      <Header contents={contents} />
      <div className="site-cover">
        <div className="cover-title">
          <div className="wrapper">
            <h1>
              Toward a Seamless Fusion of Human and Artificial Intelligence
            </h1>
          </div>
        </div>
      </div>
      {contents.map(({ title, html }, index) => (
        <div
          key={`section-${index}`}
          className={`section-${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <div className="wrapper">
            <div className="content">
              {title && <h2 id={title}>{title}</h2>}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      ))}
      <div className="site-footer">
        <p>
          © 2024 <a href={`${basePath}/`}>XIRG</a>
        </p>
      </div>
    </>
  )
}
