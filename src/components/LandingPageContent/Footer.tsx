
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-20 w-screen">
        {/* Changed background to solid black */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Column 1 - Company Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">MockSkills</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
               Is a platform that enhances interview skills and career growth with AI mock interviews, career guidance, CollabZone, BattleGround, and personalized learning paths.
               </p>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong>Contact Us:</strong>{" "}
                  <a
                      href="tel:+918521553798"
                      className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                      +91 8521553798 
                  </a>

                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@mockskills.com"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    contact@mockskills.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 800010, Bihar, India
                </p>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Quick Links
              </h2>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-info-circle mr-2"></i> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-concierge-bell mr-2"></i> Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-bullseye mr-2"></i> Client Success
                    Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-lightbulb mr-2"></i> Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-phone-alt mr-2"></i> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Resources
              </h2>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-question-circle mr-2"></i> FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-headset mr-2"></i> Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-file-contract mr-2"></i> Terms of
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-shield-alt mr-2"></i> Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-life-ring mr-2"></i> Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Stay Connected */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest interview content
                insights and updates.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-facebook-f fa-2x hover:text-blue-700"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-twitter fa-2x hover:bg-slate-500"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in fa-2x hover:text-blue-500"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-youtube fa-2x hover:text-red-500"></i>
                </a>
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Enter your email"
                />
                <button className="mt-4 py-3 bg-teal-400 rounded-md text-white hover:bg-teal-500 transition-all duration-300 shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500">
            <p>
              © 2024 All Rights Reserved by{" "}
              <span className="text-teal-400 font-semibold">MockSkills</span>
            </p>
            <p className="mt-2 text-sm">
              Follow us on social media for more updates and success stories.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
