import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { MapPin, Home, Building, Filter } from "lucide-react"

export default function HomePage() {
  const featuredProperties = [
    {
      id: "1",
      title: "Дубовая лестница с стеклом",
      type: "Из дерева",
      address: "Массив дуба, стеклянное ограждение",
      price: 285000,
      bedrooms: 15,
      bathrooms: 2,
      squareFeet: 3,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/19e8123a-4de1-449f-a979-ea682f14afe6.jpg",
    },
    {
      id: "2",
      title: "Парящая лестница на металле",
      type: "Комбинированная",
      address: "Стальной каркас, ступени из ясеня",
      price: 340000,
      bedrooms: 16,
      bathrooms: 1,
      squareFeet: 4,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/a7c817d0-8dc5-489e-a337-a1b0bcddf2dd.jpg",
    },
    {
      id: "3",
      title: "Винтовая лестница из дерева и ковки",
      type: "Винтовая",
      address: "Тёмный дуб, кованое ограждение",
      price: 420000,
      bedrooms: 18,
      bathrooms: 2,
      squareFeet: 2,
      yearBuilt: 2024,
      status: "Хит продаж",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/06a2dbad-f2aa-4c9b-b67c-e66bf6b35ca0.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Лестницы на заказ для вашего дома
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Проектируем, изготавливаем и монтируем лестницы из дерева, металла и стекла. Точно по вашим размерам.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/properties">
                  <Button size="lg" className="gap-1.5">
                    <Home className="h-4 w-4" />
                    Каталог лестниц
                  </Button>
                </Link>
                <Link to="/properties/new">
                  <Button size="lg" variant="outline" className="gap-1.5">
                    <Building className="h-4 w-4" />
                    Заказать лестницу
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex items-center gap-2 pb-4">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Подобрать лестницу</h2>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Бюджет от
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любой</option>
                        <option value="100000">100 тыс</option>
                        <option value="200000">200 тыс</option>
                        <option value="300000">300 тыс</option>
                        <option value="500000">500 тыс</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Бюджет до
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любой</option>
                        <option value="300000">300 тыс</option>
                        <option value="500000">500 тыс</option>
                        <option value="800000">800 тыс</option>
                        <option value="1000000">1 млн+</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Материал
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любой</option>
                        <option value="oak">Дуб</option>
                        <option value="ash">Ясень</option>
                        <option value="beech">Бук</option>
                        <option value="metal">Металл</option>
                        <option value="glass">Стекло</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Ограждение
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любое</option>
                        <option value="wood">Деревянное</option>
                        <option value="glass">Стеклянное</option>
                        <option value="forged">Кованое</option>
                        <option value="steel">Нержавейка</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Тип лестницы
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Любой</option>
                      <option value="marsh">Маршевая</option>
                      <option value="spiral">Винтовая</option>
                      <option value="floating">Парящая (консольная)</option>
                      <option value="combined">Комбинированная</option>
                      <option value="attic">Чердачная</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Ваш город"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Link to="/properties">
                    <Button className="w-full">Подобрать лестницу</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 pb-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Наши работы</h2>
              <p className="text-muted-foreground">Готовые проекты лестниц, изготовленные нашими мастерами</p>
            </div>
            <Link to="/properties">
              <Button variant="outline">Весь каталог лестниц</Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}