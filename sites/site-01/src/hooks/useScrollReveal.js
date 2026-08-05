import { useEffect, useRef, useState } from 'react'

/**
 * Hook para animar elementos al entrar en pantalla durante el scroll.
 * Usa IntersectionObserver nativo (sin dependencias externas).
 *
 * Uso:
 *   const [ref, visible] = useScrollReveal()
 *   <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''}`}>
 */
function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export default useScrollReveal