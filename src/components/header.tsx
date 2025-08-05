'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ContentObject } from '@/lib/type'

interface HeaderProps {
  contents: ContentObject[]
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY
      setIsScrolled(
        scrollPosition > Math.min(window.innerHeight, window.innerWidth) - 61,
      )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrapper">
        <div className="logo-container">
          <a
            className={`logo ${isScrolled ? 'scrolled' : ''}`}
            onClick={() => {
              router.push('/')
            }}
          >
            Extended Intelligence Research Group (XIRG)
          </a>
        </div>
        <div className="nav-container">
          {props.contents.map(({ title }, index) => (
            <a
              key={`nav-${index}`}
              className={`nav-link ${isScrolled ? 'scrolled' : ''}`}
              href={`#${title}`}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
