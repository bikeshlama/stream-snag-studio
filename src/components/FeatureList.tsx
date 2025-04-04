
import { 
  Shield, 
  Zap, 
  CheckCheck, 
  MonitorSmartphone,
  RefreshCw
} from "lucide-react";
import { supportedPlatforms } from "@/utils/videoUtils";

const FeatureList = () => {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Features & Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
          <p className="text-gray-600 dark:text-gray-400">Download videos in seconds with our lightning-fast processing engine.</p>
        </div>
        
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">100% Safe & Secure</h3>
          <p className="text-gray-600 dark:text-gray-400">No registration required. We don't store your videos or personal information.</p>
        </div>
        
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <CheckCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p className="text-gray-600 dark:text-gray-400">Download videos in various formats and qualities, including HD and 4K options.</p>
        </div>
        
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <MonitorSmartphone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multiple Platforms</h3>
          <p className="text-gray-600 dark:text-gray-400">Compatible with major video platforms including YouTube, TikTok, Instagram, and more.</p>
        </div>
        
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <RefreshCw className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Unlimited Downloads</h3>
          <p className="text-gray-600 dark:text-gray-400">No limits on the number of videos you can download. Use our service as much as you need.</p>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Supported Platforms</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {supportedPlatforms.map((platform) => (
            <div 
              key={platform.name}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-900/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">
                <img 
                  src={`https://api.iconify.design/mdi:${platform.icon}.svg?color=%236e66fa`}
                  alt={platform.name}
                  width="24"
                  height="24"
                />
              </div>
              <span className="text-sm font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
