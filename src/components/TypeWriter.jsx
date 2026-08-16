import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function TypeWriter({ items, typingSpeed = 80, deletingSpeed = 40, delayBetweenItems = 2000 }) {
  const [displayText, setDisplayText] = useState('')
  const [itemIndex, setItemIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentItem = items[itemIndex]
    const isComplete = displayText === currentItem

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setItemIndex((prev) => (prev + 1) % items.length)
        }
      } else {
        if (displayText.length < currentItem.length) {
          setDisplayText(currentItem.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenItems)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, itemIndex, isDeleting, items, typingSpeed, deletingSpeed, delayBetweenItems])

  return (
    <div className="mt-3 h-8 min-h-[32px]">
      <p className="text-xl font-semibold tracking-wider text-cyan-300 sm:text-2xl">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block h-6 w-0.5 bg-cyan-300 sm:h-7"
        />
      </p>
    </div>
  )
}

export default TypeWriter
