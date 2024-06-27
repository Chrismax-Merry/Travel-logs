interface Props {
  src: string;
}

/**
 * 3D 全景照片展示
 * @param param0
 * @returns
 */
export default function PannellumIframe({ src }: Props) {
  return (
    <div className="h-64 md:h-96">
      <iframe
        allowFullScreen
        style={{ borderStyle: "none" }}
        src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${src}`}
      ></iframe>
    </div>
  );
}
