import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Expanded Intelligence Research Group / 拡張知能研究グループ',
  description:
    '大阪公立大学大学院 情報学研究科 拡張知能研究グループ (Expanded Intelligence Research Group, XIRG) は、人の知性を人工知能技術によって拡張・増強する「拡張知能」をビジョンに掲げ、教育や医療などのフィールドで人の知的活動を支援するシステムについて研究しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
