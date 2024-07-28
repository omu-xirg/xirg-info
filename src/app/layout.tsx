import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Nexable Computing Lab / 融能計算研究グループ',
  description:
    '大阪公立大学大学院 情報学研究科 融能計算研究グループ (Nexable Computing Lab, 融能研) は、人や道具が持つ能力の相互作用をコンピュータ制御することで社会全体のできることを増やす「融能計算」の研究を行っています。2024年秋の開設に向けて現在準備中です。',
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
