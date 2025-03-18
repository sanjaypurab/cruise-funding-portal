
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post</h1>
        <p className="text-xl text-gray-600">You are viewing post with ID: {id}</p>
      </div>
    </div>
  );
};

export default BlogPost;
