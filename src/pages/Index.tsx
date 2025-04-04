
import { useState } from "react";
import VideoForm from "@/components/VideoForm";
import VideoPreview from "@/components/VideoPreview";
import FeatureList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { VideoInfo } from "@/utils/videoUtils";

const Index = () => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  const handleVideoInfoReceived = (info: VideoInfo | null) => {
    setVideoInfo(info);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 w-24 h-24 bg-white dark:bg-gray-900 rounded-full mx-auto flex items-center justify-center shadow-lg animate-float">
            <Download className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gradient">
            VideoSnag
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Download videos from YouTube, TikTok, and more with just a few clicks
          </p>
          
          <div className="mb-8">
            <VideoForm onVideoInfoReceived={handleVideoInfoReceived} />
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-2 justify-center">
            <span className="px-2 py-1 bg-white/50 dark:bg-gray-900/50 rounded-full">No registration needed</span>
            <span className="px-2 py-1 bg-white/50 dark:bg-gray-900/50 rounded-full">No watermarks</span>
            <span className="px-2 py-1 bg-white/50 dark:bg-gray-900/50 rounded-full">100% Free</span>
            <span className="px-2 py-1 bg-white/50 dark:bg-gray-900/50 rounded-full">HD Quality</span>
          </div>
        </div>
      </div>

      {/* Video Preview Section (when video is found) */}
      {videoInfo && (
        <div className="px-4 animate-in fade-in duration-300">
          <VideoPreview videoInfo={videoInfo} />
        </div>
      )}

      {/* How it works section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Paste Video URL</h3>
            <p className="text-gray-600 dark:text-gray-400">Copy the URL of the video you want to download and paste it in the input field above.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Select Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose your preferred video quality and format from the available options.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Download</h3>
            <p className="text-gray-600 dark:text-gray-400">Click the download button to save the video directly to your device.</p>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <FeatureList />
      
      {/* FAQ section (simplified) */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Is VideoSnag free to use?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, VideoSnag is completely free to use. There are no hidden fees or subscriptions required.</p>
          </div>
          
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Is it legal to download videos?</h3>
            <p className="text-gray-600 dark:text-gray-400">Downloading videos for personal use is generally acceptable, but redistributing copyrighted content is illegal. Always respect copyright laws and terms of service of the platforms.</p>
          </div>
          
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Which video platforms are supported?</h3>
            <p className="text-gray-600 dark:text-gray-400">VideoSnag supports many popular platforms including YouTube, TikTok, Instagram, Facebook, Twitter, Vimeo and more.</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
