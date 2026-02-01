export default function Navbar() {
  return (
    <nav className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 py-3">
      <div className="flex w-full justify-between items-center">
        <h3 className="font-bold text-xl">Vexen</h3>

        <ul className="hidden lg:flex gap-8 items-center font-medium text-sm">
          <li>
            <a href="#" className="hover:text-amber6bg-amber-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber6bg-amber-600">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber6bg-amber-600">
              Newsletter
            </a>
          </li>
        </ul>

        <button className="lg:hidden py-2 px-4 text-white text-sm bg-amber-600 rounded-2xl  hover:shadow-2xl hover:opacity-90">
          Menu
        </button>
      </div>
    </nav>
  );
}
