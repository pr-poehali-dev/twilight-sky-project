import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Насколько безопасны мои данные?",
      answer:
        "Все данные хранятся в зашифрованном виде с использованием стандарта AES-256. Мы не передаём ваши данные третьим лицам и не используем их для обучения общих моделей без вашего явного согласия.",
    },
    {
      question: "Сколько времени занимает внедрение?",
      answer:
        "Базовое подключение через API занимает от одного дня. Полноценная интеграция с корпоративными системами — от одной до трёх недель в зависимости от сложности инфраструктуры.",
    },
    {
      question: "Можно ли обучить модель на моих данных?",
      answer:
        "Да, мы поддерживаем fine-tuning на корпоративных данных. Модель обучается в изолированной среде и используется исключительно вашей компанией.",
    },
    {
      question: "Как работает ценообразование?",
      answer:
        "Мы предлагаем гибкие тарифы: по числу запросов, по числу пользователей или фиксированная подписка для Enterprise. Есть бесплатный пробный период на 14 дней.",
    },
    {
      question: "Какие языки поддерживает платформа?",
      answer:
        "Nexus AI работает с более чем 50 языками, включая русский. Генерация и анализ текста на русском языке — одно из наших ключевых преимуществ.",
    },
    {
      question: "Есть ли поддержка после подключения?",
      answer:
        "Все клиенты получают доступ к технической документации и базе знаний. Enterprise-клиентам назначается персональный менеджер и приоритетная поддержка 24/7.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о платформе Nexus AI, безопасности данных и процессе внедрения.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}