import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Ranker {
  name: string
  rank: string
  year: string
  exam: string
  image: string
}

const rankers: Ranker[] = [
  {
    "name": "Sneha Natua",
    "rank": "AIR 45666",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Aditya Samanta",
    "rank": "WBJEE Rank 657",
    "year": "2023",
    "exam": "WBJEE",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Aditya Dhara",
    "rank": "NEET Score 642",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Rinita Pal",
    "rank": "NEET UG AIR 25081",
    "year": "2023",
    "exam": "NEET UG",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Soumik Maity",
    "rank": "AIR 27234",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Debanka Halder",
    "rank": "AIR 7904",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Arnab Sardar",
    "rank": "AIR 8689",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Rupam Bora",
    "rank": "AIR 38275",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Souro Chakraborty",
    "rank": "AIR 46294",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Sangeet Karmakar",
    "rank": "AIR 1914",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Arghya Saha",
    "rank": "AIR 76096",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Shivraj Karthikeyan",
    "rank": "AIR 7935",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  },
  {
    "name": "Bedpurna Karmakar",
    "rank": "AIR 46294",
    "year": "2023",
    "exam": "NEET",
    "image": "/placeholder.svg?height=400&width=300"
  }
]

export default function ExamRankersGallery() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">IIT JEE and NEET Stars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {rankers.map((ranker, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={ranker.image || "/placeholder.svg"}
              alt={ranker.name}
              width={300}
              height={400}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg">{ranker.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">{ranker.rank}</p>
              <p className="text-sm text-muted-foreground">{ranker.exam} {ranker.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

