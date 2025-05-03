import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">ABOUT NORTHSTAR</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] overflow-hidden rounded-md">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="About our brand"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Northstar began with a simple mission: to create high-quality, stylish clothing that
              empowers individuals to express their unique identity. What started as a small boutique in downtown has
              grown into a global brand recognized for its commitment to quality, sustainability, and innovative design.
            </p>
            <p className="text-gray-700">
              We believe that fashion is more than just clothing—it's a form of self-expression, a statement of values,
              and a celebration of individuality. Every piece in our collection is thoughtfully designed to help you
              look and feel your best, while making a positive impact on the world around us.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">The Founders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((founder) => (
            <div key={founder} className="text-center">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-md">
                <Image
                  src={`/placeholder.svg?height=600&width=400&text=Founder ${founder}`}
                  alt={`Founder ${founder}`}
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg">Founder Name {founder}</h3>
              <p className="text-gray-600 text-sm">
                Co-Founder & {founder === 1 ? "CEO" : founder === 2 ? "Creative Director" : "COO"}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className="relative h-[250px] mb-3 overflow-hidden rounded-md">
                <Image
                  src={`/placeholder.svg?height=500&width=400&text=Team ${index + 1}`}
                  alt={`Team member ${index + 1}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-medium">Team Member {index + 1}</h3>
              <p className="text-gray-600 text-sm">
                {index % 4 === 0
                  ? "Designer"
                  : index % 4 === 1
                    ? "Marketing"
                    : index % 4 === 2
                      ? "Product Manager"
                      : "Developer"}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=${testimonial}`}
                    alt={`Customer ${testimonial}`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Customer Name {testimonial}</h3>
                  <p className="text-gray-600 text-sm">Loyal Customer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "I've been shopping with Northstar for years and I'm always impressed by the quality and style of their
                clothing. The customer service is exceptional and I appreciate their commitment to sustainability."
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
