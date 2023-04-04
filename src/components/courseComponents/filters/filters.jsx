import React, {useState} from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
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
        {filters.map((filter) => (
          <Radio
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
// const removeFilter = (filter) => {
//   const result = activeArray.filter((word) => word === filter);
//    setActiveArray([result]);
// };

// {filters.map((filter) => (
//   <span
//     onClick={() => setActiveArray([...activeArray, filter])}
//     className="flex items-center bg-[#e4e4e4] px-2 py-1 rounded-[4px] m-2 cursor-pointer border border-black font-semibold
//     shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
//   >
//     {filter} {`(${Math.floor(Math.random() * 10)})`}
//     {activeArray.includes(filter) && (
//       <CloseRoundedIcon
//         onClick={removeFilter(filter)}
//         className=" ml-1 hover:text-red-600"
//       />
//     )}
//   </span>
// ))}
