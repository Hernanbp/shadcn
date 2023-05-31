"use client"

import Projects from "@/components/Projects"

const Home = () => {
  return (
    <main className="flex justify-center min-h-screen">
      <section className="mt-10 flex flex-col  justify-around max-w-[80%] w-full min-h-full">
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Fullstack Developer
          </h1>
          <p className="max-w-[500px] leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
        </div>
        <Projects />
      </section>
    </main>
  )
}

export default Home
