import { Icons } from "./icons"
import ThemeToggle from "./ui/ThemeToggle"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="flex justify-center border-b h-14">
      <div className="max-w-[90%] md:max-w-[80%] h-full w-full flex items-center justify-between">
        <h4 className="font-bold tracking-tight text-md scroll-m-20">
          {/* if size mobile show hbp else show hernan barrios paz */}
          {window.innerWidth < 768 ? "HBP" : "Hernan Barrios Paz"}
        </h4>
        <nav className="flex items-center">
          <Button variant="ghost">
            <Icons.gitHub className="w-[20px] h-[20px]" />
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}

export default Header
