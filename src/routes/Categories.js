import { useState } from 'react';

const Categories = () => {
  const [checking, setChecking] = useState(false);

  const handleClick = () => {
    setChecking(true);
  };

  return (
    <div className="container mt-24 mx-auto flex flex-col items-center justify-center gap-2">
      <button type="button" className="py-2 px-16 text-white bg-[#0290ff] rounded" onClick={handleClick}>Check status</button>
      {' '}
      {checking && (
        <div className="flex items-center justify-center">
          <span className="text-xl font-semibold text-[#0290ff]">Checking status</span>
          <span className="text-2xl font-semibold text-[#0290ff] animate-bounce">.</span>
          <span className="text-2xl font-semibold text-[#0290ff] animate-bounce animation-delay-75">.</span>
          <span className="text-2xl font-semibold text-[#0290ff] animate-bounce animation-delay-100">.</span>
        </div>
      )}
    </div>
  );
};

export default Categories;
