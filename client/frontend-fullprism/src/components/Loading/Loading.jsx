import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AiOutlineLoading className="animate-spin text-4xl text-gray-600" />
    </div>
  );
};

export default Loading;