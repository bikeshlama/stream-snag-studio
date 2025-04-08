
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Download, Sparkle } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  // Ensure theme toggle works correctly after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo - Left Side with animation */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <Download className="h-6 w-6 mr-2 text-primary group-hover:rotate-6 transition-all duration-300" />
            <span className="font-bold text-xl text-gradient relative overflow-hidden">
              VideoSnag
              <span className="absolute top-0 right-0">
                <Sparkle className="h-4 w-4 text-yellow-400 animate-pulse" />
              </span>
            </span>
          </Link>
        </div>

        {/* Navigation - Center, now with more space and animations */}
        <nav className="hidden md:flex items-center justify-center space-x-12">
          <Link 
            to="/affiliate" 
            className="text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors group-hover:text-primary">Affiliate</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            to="/blogs" 
            className="text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors group-hover:text-primary">Blogs</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            to="/donations" 
            className="text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors group-hover:text-primary">Donations</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </nav>

        {/* Mobile menu - Shown on smaller screens */}
        {isMobile && (
          <nav className="flex md:hidden justify-center space-x-4">
            <Link to="/affiliate" className="text-xs font-medium hover:text-primary transition-colors">
              Affiliate
            </Link>
            <Link to="/blogs" className="text-xs font-medium hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link to="/donations" className="text-xs font-medium hover:text-primary transition-colors">
              Donations
            </Link>
          </nav>
        )}

        {/* Theme Toggle - Right Side with animation */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                {theme === "light" ? (
                  <Moon className="h-5 w-5 transition-transform duration-500 rotate-0 hover:rotate-12" />
                ) : (
                  <Sun className="h-5 w-5 transition-transform duration-500 rotate-0 hover:rotate-90" />
                )}
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
