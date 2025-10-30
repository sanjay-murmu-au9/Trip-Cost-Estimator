import React, { createContext, useContext, useState } from 'react'
import ContactModal from '@/components/ui/ContactModal'

type ContextShape = {
  openContactModal: () => void
  closeContactModal: () => void
}

const ContactModalContext = createContext<ContextShape | undefined>(undefined)

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <ContactModalContext.Provider
      value={{ openContactModal: () => setOpen(true), closeContactModal: () => setOpen(false) }}
    >
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}

