import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "The Future of Solar Energy: 2024 Trends and Innovations",
      content: `
        <p>The solar energy industry continues to evolve at a rapid pace, with 2024 marking a pivotal year for technological breakthroughs and market expansion. As we look toward the future, several key trends are shaping the renewable energy landscape.</p>
        
        <h2>Perovskite Solar Cells: The Next Generation</h2>
        <p>One of the most exciting developments in solar technology is the advancement of perovskite solar cells. These next-generation photovoltaic devices promise higher efficiency rates and lower manufacturing costs compared to traditional silicon cells.</p>
        
        <p>Recent laboratory tests have shown perovskite cells achieving efficiency rates of over 25%, with some tandem configurations reaching even higher percentages. What makes this particularly exciting is the potential for these cells to be produced using simpler, less energy-intensive manufacturing processes.</p>
        
        <h2>Floating Solar Farms</h2>
        <p>Floating photovoltaic (FPV) systems are gaining traction worldwide as a solution to land scarcity issues. These innovative installations not only generate clean energy but also help reduce water evaporation and improve water quality by limiting algae growth.</p>
        
        <p>Countries like China, Japan, and the Netherlands are leading the way in floating solar deployment, with some installations covering hundreds of acres of water surface.</p>
        
        <h2>Energy Storage Integration</h2>
        <p>The integration of advanced battery storage systems with solar installations is becoming increasingly sophisticated. New lithium-ion technologies and emerging alternatives like solid-state batteries are making solar-plus-storage systems more viable for both residential and commercial applications.</p>
        
        <h2>Smart Grid Integration</h2>
        <p>As solar adoption grows, the integration with smart grid technologies becomes crucial. Advanced inverters, AI-powered energy management systems, and vehicle-to-grid (V2G) technologies are creating a more flexible and resilient energy infrastructure.</p>
        
        <p>These innovations are not just improving efficiency; they're fundamentally changing how we think about energy generation, storage, and distribution. The future of solar energy is bright, and 2024 is just the beginning of this exciting transformation.</p>
      `,
      image: "/placeholder.svg?height=400&width=800&text=Solar+Innovation",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      category: "Technology",
      readTime: "8 min read",
      tags: ["Solar Technology", "Innovation", "Perovskite", "Floating Solar", "Energy Storage"],
    },
  }

  return posts[id as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/solar-blog"
            className="bg-[#1f5495] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-95 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/solar-blog"
          className="text-[#1f5495] font-semibold hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-[#1FA75B] text-white px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-gray-500">Share:</span>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[#1f5495] rounded-full flex items-center justify-center text-white font-bold text-xl">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 text-sm">
                Dr. Sarah Chen is a leading researcher in renewable energy technologies with over 15 years of experience
                in solar energy systems. She holds a Ph.D. in Materials Science and has published numerous papers on
                photovoltaic innovations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1f5495] to-[#070E8B] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
          <p className="text-blue-100 mb-6">
            Calculate your potential savings and see how solar energy can benefit your home or business.
          </p>
          <Link
            href="/solar-calculator"
            className="bg-[#FF6A00] text-white px-8 py-3 rounded-full font-semibold hover:brightness-95 transition-all inline-block"
          >
            Get Your Solar Quote
          </Link>
        </div>
      </article>
    </div>
  )
}
