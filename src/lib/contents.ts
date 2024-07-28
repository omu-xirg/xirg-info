import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { ContentObject } from './type'

const contentsDirectory = path.join(process.cwd(), 'contents')

const md = new MarkdownIt({
  html: true,
})

const getSortedContents = async (): Promise<ContentObject[]> => {
  const fileNames = fs
    .readdirSync(path.join(contentsDirectory))
    .filter((f) => /^(\d+)-(.*)\.md$/.test(f))

  const contents = fileNames
    .map((fileName) => {
      const fullPath = path.join(contentsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        fileName: fileName,
        title: matterResult.data.title,
        html: md.render(matterResult.content).toString(),
      }
    })
    .sort((a, b) => {
      if (a.fileName > b.fileName) {
        return 1
      } else {
        return -1
      }
    })

  return contents
}

export { getSortedContents }
