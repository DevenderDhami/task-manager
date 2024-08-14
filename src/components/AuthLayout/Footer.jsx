import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className='bg-blue-100 py-3 text-center'>
      <p className='text-blue-600'>
        &copy; {currentYear} TodoOP. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
