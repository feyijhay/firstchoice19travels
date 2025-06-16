import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DestinationCardProps {
    image: string
    title: string
    description: string
}

export default function DestinationCard({ image, title, description }: DestinationCardProps) {
    return (
        <Card className="overflow-hidden border-sky-100 transition-all duration-300 hover:shadow-lg">
            <div className="relative h-64 w-full">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-sky-700 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Button variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-50">
                    Explore {title}
                </Button>
            </CardContent>
        </Card>
    )
}
