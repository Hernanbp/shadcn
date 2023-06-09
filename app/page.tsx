import Posts from "@/components/Posts"
import Projects from "@/components/Projects"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Home = () => {
  return (
    <main className="flex justify-center min-h-screen">
      <section className="mt-10 flex flex-col  justify-around max-w-[90%] md:max-w-[80%] w-full min-h-full">
        <div className="flex flex-col justify-center w-full my-6 ">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Fullstack Developer
          </h1>
          <p className="max-w-[600px] text-center md:text-left leading-6 mb-2 text-muted-foreground [&:not(:first-child)]:mt-7">
            Hola soy Hernan, un desarrollador web con experiencia en el front y
            el back, tambien tengo ojo para el diseño y la experiencia de
            usuario.
          </p>
          <div className="my-6 md:max-w-[150px] ">
            <Button
              style={{
                width: "100%",
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
          </div>
        </div>
        <Projects />
        <Posts />
      </section>
    </main>
  )
}

export default Home
