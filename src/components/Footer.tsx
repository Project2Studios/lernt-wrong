import { Github, Mail, Heart, BookOpen, Shield, Info } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* About section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                About This Project
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploring the evolution of scientific knowledge by highlighting "facts"
                taught in schools that have since been updated or disproven.
              </p>
            </div>

            {/* Links section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Info className="h-4 w-4" />
                Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  Facts sourced from peer-reviewed research
                </div>
                <div className="text-sm text-muted-foreground">
                  Covering graduation years 1960-present
                </div>
                <div className="text-sm text-muted-foreground">
                  Science evolves, knowledge grows
                </div>
              </div>
            </div>

            {/* Contact section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Get in Touch</h3>
              <div className="flex gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  title="Send feedback"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Feedback</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  title="View source code"
                >
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">Source</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border/30 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} What Did You Learn That Isn't True?</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500" />
              <span>for lifelong learners</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-border/20">
            <p className="text-xs text-muted-foreground/75 text-center leading-relaxed">
              This project highlights the evolution of scientific understanding.
              "Facts" were accurate when taught but have since been updated through new research and discoveries.
              Always consult current scientific literature for the latest information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;