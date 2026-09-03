'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const heroVideo = '/banner.mp4'

export function ArtLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [joined, setJoined] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setJoined(true)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <div className="banner-background">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Wild Forge banner"
        />
      </div>

      <div className="relative z-10">
        <div className="fixed left-0 right-0 top-0 z-50 w-full bg-background/50 backdrop-blur-md">
          <header className="site-header mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 py-7 md:px-10 md:py-9 lg:px-16">
            <a href="#home" className="justify-self-start font-serif text-[27px] leading-none tracking-[-0.06em] md:hidden" aria-label="The ART home">The <span className="text-[31px]">ART</span></a>
            <nav className="hidden items-center gap-11 justify-self-start text-[13px] font-medium tracking-[0.02em] md:flex" aria-label="Main navigation">
              <a className="nav-link nav-link-active" href="#home">Home</a>
              <a className="nav-link" href="#collection">Collection</a>
            </nav>
            <a href="#home" className="site-logo justify-self-center font-serif text-[35px] leading-none tracking-[-0.065em]">Wild <span>Forge</span></a>
            <nav className="hidden items-center gap-10 justify-self-end text-[13px] font-medium tracking-[0.02em] md:flex" aria-label="Secondary navigation">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#journal">Journal</a>
              <a className="nav-link" href="#community">Community</a>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>
            <button className="justify-self-end rounded-md p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
            </button>
          </header>
          {menuOpen && <nav className="border-y border-border bg-background/90 px-6 py-5 backdrop-blur-sm md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-5 text-sm"><a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a><a href="#community" onClick={() => setMenuOpen(false)}>Community</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></nav>}
        </div>

        <section id="home" className="banner-spacer" aria-label="Banner" />

        <div className="w-full">
          <section id="about" className="mx-auto flex w-full scroll-mt-8 flex-col items-center px-6 pb-24 pt-16 text-center md:pb-32 md:pt-24">
            <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border border-border/80 bg-white/65 px-6 py-10 shadow-sm backdrop-blur-md md:px-12 md:py-14">
              <div className="mb-8 flex items-center gap-6"><span className="rounded-md bg-secondary px-7 py-2 text-sm text-foreground">About</span><h1 className="font-serif text-[43px] leading-none tracking-[-0.055em] text-foreground md:text-[48px]">Wild Forge</h1></div>
              <div className="mb-10 h-px w-[140px] bg-border" />
              <p className="reverse-triangle max-w-full text-[15px] leading-[1.62] text-foreground md:text-[16px]"><span className="triangle-wide font-serif text-xl md:text-2xl">Made to Shape More Than Space</span><span className="triangle-wide">Wild Forge creates sculptural metalwork that brings character, warmth, and meaning to the spaces we inhabit. Rooted in craftsmanship and inspired by life, memory, and imagination, each piece is thoughtfully designed to become more than an ART. It becomes a presence — something that changes the atmosphere, invites a second look, and stays with you.</span><span className="triangle-mid">From refined interiors to expansive landscapes, our sculptures are created to connect with their surroundings and the people who experience them.</span><span className="triangle-narrow">We believe great art doesn&apos;t simply occupy space. It transforms how that space feels.<br/> Every form has a purpose. <br/> Every finish has a character.<br/> Every piece has a story.</span><span className="triangle-tip">Because we don't just make metalwork.<br />We create a feeling.<br /><strong>This is Wild Forge.</strong></span></p>
              <div className="ornament-divider mt-10 w-full"><span aria-hidden="true">◇</span></div>
            </div>
          </section>

          <section id="community" className="mt-8 mb-0 flex w-full flex-col items-center border border-border/80 bg-white/90 px-6 pb-20 pt-12 text-center shadow-sm backdrop-blur-md md:mx-auto md:mt-12 md:mb-0 md:pb-28 md:pt-16"><h2 className="font-serif text-[37px] leading-tight tracking-[-0.055em] md:text-[42px]">Join our Community Today</h2><div className="mx-auto mt-5 h-px w-[112px] bg-border" /><form onSubmit={handleSubmit} className="mx-auto mt-11 flex w-fit max-w-full flex-col items-center justify-center gap-4 md:flex-row"><label className="flex h-[52px] w-full items-center gap-3 rounded-md border border-input px-4 text-left md:w-64 md:flex-none"><Phone size={19} strokeWidth={1.4} className="text-muted-foreground" /><span className="sr-only">Phone number</span><input type="tel" placeholder="Phone number" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></label><button type="submit" className="h-[52px] rounded-md bg-primary px-12 text-[16px] text-primary-foreground transition-opacity hover:opacity-85">{joined ? 'Joined' : 'Join'}</button></form>{joined && <p className="mt-4 text-sm text-muted-foreground" role="status">Welcome to the community.</p>}</section>

          <footer id="contact" className="border-t border-border bg-white px-6 py-10 md:px-16 md:py-12"><div className="mx-auto flex max-w-[1260px] flex-col justify-between gap-10 md:flex-row"><div><div className="font-serif text-[31px] tracking-[-0.06em]">Wild <span className="text-[35px]">Forge</span></div><p className="mt-4 text-xs text-muted-foreground">Contemporary Art. Timeless Inspiration.</p></div><div className="grid grid-cols-3 gap-12 text-xs leading-7 text-muted-foreground"><div><a href="#collection" className="footer-link">Collection</a><a href="#artists" className="footer-link">Artists</a><a href="#exhibitions" className="footer-link">Exhibitions</a></div><div><a href="#about" className="footer-link">About</a><a href="#journal" className="footer-link">Journal</a><a href="#community" className="footer-link">Community</a></div><div><a href="#careers" className="footer-link">Careers</a><a href="#contact" className="footer-link">Contact</a><a href="#press" className="footer-link">Press</a></div></div><div className="flex items-center justify-center gap-5 text-xs font-medium tracking-wide text-muted-foreground md:ml-auto md:self-center"><a href="#instagram" aria-label="Instagram">ig</a><span>|</span><a href="#linkedin" aria-label="LinkedIn">in</a><span>|</span><a href="#pinterest" aria-label="Pinterest" className="font-serif text-xl">p</a></div></div><div className="mx-auto mt-12 flex max-w-[1260px] flex-col justify-between gap-3 border-t border-border pt-6 text-center text-[11px] text-muted-foreground md:flex-row md:text-left"><span>© 2024 Wild Forge. All rights reserved.</span><span>Privacy Policy <i className="mx-4 not-italic">|</i> Terms of Use</span></div></footer>
        </div>
      </div>
    </main>
  )
}
