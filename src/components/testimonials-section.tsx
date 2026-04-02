import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Морозова",
    role: "CTO, FinCore Technologies",
    avatar: "/professional-woman-scientist.png",
    content:
      "Nexus AI сократил время обработки заявок с 4 часов до 7 минут. Команда наконец занимается стратегией, а не рутиной.",
  },
  {
    name: "Дмитрий Волков",
    role: "Директор по данным, Stellar Analytics",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Предиктивные модели работают с точностью, которую мы не могли достичь годами. Интеграция с нашей инфраструктурой заняла два дня.",
  },
  {
    name: "Анна Ковалёва",
    role: "Руководитель продукта, Nova Industries",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Впервые видим ИИ-платформу, которая реально понимает наш бизнес-контекст. Качество генерации контента — на уровне лучших копирайтеров.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят руководители о результатах внедрения Nexus AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}