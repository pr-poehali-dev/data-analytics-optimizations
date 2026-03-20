export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm font-medium tracking-wide">
          <span className="font-bold">UMI</span>
          <span className="text-white/60 font-light">.CMS</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Возможности
          </a>
          <a
            href="#"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Тарифы
          </a>
          <a
            href="#"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Попробовать
          </a>
        </nav>
      </div>
    </header>
  )
}