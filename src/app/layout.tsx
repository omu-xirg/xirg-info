import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Nexable Computing Lab / 融能計算研究グループ',
  description:
    '大阪公立大学大学院 情報学研究科 融能計算研究グループ (Nexable Computing Lab, NCL) は、人や道具が持つ能力の相互作用をコンピュータ制御することで社会全体のできることを増やす「融能計算」の研究を行っています。2024年10月に開設された新しい研究室です。',
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
