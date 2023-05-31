"use client"

import Projects from "@/components/Projects"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Home = () => {
  return (
    <main className="flex justify-center min-h-screen">
      <section className="mt-10 flex flex-col  justify-around max-w-[80%] w-full min-h-full">
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Fullstack Developer
          </h1>
          <p className="max-w-[600px] leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Hola soy Hernan, un desarrollador web con experiencia en el front y
            el back, tambien tengo ojo para el diseño y la experiencia de
            usuario.
          </p>
          <div className="max-w-[300px] mt-6">
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
          </div>
        </div>
        <Projects />
      </section>
    </main>
  )
}

export default Home
