import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { SwissButton } from '@/components/ui/swiss-button'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL! || 'https://digldzbwgoqnwuhpdjuw.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY! || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZ2xkemJ3Z29xbnd1aHBkanV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODc1MjYsImV4cCI6MjA3NDY2MzUyNn0.qVYryQjm8fpvnrA8TMl6DrP_NQREx3vaD518LClY6J8'
)

type Props = {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [organization, setOrganization] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  // ✅ useEffect must always be declared unconditionally (before any returns)
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(null), 3500)
      return () => clearTimeout(timeout)
    }
  }, [alert])

  // ✅ Validate email
  function validateEmail(value: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(value)
  }

  // ✅ Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return setEmailError('Email is required')
    if (!validateEmail(email)) return setEmailError('Please enter a valid email address')
    if (!message) return window.alert('Please provide a short message')

    setLoading(true)
    try {
      // 1️⃣ Check for existing email
      const { data: existing, error: fetchError } = await supabase
        .from('tripcostscalc_contact_inquiries')
        .select('id')
        .eq('email', email)
        .maybeSingle()

      if (fetchError) throw fetchError

      if (existing) {
        setAlert({ text: 'You are already subscribed!', type: 'error' })
        return
      }

      // 2️⃣ Insert new record
      const { error: insertError } = await supabase
        .from('tripcostscalc_contact_inquiries')
        .insert([{ name, email, organization, message, source: window.location.href }])

      if (insertError) throw insertError

      setAlert({ text: 'Thanks — your inquiry was received!', type: 'success' })
      setName('')
      setEmail('')
      setOrganization('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setAlert({ text: 'Something went wrong. Please try again later.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  // ✅ Early return after hooks
  if (!open) return null

  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-[#0b1220] rounded-lg w-full max-w-xl shadow-lg relative overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Partnership Inquiry</h3>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>
              <input
                className="w-full rounded-md border px-3 py-2"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (!e.target.value) setEmailError('Email is required')
                  else if (!validateEmail(e.target.value)) setEmailError('Please enter a valid email')
                  else setEmailError(null)
                }}
              />
              {emailError && (
                <p className="text-sm text-red-600 mt-1">{emailError}</p>
              )}
            </div>

            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Organization (optional)"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />

            <textarea
              className="w-full rounded-md border px-3 py-2 h-28"
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>
              <SwissButton type="submit" disabled={loading} className="px-4">
                {loading ? 'Sending…' : 'Send inquiry'}
              </SwissButton>
            </div>
          </form>

          {/* 🔔 fading alert */}
          {alert && (
            <div
              className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-white text-sm shadow-md transition-opacity duration-700 ${
                alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              } animate-fade`}
            >
              {alert.text}
            </div>
          )}
        </div>
      </div>

      {/* fade-out animation */}
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        .animate-fade {
          animation: fadeOut 3.5s ease forwards;
        }
      `}</style>
    </>
  )
}
