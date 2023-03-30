import { useState } from 'react';

const Categories = () => {
  const [checking, setChecking] = useState(false);

  const handleClick = () => {
    setChecking(true);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Check status</button>
      {' '}
      {checking && (<span>Checking status</span>)}
    </>
  );
};

export default Categories;
