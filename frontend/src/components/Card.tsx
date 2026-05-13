import PageIcon from '../icons/pages-svgrepo-com'
import { useEffect, useRef } from 'react'

interface CardProps {
  size: "sm" | "md" | "lg",
  title: string,
  link: string,
  tags?: string,
  type: string
}

function getYouTubeEmbedUrl(url: string): string {
  // Handles youtu.be/ID and youtube.com/watch?v=ID
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function getTweetId(url: string): string | null {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

function YouTubeEmbed({ url }: { url: string }) {
  const embedUrl = getYouTubeEmbedUrl(url);
  return (
    <iframe
      width="270"
      height="152"
      src={embedUrl}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ borderRadius: "8px", display: "block" }}
    />
  );
}

function TwitterEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script if not already loaded
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => (window as any).twttr?.widgets?.load(ref.current);
      document.body.appendChild(script);
    } else {
      (window as any).twttr?.widgets?.load(ref.current);
    }
  }, [url]);

  return (
    <div ref={ref} style={{ maxWidth: "270px", overflow: "hidden" }}>
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={url} />
      </blockquote>
    </div>
  );
}

const CardStyle: React.CSSProperties = {
  backgroundColor: "#ecf6fd",
  width: "300px",
  height: 'fit-content',
  border: "solid #81A6C6 1px",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  marginTop: "10px",
};
function Card(props: CardProps) {
  return (
    <div style={CardStyle}>
      <div style={{display: "flex"}}>
        <PageIcon width='25px' height='30px'/>
        <p style={{margin: 0, alignItems:'center', display:"flex"}}>{props.title}</p>
      </div>
      {props.type==="youtube" && <YouTubeEmbed url={props.link}/>}
      {props.type==="twitter" && <TwitterEmbed url={props.link}/>}
      <p>{props.link}</p>
      <p>{props.type}</p>
    </div>
  )
}

export { Card }