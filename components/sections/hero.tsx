'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Maximize2, Minus, Server, Shield, X, Zap } from 'lucide-react'
import Link from 'next/link'
import { calendlyBookingUrl } from '@/lib/links'

const chatMessages = [
  {
    role: 'user' as const,
    text: 'What treatment did patient Johnson have in March?',
  },
  {
    role: 'assistant' as const,
    text: 'Patient Johnson (DOB 1984-07-12) had a root canal on March 4th and a follow-up crown fitting on March 18th. The procedure notes are in file "Johnson_2024_Q1.pdf". Shall I pull the full treatment plan?',
  },
  {
    role: 'user' as const,
    text: 'Does his insurance cover the crown?',
  },
  {
    role: 'assistant' as const,
    text: 'Based on his Delta Dental PPO plan (policy #DD-4821), crowns are covered at 50% after deductible. His $200 deductible has already been met this year - estimated patient cost is $480.',
  },
]

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 px-1">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
    </span>
  )
}

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [typing, setTyping] = useState(false)
  const [windowState, setWindowState] = useState<'open' | 'minimized' | 'closed'>('open')
  const [isExpanded, setIsExpanded] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const showWindowBody = windowState !== 'minimized'
  const showConversation = windowState === 'open'

  useEffect(() => {
    if (windowState !== 'open') return
    if (visibleMessages >= chatMessages.length) return

    const current = chatMessages[visibleMessages]
    const delay = current.role === 'assistant' ? 900 : 600

    const timer = setTimeout(() => {
      if (current.role === 'assistant') {
        setTyping(true)
        const typingTimer = setTimeout(() => {
          setTyping(false)
          setVisibleMessages((prev) => prev + 1)
        }, 1400)
        return () => clearTimeout(typingTimer)
      }

      setVisibleMessages((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [visibleMessages, windowState])

  useEffect(() => {
    if (!showConversation) return
    const container = scrollContainerRef.current
    if (!container) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }, [showConversation, visibleMessages, typing])

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 ${
        isExpanded ? 'max-w-xl' : 'max-w-md'
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-card/80 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            aria-label="Close window"
            onClick={() => setWindowState('closed')}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] transition-transform hover:scale-110 active:scale-95"
          >
            <X size={8} strokeWidth={2.5} className="opacity-0 transition-opacity group-hover:opacity-70" />
          </button>
          <button
            type="button"
            aria-label="Minimize window"
            onClick={() => {
              setIsExpanded(false)
              setWindowState((current) => {
                if (current === 'closed') return 'open'
                return current === 'minimized' ? 'open' : 'minimized'
              })
            }}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e] transition-transform hover:scale-110 active:scale-95"
          >
            <Minus
              size={8}
              strokeWidth={2.5}
              className="opacity-0 transition-opacity group-hover:opacity-70"
            />
          </button>
          <button
            type="button"
            aria-label={isExpanded ? 'Restore window' : 'Expand window'}
            onClick={() => {
              setWindowState('open')
              setIsExpanded((current) => !current)
            }}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840] transition-transform hover:scale-110 active:scale-95"
          >
            <Maximize2
              size={7}
              strokeWidth={2.5}
              className="opacity-0 transition-opacity group-hover:opacity-70"
            />
          </button>
          <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
            Boston AI - Private AI Assistant
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-green-600/20 bg-green-50 px-2.5 py-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" />
          <span className="text-xs font-medium text-green-700">Running locally</span>
        </div>
      </div>

      {showWindowBody && (
        <>
          {showConversation ? (
            <div
              ref={scrollContainerRef}
              className={`flex flex-col gap-3 overflow-y-auto p-4 transition-all duration-300 ${
                isExpanded ? 'min-h-80 max-h-[28rem]' : 'min-h-64 max-h-80'
              }`}
            >
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border bg-secondary text-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-xl border border-border bg-secondary px-3 py-2">
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Shield size={20} className="text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Window closed</p>
                <p className="text-sm text-muted-foreground">
                  Click the yellow or green button to reopen the assistant.
                </p>
              </div>
            </div>
          )}

          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-3 py-2">
              <span className="flex-1 text-sm text-muted-foreground">
                {showConversation ? 'Ask anything about your documents...' : 'Assistant paused'}
              </span>
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20">
                <ArrowRight size={12} className="text-primary" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-24">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.62 0.22 255) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.22 255) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 lg:self-start">
              <Shield size={13} className="text-primary" />
              <span className="text-xs font-medium text-primary">100% On-Premise - No Cloud</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Documents. <span className="text-primary">Now Searchable</span> with AI.
            </h1>

            <p className="mx-auto max-w-xl text-balance text-lg leading-relaxed text-muted-foreground lg:mx-0">
              We install a private AI assistant in your office that understands your patient files,
              treatment notes, and internal documents - instantly.
            </p>

            <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
              {[
                { icon: Zap, label: 'Instant answers', sub: 'from your own files' },
                { icon: Shield, label: 'Fully private', sub: 'no data leaves your office' },
                { icon: Server, label: 'On-premise', sub: 'runs on your hardware' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={calendlyBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-1 justify-center">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
