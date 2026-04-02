import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генеративный ИИ",
    description: "Мощные языковые модели и нейросети, которые создают текст, изображения, код и решения — быстро и точно.",
    icon: "brain",
    badge: "GenAI",
  },
  {
    title: "Безопасность данных",
    description: "Корпоративное шифрование и полная изоляция данных — ваша информация никогда не покидает защищённого контура.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Точность предсказаний",
    description: "Предиктивные модели с точностью до 99,2% помогают принимать решения на основе данных, а не интуиции.",
    icon: "globe",
    badge: "Точность",
  },
  {
    title: "Автоматизация задач",
    description: "ИИ-агенты берут на себя рутинные процессы: обработку данных, классификацию, ответы на запросы.",
    icon: "zap",
    badge: "Авто",
  },
  {
    title: "Интеграция с системами",
    description: "Готовые коннекторы к CRM, ERP, базам данных и любым API — запуск без переписывания инфраструктуры.",
    icon: "link",
    badge: "API",
  },
  {
    title: "Обучение на ваших данных",
    description: "Дообучение моделей на корпоративных данных для максимально точного понимания вашей предметной области.",
    icon: "target",
    badge: "Fine-tune",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности нашего ИИ</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Передовые технологии искусственного интеллекта, которые уже сегодня меняют бизнес и науку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}