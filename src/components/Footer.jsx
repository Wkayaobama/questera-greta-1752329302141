import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Venue Information</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1" />
              <div>
                <p>15-17 bis, rue François-Versonnex</p>
                <p>1207 Genève</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+41 764 40 65 63</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:scrutchfield@wisekey.com" className="hover:text-gray-300 transition-colors">
                scrutchfield@wisekey.com
              </a>
            </div>
            <div className="flex items-center">
              <FaGlobe className="mr-2" />
              <a href="http://www.platform.wise.art.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                www.platform.wise.art.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} L'Atelier du Temps. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;