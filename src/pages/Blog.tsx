import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Customer Service',
    excerpt: 'Discover how AI is revolutionizing customer service and what it means for businesses.',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: 2,
    title: 'Implementing Virtual Receptionists',
    excerpt: 'Learn about the benefits and implementation process of AI-powered virtual receptionists.',
    date: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: 3,
    title: 'Social Media Automation Best Practices',
    excerpt: 'Tips and strategies for effective social media automation without losing the human touch.',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
];

export function Blog() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest trends and insights in AI and automation
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-base font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}