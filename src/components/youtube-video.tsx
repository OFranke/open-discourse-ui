import React from "react";
import ReactPlayer from "react-player/lazy";
interface YoutubeVideo {
  url: string;
}
export const YoutubeVideo: React.FC<YoutubeVideo> = ({ url }) => {
  return <ReactPlayer url={url} controls={true} />;
};
