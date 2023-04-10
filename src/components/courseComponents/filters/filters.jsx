import React, {useState} from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import Radio from '../radio/radio';

const filters = [
  'All',
  'Offline Class',
  'Tickets',
  'Stocks',
  'Swing Trading',
  'Technical Analysis For Stock',
  'Stock Recomendation',
  'Intraday',
  'Swing Trading Recomendation',
  'Options Trading',
];

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(['All']);

  const handleChange = (e) => {
    if (activeFilter.includes(e.target.value)) {
      setActiveFilter([
        ...activeFilter.filter((active) => active !== e.target.value),
      ]);
    } else {
      setActiveFilter([...activeFilter, e.target.value]);
    }
  };
  return (
    <>
      <div className='flex items-center justify-center p-1 text-xl font-black'>
        <TuneIcon /> <span className='mx-3'>Filters</span>
      </div>
      <hr className='w-full border-t-black' />
      <div className='my-3 w-full'>
        {filters.map((filter, i) => (
          <Radio
            key={i}
            value={filter}
            onChange={handleChange}
            checked={activeFilter.includes(filter) && 'true'}
          />
        ))}
      </div>
    </>
  );
};

export default Filters;
