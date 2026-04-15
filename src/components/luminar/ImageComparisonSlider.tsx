'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  caption?: string
}

export default function ImageComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  caption,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50) // percentage
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }
  const onMouseUp = () => { isDragging.current = false }

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX)
  }
  const onTouchEnd = () => { isDragging.current = false }

  return (
    <div>
      <div
        ref={containerRef}
        className="comparison-container"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* After (bottom layer) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="image-after"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 880px"
          priority
        />

        {/* Before (top layer, clipped) */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="image-before"
          style={{
            objectFit: 'cover',
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
          sizes="(max-width: 768px) 100vw, 880px"
          priority
        />

        {/* Slider handle */}
        <div
          className="slider-handle"
          style={{ left: `${position}%` }}
        >
          <div className="slider-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="label label-before">Before</span>
        <span className="label label-after">After</span>
      </div>

      {caption && (
        <p className="hero-section__desc" style={{ textAlign: 'center', marginTop: 0 }}>
          {caption}
        </p>
      )}
    </div>
  )
}
