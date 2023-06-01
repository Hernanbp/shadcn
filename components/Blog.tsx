import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"

const Blog = () => {
  const articulos = [
    {
      title: "Programacion Orientada a objetos con Java",
      description:
        "Using Java's object-oriented programming capabilities, we have developed a modular and scalable application that allows users to manage inventory items, track stock levels, and generate reports.",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
        Blog
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        {articulos.map((articulo) => (
          <Card key={articulo.title} className="max-w-[400px]">
            <CardHeader>
              <CardTitle>{articulo.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Publicado: Martes 20 de julio, 2020
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog
