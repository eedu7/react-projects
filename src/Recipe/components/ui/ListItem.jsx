import PropTypes from "prop-types";

export const ListItem = ({ name, value }) => {
  return (
    <>
      <li className="text-md text-gray-700 list-disc mx-8">
        <b className="text-yellow-700">{name}</b>: {value}
      </li>
    </>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};
