import VideosCard from "./VideosCard";
import videos from "@/database/videos.json";

const VideoList = () => {
  return (
    <div className='grid grid-cols-1 gap-y-20'>
      {videos.map((video) => (
        <VideosCard
          key={video.id}
          title={video.title}
          url={video.url}
          description={video.description}
          director={video.director}
          editor={video.editor}
          colorGrading={video.color_grading}
          talent={video.talent}
          category={video.category}
        />
      ))}
    </div>
  );
};

export default VideoList;
