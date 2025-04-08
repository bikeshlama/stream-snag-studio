
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme toggle works correctly after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Download className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-xl text-gradient">VideoSnag</span>
          </Link>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center justify-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/affiliate" className="text-sm font-medium hover:text-primary transition-colors">
            Affiliate
          </Link>
          <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
            Blogs
          </Link>
          <Link to="/donations" className="text-sm font-medium hover:text-primary transition-colors">
            Donations
          </Link>
        </nav>

        {/* Theme Toggle - Right Side */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
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
