import Select from 'react-select';

// A fix for react-select in flexbox design.
const styles = {
  container: (base) => ({
    ...base,
    flex: 1,
    width: '200px',
  }),
};

const Dropdown = ({ onChange, options, value }) => (
  <Select styles={styles} value={value} onChange={onChange} options={options} />
);

export { Dropdown };
