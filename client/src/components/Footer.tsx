import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden isolate">
      {/* Top border - explicitly solid */}
      <div className="border-t border-solid border-slate-800/50"></div>
      
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Delhi Darbar" 
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight">Delhi Darbar</h3>
                <p className="text-sm text-gray-400 font-medium">Biryani King of Mumbai</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Serving authentic Moghlai cuisine since 1973. Experience the finest biryani and traditional delicacies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">
                  Find a Store
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">About Us</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">Our Coffee</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">Careers</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Customer Service</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium inline-block">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Separator line */}
        <div className="mt-16 pt-8 border-t border-solid border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {currentYear} Delhi Darbar. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
