import "./ContentImage.css";

interface ContentImageProps {
  src: string;
}

const ContentImage = ({ src }: ContentImageProps) => (
  <img className="content-image" alt="" src={src} />
);

export default ContentImage;
