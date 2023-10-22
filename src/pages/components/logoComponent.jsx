import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoComponent() {
  let navigate = useNavigate();
  return (
    <div className='flex items-center gap-3'>
      <div className="w-6 h-6 relative">
        <div className="hexagon !bg-orange-100"></div>
      </div>
      <div className="flex flex-col justify-center items-end mt-5">
        <span className="text-xl font-bold tracking-widest uppercase">
          Zippy Delivery
        </span>
        <span className="text-sm uppercase text-tomato-300 font-semibold">
          Admin
        </span>
      </div>
    </div>
  );
}

export default LogoComponent;
