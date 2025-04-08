
import { toast } from "sonner";

export interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  formats: VideoFormat[];
}

export interface VideoFormat {
  quality: string;
  format: string;
  size: string;
  url: string;
}

// This is a mock function to simulate fetching video info
export const getVideoInfo = async (url: string): Promise<VideoInfo> => {
  // In a real app, you would make an API call to a backend service here
  // For this demo, we'll return mock data after a delay
  
  try {
    // Validate URL
    if (!isValidVideoUrl(url)) {
      throw new Error("Invalid video URL. Please enter a valid YouTube, TikTok, or other supported platform URL.");
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a mock video ID from the URL
    const videoId = url.split("/").pop() || Math.random().toString(36).substring(2, 8);
    
    // Mock data
    const mockVideoInfo: VideoInfo = {
      id: videoId,
      title: `Sample Video - ${videoId}`,
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "3:45",
      author: "Sample Author",
      formats: [
        { quality: "720p", format: "mp4", size: "24MB", url: "#" },
        { quality: "480p", format: "mp4", size: "16MB", url: "#" },
        { quality: "360p", format: "mp4", size: "12MB", url: "#" },
        { quality: "Audio", format: "mp3", size: "4MB", url: "#" }
      ]
    };

    return mockVideoInfo;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Failed to get video information");
    }
    throw error;
  }
};

// Simulate downloading a video
export const downloadVideo = async (format: VideoFormat) => {
  try {
    toast.info(`Starting download: ${format.quality} ${format.format} (${format.size})`);
    
    // In a real app, this would trigger the actual download
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Download started! Check your downloads folder.");
    
    // In a real implementation, you would redirect to a download URL or use the 
    // browser's download API to start the download
    
  } catch (error) {
    toast.error("Failed to download video");
    console.error("Download error:", error);
  }
};

// Validate if the URL is from a supported video platform
export const isValidVideoUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Basic regex pattern for YouTube, TikTok, and some other common video platforms
  const patterns = [
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i,
    /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+$/i,
    /^(https?:\/\/)?(www\.)?(vimeo\.com)\/.+$/i,
    /^(https?:\/\/)?(www\.)?(dailymotion\.com|dai\.ly)\/.+$/i,
    /^(https?:\/\/)?(www\.)?(facebook\.com)\/.+\/videos\/.+$/i,
    /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+$/i
  ];

  return patterns.some(pattern => pattern.test(url));
};

// List of supported platforms
export const supportedPlatforms = [
  { name: "YouTube", icon: "youtube" },
  { name: "TikTok", icon: "tiktok" },
  { name: "Vimeo", icon: "vimeo" },
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "Twitter", icon: "twitter" },
  { name: "Reddit", icon: "reddit" },
  { name: "Twitch", icon: "twitch" }
];
