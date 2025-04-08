
import { VideoInfo, VideoFormat, downloadVideo } from "@/utils/videoUtils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Film, 
  Music, 
  Clock, 
  User
} from "lucide-react";
import { useState } from "react";

interface VideoPreviewProps {
  videoInfo: VideoInfo;
}

const VideoPreview = ({ videoInfo }: VideoPreviewProps) => {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  
  const handleDownload = async (format: VideoFormat) => {
    setIsDownloading(format.quality);
    try {
      await downloadVideo(format);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsDownloading(null);
    }
  };

  if (!videoInfo) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="relative">
        <img 
          src={videoInfo.thumbnail} 
          alt={videoInfo.title}
          className="w-full h-48 sm:h-64 object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h2 className="text-white font-bold text-xl line-clamp-2">{videoInfo.title}</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <User className="h-4 w-4 mr-1" />
            <span>{videoInfo.author}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{videoInfo.duration}</span>
          </div>
        </div>

        <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Available formats:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {videoInfo.formats.map((format) => (
            <Card 
              key={`${format.quality}-${format.format}`}
              className={`p-4 cursor-pointer border-2 transition-all ${
                selectedFormat === `${format.quality}-${format.format}` 
                  ? 'border-primary' 
                  : 'border-border hover:border-gray-300 dark:hover:border-gray-700'
              }`}
              onClick={() => setSelectedFormat(`${format.quality}-${format.format}`)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {format.format === "mp3" ? (
                    <Music className="h-5 w-5 mr-2 text-accent" />
                  ) : (
                    <Film className="h-5 w-5 mr-2 text-primary" />
                  )}
                  <div>
                    <p className="font-medium">{format.quality}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {format.format.toUpperCase()} • {format.size}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(format);
                  }}
                  disabled={isDownloading !== null}
                  className="button-gradient"
                >
                  {isDownloading === format.quality ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </span>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
