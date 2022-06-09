import { Fragment, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';

export default {
  title: 'Hook/useDebounce',
};

const companies = [
  'Apple',
  'Samsung',
  'Naver',
  'Kakao',
  'Line',
  'Woowahan',
  'Airbnb',
];

export const Default = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useDebounce(
    () => {
      if (value === '') setResult([]);
      else {
        setResult(
          companies.filter((company) =>
            company.toLowerCase().includes(value.toLowerCase()),
          ),
        );
      }
    },
    300,
    [value],
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        {result.map((item) => (
          <Fragment key={item}>{item}</Fragment>
        ))}
      </div>
    </div>
  );
};
