// FeaturedTopicsPage.js

import React from 'react';

const FeaturedTopicsPage = () => {
  // Sample data for featured topics
  const featuredCategories = [
    {
      id: 1,
      title: 'Development',
      subcategories: ['Web Development', 'Mobile Development', 'Game Development'],
    },
    {
      id: 2,
      title: 'Business',
      subcategories: ['Entrepreneurship', 'Marketing', 'Finance'],
    },
    {
      id: 3,
      title: 'IT & Software',
      subcategories: ['Networking', 'Operating Systems', 'Security'],
    },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Topics</h1>
      <div className="flex justify-between">
        {featuredCategories.map(category => (
          <div key={category.id} className="w-1/3">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul>
              {category.subcategories.map(subcategory => (
                <li key={subcategory}>
                  <a href="#" className="text-blue-600 hover:underline">{subcategory}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTopicsPage;
