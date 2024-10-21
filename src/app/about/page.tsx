import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='relative pt-10 ml-10 group'>
      <input
        type='text'
        placeholder='this'
        className='border-b-2 border-white placeholder-transparent transition-all group-hover:border-red-400 outline-none peer'
      />
      <label className='absolute left-0 transition-all peer-placeholder-shown:text-base text-xs peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 -translate-y-3 peer-focus:text-xs'>
        Name
      </label>

      <button className='w-24 p-2 bg-orange-500 rounded-full transition-all group-hover:bg-red-400'>
        Send
      </button>
    </div>
  );
};

export default page;
