import Image from "next/image";

type Testimonial = {
  name: string;
  title: string;
  image: string;
  text: string;
};

const BLUR =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="; // tiny 1x1 transparent placeholder

export default function ReviewCs() {
  const testimonials: Testimonial[] = [
    {
      name: "Grace Hall",
      title: "Founder",
      image:
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0",
      text:
        "I was hesitant to switch to solar, but this company made it easy and affordable.",
    },
    {
      name: "Connor Walker",
      title: "Programmer",
      image:
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0",
      text:
        "I've already seen a significant decrease in my energy bills since going solar with them.",
    },
    {
      name: "Kira Wood",
      title: "Customer",
      image:
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0",
      text:
        "Their team was professional, knowledgeable, and provided excellent customer service.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Testimonials Section */}
      <div className="bg-blue-50 px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h5 className="mb-2 text-sm font-semibold uppercase text-blue-900">
            Our Testimonials
          </h5>
          <h2 className="mb-10 text-2xl font-bold text-gray-800 md:text-3xl">
            What Our Customers <span className="whitespace-nowrap">Say</span>
          </h2>

          <ul className="grid gap-6 md:grid-cols-3" role="list">
            {testimonials.map((t, i) => (
              <li
                key={i}
                className="relative z-10 rounded-lg bg-white p-6 text-left shadow-sm ring-1 ring-gray-200"
              >
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white ring-1 ring-gray-200" />

                <p className="mb-6 text-sm text-gray-600">{t.text}</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src={t.image}
                      alt={`${t.name} — ${t.title}`}
                      fill
                      sizes="40px"
                      className="rounded-full object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR}
                      // Works even if images.domains/remotePatterns is not set:
                      unoptimized
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Carousel dots (static visual) */}
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-blue-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
