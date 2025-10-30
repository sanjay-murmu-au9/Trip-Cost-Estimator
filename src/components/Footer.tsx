import { Mail, ExternalLink } from "lucide-react";
import { useContactModal } from '@/contexts/ContactModalContext'

export const Footer = () => {
  const { openContactModal } = useContactModal()

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Links & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">For Travelers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/cost-guide" className="text-muted-foreground hover:text-primary transition-colors">Complete Cost Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trip Calculator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Currency Converter</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-primary">For Bloggers & Partners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => openContactModal()}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  Partnership Inquiries
                </button>
              </li>
              <li>
                <span className="text-muted-foreground text-xs">
                  Travel bloggers: Feel free to link to our calculator!
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-xs">
                  Embed widget available on request
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Official Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.myswitzerland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  Switzerland Tourism
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.vfsglobal.ch/switzerland/india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  Visa Information
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Switzerland Trip Cost Calculator. Made with ❤️ for Indian travelers.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Free to use • Share freely • Link back appreciated
          </p>
        </div>
      </div>
    </footer>
  );
};