import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ChevronRight, Upload, X } from "lucide-react"

export default function NewPropertyPage() {
  const [images, setImages] = useState<string[]>([])
  const [amenities, setAmenities] = useState({
    pool: false,
    garage: false,
    garden: false,
    balcony: false,
    elevator: false,
    airConditioning: false,
    furnished: false,
    petFriendly: false,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Заявка на лестницу отправлена! Мы свяжемся с вами для замера.")
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
        <span className="text-foreground">Заказать лестницу</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Заказать лестницу</h1>
        <p className="text-muted-foreground">Заполните форму, и наш мастер рассчитает стоимость и приедет на замер</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Параметры лестницы</CardTitle>
              <CardDescription>Расскажите, какую лестницу вы хотите</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название проекта</Label>
                <Input id="title" placeholder="например, Дубовая лестница на второй этаж" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Тип лестницы</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marsh">Маршевая</SelectItem>
                      <SelectItem value="spiral">Винтовая</SelectItem>
                      <SelectItem value="floating">Парящая (консольная)</SelectItem>
                      <SelectItem value="combined">Комбинированная</SelectItem>
                      <SelectItem value="attic">Чердачная</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="material">Материал</Label>
                  <Select required>
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oak">Дуб</SelectItem>
                      <SelectItem value="ash">Ясень</SelectItem>
                      <SelectItem value="beech">Бук</SelectItem>
                      <SelectItem value="metal">Металл</SelectItem>
                      <SelectItem value="glass">Стекло</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Ваш бюджет (руб.)</Label>
                <Input id="price" type="number" min="0" step="10000" placeholder="например, 300000" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Высота проёма (см)</Label>
                  <Input id="bedrooms" type="number" min="0" placeholder="например, 280" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Количество пролётов</Label>
                  <Input id="bathrooms" type="number" min="0" step="1" placeholder="например, 2" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="squareFeet">Ширина лестницы (см)</Label>
                  <Input id="squareFeet" type="number" min="0" placeholder="например, 100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="railing">Ограждение</Label>
                  <Select>
                    <SelectTrigger id="railing">
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wood">Деревянное</SelectItem>
                      <SelectItem value="glass">Стеклянное</SelectItem>
                      <SelectItem value="forged">Кованое</SelectItem>
                      <SelectItem value="steel">Нержавейка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Пожелания к проекту</Label>
                <Textarea id="description" placeholder="Опишите, какую лестницу вы хотите: стиль, цвет, особенности..." className="min-h-[150px]" required />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Адрес монтажа</CardTitle>
                <CardDescription>Куда приехать на замер и установку?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="street">Адрес объекта</Label>
                  <Input id="street" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Район/Область</Label>
                    <Input id="state" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>Как с вами связаться?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Контактное лицо</Label>
                  <Input id="contactName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Телефон</Label>
                  <Input id="contactPhone" type="tel" required />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Фотографии проёма</CardTitle>
              <CardDescription>Загрузите фото места установки или пример желаемой лестницы (до 10 штук)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label
                  htmlFor="images"
                  className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-input bg-muted/50 px-4 py-5 text-center"
                >
                  <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Нажмите для загрузки</span> или перетащите файлы
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG или WEBP (макс. 5 МБ на изображение)</p>
                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                    disabled={images.length >= 10}
                  />
                </Label>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Фото ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-1 top-1 rounded-full bg-background p-1 shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Опции лестницы</CardTitle>
              <CardDescription>Выберите то, что хотите добавить в проект</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-pool"
                    checked={amenities.pool}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, pool: !!checked })}
                  />
                  <label
                    htmlFor="amenity-pool"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Подсветка ступеней
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-garage"
                    checked={amenities.garage}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, garage: !!checked })}
                  />
                  <label
                    htmlFor="amenity-garage"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Забежные ступени
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-garden"
                    checked={amenities.garden}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, garden: !!checked })}
                  />
                  <label
                    htmlFor="amenity-garden"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Тонировка/покраска
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-balcony"
                    checked={amenities.balcony}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, balcony: !!checked })}
                  />
                  <label
                    htmlFor="amenity-balcony"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Стеклянное ограждение
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-elevator"
                    checked={amenities.elevator}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, elevator: !!checked })}
                  />
                  <label
                    htmlFor="amenity-elevator"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Кованые элементы
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-ac"
                    checked={amenities.airConditioning}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, airConditioning: !!checked })}
                  />
                  <label
                    htmlFor="amenity-ac"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Противоскользящее покрытие
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-furnished"
                    checked={amenities.furnished}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, furnished: !!checked })}
                  />
                  <label
                    htmlFor="amenity-furnished"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Замер мастером
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-pet"
                    checked={amenities.petFriendly}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, petFriendly: !!checked })}
                  />
                  <label
                    htmlFor="amenity-pet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Монтаж под ключ
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Link to="/properties">
            <Button variant="outline">Отмена</Button>
          </Link>
          <Button type="submit">Отправить заявку</Button>
        </div>
      </form>
    </div>
  )
}