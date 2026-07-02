import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlignVerticalSpaceAround, Layers, Ruler, Calendar, Package, Phone, Mail, Heart, Share2, Home, ChevronRight } from "lucide-react"

export default function PropertyDetailPage() {
  const { id } = useParams()

  const property = {
    id: id,
    title: "Винтовая лестница из дерева и ковки",
    type: "Винтовая",
    address: "Тёмный дуб, кованое ограждение",
    price: 420000,
    bedrooms: 18,
    bathrooms: 2,
    squareFeet: 2,
    yearBuilt: 2024,
    status: "Доступно",
    description:
      "Элегантная винтовая лестница из массива дуба с коваными элементами ограждения — станет центром интерьера вашего дома. Ступени изготовлены из отборного дуба и покрыты износостойким лаком в 3 слоя. Кованое ограждение выполнено вручную нашими мастерами по индивидуальному эскизу. Компактная конструкция экономит пространство и подходит даже для небольших проёмов. Срок изготовления — от 3 недель, монтаж под ключ за 2 дня. Гарантия 5 лет.",
    features: [
      "Массив дуба",
      "Ручная ковка",
      "Компактная конструкция",
      "Износостойкий лак",
      "Индивидуальный эскиз",
      "Тонировка по RAL",
      "Противоскользящие ступени",
      "Бесшумные соединения",
      "Замер мастером",
      "Монтаж под ключ",
      "Гарантия 5 лет",
      "Доставка по региону",
    ],
    images: [
      "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/06a2dbad-f2aa-4c9b-b67c-e66bf6b35ca0.jpg",
      "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/19e8123a-4de1-449f-a979-ea682f14afe6.jpg",
      "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/a7c817d0-8dc5-489e-a337-a1b0bcddf2dd.jpg",
      "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/19e8123a-4de1-449f-a979-ea682f14afe6.jpg",
      "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/a7c817d0-8dc5-489e-a337-a1b0bcddf2dd.jpg",
    ],
    agent: {
      name: "Игорь Столяров",
      phone: "+7 (495) 123-45-67",
      email: "info@lestnica-master.ru",
      image: "/placeholder.svg?height=200&width=200",
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center gap-1 hover:text-foreground">
          <Home className="h-4 w-4" />
          Главная
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/properties" className="hover:text-foreground">
          Каталог лестниц
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{property.title}</span>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
          <div className="mb-4 flex items-center gap-2">
            <Package className="h-4 w-4 text-muted-foreground" />
            <span>{property.address}</span>
            <Badge
              className={
                property.status === "Available"
                  ? "bg-green-100 text-green-800"
                  : property.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }
              variant="outline"
            >
              {property.status}
            </Badge>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <AlignVerticalSpaceAround className="h-5 w-5" />
              <span>{property.bedrooms} ступеней</span>
            </div>
            <div className="flex items-center gap-1">
              <Layers className="h-5 w-5" />
              <span>{property.bathrooms} пролёта</span>
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="h-5 w-5" />
              <span>ширина {property.squareFeet} м</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-5 w-5" />
              <span>гарантия 5 лет</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="text-3xl font-bold">{formatPrice(property.price)}</div>
          <div className="mt-4 flex gap-2">
            <Button size="lg">Заказать такую же</Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Сохранить
            </Button>
            <Button size="icon" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="col-span-4 aspect-video overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index} className="col-span-2 aspect-video overflow-hidden rounded-lg sm:col-span-1">
            <img
              src={image || "/placeholder.svg"}
              alt={`${property.title} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="description">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="features">Характеристики</TabsTrigger>
              <TabsTrigger value="location">Доставка</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-semibold">Описание лестницы</h2>
              <p className="leading-relaxed">{property.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <h2 className="mb-4 text-2xl font-semibold">Характеристики и опции</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location">
              <h2 className="mb-4 text-2xl font-semibold">Доставка и монтаж</h2>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center p-6 text-center">
                  <p className="text-muted-foreground">Доставляем и монтируем лестницы по всему региону. Замер и расчёт — бесплатно. Монтаж под ключ за 1–2 дня.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <img
                src={property.agent.image || "/placeholder.svg"}
                alt={property.agent.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{property.agent.name}</h3>
              <p className="text-sm text-muted-foreground">Мастер по лестницам</p>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.email}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Ваш Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Ваш телефон
              </label>
              <input
                id="phone"
                type="tel"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={`Здравствуйте! Меня интересует лестница "${property.title}". Прошу рассчитать стоимость и связаться со мной для замера.`}
              ></textarea>
            </div>
            <Button className="w-full">Отправить заявку</Button>
          </div>
        </div>
      </div>
    </div>
  )
}