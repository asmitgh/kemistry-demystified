import { Hero } from "@/components/hero"
import { Founder } from "@/components/founder"
import { RankersGallery } from "@/components/rankers-gallery"
import { Testimonials } from "@/components/testimonials"
import ExamRankersGallery from "@/exam-rankers-gallery"

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <ExamRankersGallery />
      <Testimonials />
    </>
  )
}

