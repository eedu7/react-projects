import PropTypes from 'prop-types';

export const Image = ({ srcURL }) => {
  return (
    <img src={srcURL} alt="" className="rounded-xl w-[780px] h-[480px] object-cover" />
  );
};


Image.propTypes = {
    srcURL: PropTypes.string.isRequired
};