import { NavigationItem } from "./NavigationItem";

const Navigation = () => {
  return (
    <nav className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2 text-center sm:w-full">
      <NavigationItem label="Frontend" path="/" />
      <NavigationItem label="Musician" path="/musician" />
    </nav>
  )
}

export { Navigation };