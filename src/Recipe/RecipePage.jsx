import { Heading } from "./components/Heading"
import { Image } from "./components/Image"

const RecipePage = () => {
  return (
    <main className="w-screen h-screen bg-gray-300 flex justify-center items-center border-4 border-blue-700">
        <div className="bg-gray-50 border-2 border-red-500 p-8 rounded-2xl">
            <Image srcURL="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" />
            <Heading name="Spicy Pizza" drinkAlternate={""} category="Vegetarian" area="Italian"/>
        </div>
    </main>
  )
}

export default RecipePage