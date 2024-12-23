import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom pertama - Informasi Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  // href="mailto:your.email@example.com"
                  className="hover:text-blue-400"
                >
                  Email: asepnurdin1902@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6282219845594"
                  className="hover:text-blue-400"
                  target="_blank"
                >
                  Phone: +62 822 984 5594
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom kedua - Media Sosial */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/asep-nurdin-079b3626b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-400 hover:text-blue-600 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/asep1902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-400 hover:text-gray-400 text-3xl"
              >
                <FaGithub />
              </a>
              <a
                // href="mailto:your.email@example.com"
                className="text-white-400 hover:text-blue-500 text-3xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/aseppnrdn/"
                className="text-white-400 hover:text-red-500 text-3xl"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100061405787813&mibextid=ZbWKwL"
                className="text-white-400 hover:text-blue-500 text-3xl"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Kolom ketiga - Hak Cipta */}
          <div className="text-center md:text-right">
            <p>&copy; 2024 Asep Nurdin.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
