import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useState } from "react";

export default function Video() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const videoID = useParams().videoID;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const addComment = (e) => {
    e.preventDefault();
    setComments([...comments, { comment: comment, name: name }]);
    setName("");
    setComment("");
  };

  return (
    <>
      <div>
        <YouTube videoId={videoID} opts={opts} />
      </div>
      <div>
        {comments.map((c) => {
          return (
            <div>
              <p>{c.comment}</p>
              <p>{c.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
