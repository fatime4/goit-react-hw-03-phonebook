import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';

const filterInputId = nanoid();

const Filter = ({ value, onChange }) => (
  <div className={s.filterBlock}>
    <label htmlFor={filterInputId} className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        id={filterInputId}
        value={value}
        onChange={onChange}
        className={s.input}
      ></input>
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
