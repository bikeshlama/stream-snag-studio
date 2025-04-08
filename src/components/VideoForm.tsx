
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getVideoInfo, isValidVideoUrl } from "@/utils/videoUtils";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

interface VideoFormProps {
  onVideoInfoReceived: (videoInfo: any) => void;
}

const VideoForm = ({ onVideoInfoReceived }: VideoFormProps) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    if (!isValidVideoUrl(url)) {
      toast.error("Invalid video URL. Please enter a valid YouTube, TikTok, or other supported platform URL.");
      return;
    }

    try {
      setIsLoading(true);
      const videoInfo = await getVideoInfo(url);
      onVideoInfoReceived(videoInfo);
      toast.success("Video found! Select your preferred format below.");
    } catch (error) {
      console.error("Error fetching video:", error);
      toast.error(error instanceof Error ? error.message : "Failed to get video information");
      onVideoInfoReceived(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your video URL here (YouTube, TikTok, etc.)"
          className="flex-1 h-14 px-6 rounded-lg border-2 border-input shadow-sm focus:border-primary transition-all duration-200"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          className="h-14 px-8 button-gradient font-medium rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <>
              Download <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default VideoForm;
