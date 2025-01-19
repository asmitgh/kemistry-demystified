"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Rahul M.",
    text: "Kemistry Demystified helped me crack JEE Advanced with an excellent rank. The teaching methodology is unique and effective.",
    achievement: "IIT Bombay",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "The weekly test series and doubt-solving sessions were game-changers in my NEET preparation.",
    achievement: "AIIMS Delhi",
    rating: 5,
  },
  {
    name: "Amit K.",
    text: "The practical approach to learning chemistry made complex concepts easy to understand.",
    achievement: "NIT Durgapur",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our students who achieved their dreams
          </p>
        </div>
        <Carousel className="mx-auto max-w-xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array(testimonial.rating).fill(null).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg mb-4">{testimonial.text}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

