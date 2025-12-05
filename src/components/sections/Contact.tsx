import { CONTACT_INFO } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#fbfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact <span className="text-amber-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Get in touch with us for orders and inquiries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions or special requests? We'd love to hear from you! Reach out to us
                through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-black mb-1">{info.title}</h4>
                    <div className="text-gray-700">
                      {Array.isArray(info.content) ? (
                        info.content.map((line, idx) => (
                          <p key={idx}>
                            {line}
                            {idx < info.content.length - 1 && <br />}
                          </p>
                        ))
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us A Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none bg-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none bg-white"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
