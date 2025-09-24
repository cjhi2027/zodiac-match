import BirthYearInput from '../BirthYearInput';
import { useState } from 'react';

export default function BirthYearInputExample() {
  const [year, setYear] = useState('1990');
  
  return (
    <div className="max-w-md mx-auto p-4">
      <BirthYearInput
        value={year}
        onChange={setYear}
        title="내 생년월일"
      />
    </div>
  );
}