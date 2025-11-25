export function Navbar() {
  return (
    <header className="w-full bg-primary text-white">
      <div className="container flex items-center justify-between py-4">
        <div className="font-semibold tracking-wide text-lg">RESTAURANT</div>
        <div className="w-full max-w-sm">
          <input
            className="w-full rounded-full px-4 py-2 text-sm text-dark outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}
