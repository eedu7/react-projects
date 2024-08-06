import PropTypes from 'prop-types';
import { ListItem } from "./ui/ListItem";

export const Heading = ({ name, drinkAlternate, category, area }) => {
  return (
    <div>
        <h1 className="text-3xl my-4 text-gray-800 font-bold">{ name }</h1>
        <div className="p-4 bg-pink-200 rounded-xl">
            <h2 className="text-xl font-bold">Recipe Data</h2>
            <ol className="m-2">
                <ListItem name="Drink Alternate" value={drinkAlternate ? drinkAlternate : "Vegetarian"} />
                <ListItem name="Category" value={category ? category : "Vegetarian"} />
                <ListItem name="Area" value={area ? area : "Italian"} />
            </ol>
        </div>
    </div>
  )
}

Heading.propTypes = {
    name: PropTypes.string.isRequired,
    drinkAlternate: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string

};