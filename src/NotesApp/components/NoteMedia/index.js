import "./styles.css";

const NoteMedia = (props) => {
  const { note } = props;

  const isVideo = (url) => {
    const videoExtensions = ["mp4", "3gp", "ogg"];
    const urlExtension = url.split(".").pop();
    return videoExtensions.includes(urlExtension);
  };

  const isImage = (url) => {
    const imageExtensions = ["png", "jpg", "jpeg", "gif"];
    const urlExtension = url.split(".").pop();
    return imageExtensions.includes(urlExtension);
  };

  return (
    <div className="media-container">
      {isVideo(note.mediaLink) ? (
        <video controls width={300} height={400}>
          <source src={note.mediaLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : isImage(note.mediaLink) ? (
        <img src={note.mediaLink} alt={note.title} />
      ) : (
        <p>Unknown media type!</p>
      )}
    </div>
  );
};

export default NoteMedia;
