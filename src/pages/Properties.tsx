import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid2X2, List, MapPin, Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  const properties = [
    {
      id: "1",
      title: "Дубовая лестница со стеклом",
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
    {
      id: "4",
      title: "Маршевая лестница из бука",
      type: "Маршевая",
      address: "Массив бука, деревянное ограждение",
      price: 245000,
      bedrooms: 14,
      bathrooms: 1,
      squareFeet: 3,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/19e8123a-4de1-449f-a979-ea682f14afe6.jpg",
    },
    {
      id: "5",
      title: "Лофт-лестница на косоуре",
      type: "Комбинированная",
      address: "Чёрный металл, ступени из дуба",
      price: 310000,
      bedrooms: 15,
      bathrooms: 1,
      squareFeet: 4,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/a7c817d0-8dc5-489e-a337-a1b0bcddf2dd.jpg",
    },
    {
      id: "6",
      title: "Дизайнерская винтовая лестница",
      type: "Винтовая",
      address: "Дерево и кованая сталь премиум",
      price: 560000,
      bedrooms: 20,
      bathrooms: 2,
      squareFeet: 2,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "https://cdn.poehali.dev/projects/4bf85914-58ec-43e2-b5b8-c8835e8f7022/files/06a2dbad-f2aa-4c9b-b67c-e66bf6b35ca0.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Каталог лестниц</h1>
        <p className="text-muted-foreground">Выберите готовое решение или закажите лестницу по индивидуальному проекту</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Поиск по названию, материалу или типу лестницы..." className="w-full pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1 sm:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            Фильтры
          </Button>
          <Tabs defaultValue="grid" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="grid">
                <Grid2X2 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="map">
                <MapPin className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" className="h-9">
            Сначала новые
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">
          <SearchFilters />
        </div>
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Загрузить ещё</Button>
          </div>
        </div>
      </div>
    </div>
  )
}