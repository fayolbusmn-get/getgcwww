export default function CompanyWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950 text-white shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400">
              GETENET TAMIRU GC
            </h1>
            <p className="text-sm text-gray-300">General Contractor & Water Works</p>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              GETENET TAMIRU GENERAL CONTRACTOR & WATER WORKS
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Getenet Tamiru General Contractor & Water Works provides professional general construction, road construction, building projects, water supply systems, irrigation works, drainage systems, and infrastructure development services across Ethiopia with quality, integrity, and engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Contact Getenet Tamiru General Contractor
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition">
                View Projects
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 shadow-2xl border border-white/20">
            <img
              src="/mnt/data/coverpage.png"
              alt="Construction"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Company"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Located in Nifas Silk-Lafto Sub-City, Nifas Silk-Lafto Sub-City, Addis Ababa, Ethiopia, Getenet Tamiru General Contractor & Water Works is committed to delivering reliable and high-quality construction and water infrastructure services. Our company specializes in building construction, road projects, water works, irrigation systems, drainage installations, and infrastructure development. We combine skilled manpower, modern engineering practices, and strong project management to deliver sustainable and cost-effective solutions for public and private sector clients throughout Ethiopia.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-3xl font-bold text-blue-700">15+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-3xl font-bold text-blue-700">250+</h3>
                <p className="text-gray-600 mt-2">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive solutions tailored for businesses,
            industries, and communities.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Building Construction',
              desc: 'Residential, commercial, governmental, and industrial building construction services across Ethiopia.',
            },
            {
              title: 'Industrial Investment',
              desc: 'Industrial investment, warehouse development, and factory construction solutions.',
            },
            {
              title: 'Road & Infrastructure',
              desc: 'Road construction, bridge works, drainage systems, and civil infrastructure development.',
            },
            {
              title: 'Real Estate Development',
              desc: 'Modern real estate and residential development solutions.',
            },
            {
              title: 'Machinery Rental',
              desc: 'Heavy machinery rental and construction equipment support services.',
            },
            {
              title: 'Engineering Consultancy',
              desc: 'Professional engineering consultancy, supervision, and project management services.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Featured Construction & Water Works Projects</h2>
          <p className="text-lg text-gray-600">
            Our successful building, road, water works, and infrastructure projects in Ethiopia.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
          ].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl bg-white">
              <img src={img} alt="Project" className="h-72 w-full object-cover hover:scale-105 transition duration-300" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project {index + 1}</h3>
                <p className="text-gray-600">
                  High-quality construction and water works project completed with professional engineering standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>

            <div className="space-y-6">
              {[
                'Experienced and qualified engineering professionals',
                'High-quality construction and water works standards',
                'Timely project completion and reliable execution',
                'Modern construction technology and equipment',
                'Reliable, transparent, and client-focused service',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop"
              alt="Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-blue-100 mb-12">
            We are ready to deliver reliable construction and water works services throughout Ethiopia. Contact us today for partnership, consultation, and project implementation.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Office</h3>
              <p className="text-blue-100">Addis Ababa, Ethiopia</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Phone</h3>
              <p className="text-blue-100">0911234404</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <p className="text-blue-100">getnettamiru87@gmail.com</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3">Services</h3>
              <p className="text-blue-100">Building, Roads, Water Works & Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-10 px-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
        <p>
          © 2026 Getenet Tamiru General Contractor & Water Works. Professional Construction & Infrastructure Services in Ethiopia.
        </p>
                <div className="mt-4 text-sm text-gray-500">
            Nifas Silk-Lafto Sub-City, Addis Ababa, Ethiopia | Phone: 0911234404
          </div>
        </div>
      </footer>
    </div>
  )
}
