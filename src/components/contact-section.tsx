import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="lg:flex lg:items-start">
          {/* Contact Info */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-blue-700 dark:text-white mb-8 leading-tight">
              Let's get in touch
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6 max-w-md">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-blue-700 dark:text-blue-300 font-medium hover:text-blue-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <a
                  href="mailto:info@x6drinks.com"
                  className="text-blue-700 dark:text-blue-300 font-medium hover:text-blue-500 transition-colors"
                >
                  info@x6drinks.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 md:p-12 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-white mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="w-full h-32 px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  ></textarea>
                </div>
                <Button className="w-full py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
