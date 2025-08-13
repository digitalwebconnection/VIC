import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function SolarBlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of Solar Energy: 2024 Trends and Innovations",
    excerpt:
      "Discover the latest breakthroughs in solar technology, from perovskite cells to floating solar farms, and how they're shaping the renewable energy landscape.",
    image: "/FeaturedArticle2.jpg",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    category: "Technology",
    readTime: "8 min read",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "How to Calculate Your Solar ROI: A Complete Guide",
      excerpt:
        "Learn how to determine the return on investment for your solar installation with our step-by-step calculator and real-world examples.",
      image: "/FeaturedArticle1.jpg",
      author: "Mike Johnson",
      date: "December 12, 2024",
      category: "Finance",
      readTime: "6 min read",
    },
    // {
    //   id: 3,
    //   title: "Solar Panel Maintenance: Best Practices for Maximum Efficiency",
    //   excerpt:
    //     "Keep your solar panels performing at their best with these essential maintenance tips and seasonal care guidelines.",
    //   image: "/placeholder.svg?height=300&width=400&text=Solar+Maintenance",
    //   author: "Lisa Rodriguez",
    //   date: "December 10, 2024",
    //   category: "Maintenance",
    //   readTime: "5 min read",
    // },
    // {
    //   id: 4,
    //   title: "Commercial Solar: Why Businesses Are Making the Switch",
    //   excerpt:
    //     "Explore the compelling reasons why more businesses are investing in commercial solar installations and the benefits they're experiencing.",
    //   image: "/placeholder.svg?height=300&width=400&text=Commercial+Solar",
    //   author: "David Park",
    //   date: "December 8, 2024",
    //   category: "Business",
    //   readTime: "7 min read",
    // },
    // {
    //   id: 5,
    //   title: "Solar Battery Storage: Is It Worth the Investment?",
    //   excerpt:
    //     "Analyze the costs and benefits of adding battery storage to your solar system and when it makes financial sense.",
    //   image: "/placeholder.svg?height=300&width=400&text=Solar+Battery",
    //   author: "Emma Thompson",
    //   date: "December 5, 2024",
    //   category: "Technology",
    //   readTime: "6 min read",
    // },
    // {
    //   id: 6,
    //   title: "State Solar Incentives: Maximizing Your Savings in 2024",
    //   excerpt:
    //     "Navigate the complex landscape of federal and state solar incentives to maximize your savings on solar installation.",
    //   image: "/placeholder.svg?height=300&width=400&text=Solar+Incentives",
    //   author: "Robert Kim",
    //   date: "December 3, 2024",
    //   category: "Finance",
    //   readTime: "9 min read",
    // },
    // {
    //   id: 7,
    //   title: "Solar Myths Debunked: Separating Fact from Fiction",
    //   excerpt:
    //     "We tackle the most common misconceptions about solar energy and provide you with the facts you need to make informed decisions.",
    //   image: "/placeholder.svg?height=300&width=400&text=Solar+Myths",
    //   author: "Dr. Sarah Chen",
    //   date: "November 30, 2024",
    //   category: "Education",
    //   readTime: "4 min read",
    // },
    // {
    //   id: 8,
    //   title: "The Environmental Impact of Solar Energy: Beyond Carbon Reduction",
    //   excerpt:
    //     "Explore the comprehensive environmental benefits of solar energy, from water conservation to ecosystem preservation.",
    //   image: "/placeholder.svg?height=300&width=400&text=Solar+Environment",
    //   author: "Green Energy Team",
    //   date: "November 28, 2024",
    //   category: "Environment",
    //   readTime: "7 min read",
    // },
  ]

  const categories = [
    { name: "All", count: 8 },
    { name: "Technology", count: 2 },
    { name: "Finance", count: 2 },
    { name: "Business", count: 1 },
    { name: "Maintenance", count: 1 },
    { name: "Education", count: 1 },
    { name: "Environment", count: 1 },
  ]

  return (
    <div className="-mt-13.5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f5495] to-[#070E8B] text-white py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Energy Blog</h1>
          <p className="text-xl text-blue-100 max-w-7xl mx-auto">
            Stay informed with the latest solar energy news, technology updates, and expert insights to help you make
            the most of your solar investment.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-900 text-white px-2 py-1 rounded text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    <Link
                      href={`/solar-blog/${featuredPost.id}`}
                      className="bg-[#1f5495] text-white px-6 py-2 rounded-full font-semibold hover:brightness-95 transition-all inline-flex items-center gap-2"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">{category.count}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest solar energy insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1f5495] focus:border-transparent text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:brightness-95 transition-all text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-[#1f5495] focus:border-transparent">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        <Link
                          href={`/solar-blog/${post.id}`}
                          className="text-[#1f5495] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                        >
                          Read More <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-[#1f5495] text-white rounded-md text-sm">1</button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}
