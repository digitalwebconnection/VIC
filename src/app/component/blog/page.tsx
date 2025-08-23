export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Solar Energy in 2024",
      excerpt: "Discover the latest trends and innovations shaping the solar industry this year.",
      date: "March 15, 2024",
      slug: "future-of-solar-2024",
    },
    {
      title: "How to Choose the Right Solar Battery",
      excerpt: "A comprehensive guide to selecting the perfect battery system for your solar setup.",
      date: "March 10, 2024",
      slug: "choosing-solar-battery",
    },
    {
      title: "Commercial Solar: ROI and Benefits",
      excerpt: "Understanding the financial benefits of commercial solar installations.",
      date: "March 5, 2024",
      slug: "commercial-solar-roi",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Solar Energy Blog</h1>
          <p className="text-xl text-center mb-12 text-green-600">
            Stay updated with the latest in solar technology and sustainability
          </p>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-green-600">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href={`/blog/${post.slug}`} className="text-green-600 hover:text-green-700 font-medium">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
