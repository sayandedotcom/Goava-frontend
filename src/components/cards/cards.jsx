import {LazyLoadImage} from 'react-lazy-load-image-component';
import {cardItems} from './cardsList';
import Button from '../../components/button/button';

const Cards = () => {
  return (
    <>
      {cardItems.map(({id, image, tags, title, price}) => (
        <div
          key={id}
          className='w-80 rounded-xl bg-[#2c4152] p-3 font-semibold text-zinc-100'>
          <div>
            <LazyLoadImage className='rounded-xl' src={image} effect='blur' />
          </div>
          <div>
            <div className='flex gap-2 p-1'>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className='cursor-pointer rounded-lg bg-slate-800 p-1 text-sm'>
                  {tag}
                </span>
              ))}
            </div>
            <p className='cursor-pointer p-1'>{title}</p>
            <p className='p-1'>{price}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <Button className='rounded-xl' buttonType='inverted'>
              Get Info
            </Button>
            <Button className='rounded-xl' buttonType='blue'>
              Buy
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
