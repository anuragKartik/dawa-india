import { store } from '../data/store'
import './WhatsAppFloat.css'

const message = encodeURIComponent(
  `Hi, I want to enquire about medicines at Davaindia Generic Pharmacy, Chaitanya Vihar, Kanpur.`,
)

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${store.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3C9.39 3 4 8.36 4 14.95c0 2.1.55 4.14 1.6 5.95L4 29l8.3-1.55a12.1 12.1 0 0 0 3.71.58c6.62 0 12-5.36 12-11.95C28 8.36 22.63 3 16.01 3zm0 21.78c-1.2 0-2.38-.3-3.42-.88l-.25-.14-4.93.92.93-4.8-.16-.27a9.8 9.8 0 0 1-1.5-5.23c0-5.4 4.42-9.79 9.33-9.79 4.9 0 9.32 4.39 9.32 9.79 0 5.4-4.42 9.8-9.32 9.8zm5.12-7.34c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.27-.72.91-.89 1.1-.16.18-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.27-.02-.42.12-.56.13-.13.28-.33.42-.5.14-.16.19-.28.28-.46.1-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.27-1 1-1 2.42s1.02 2.81 1.16 3c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.63.6.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}
