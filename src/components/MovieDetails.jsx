import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();
  console.log(params.movieID);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          "http://www.omdbapi.com/?apikey=a0d093ea&i=" + params.movieID
        );
        if (resp.ok) {
          let data = await resp.json();
          console.log(data);
          setDetails(data);
        } else {
          console.log("error fetching details");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDgwNDU3MTgsImV4cCI6MTY0OTI1NTMxOH0.-tYVF7yz73cX-Gdcvxpqtgp87xlOFTCDOJnSu2DHx7k",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.log("error fetching comments");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    fetchComments();
  }, [params.movieID]);

  return (
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="movie poster" />
          <ul style={{ listStyleType: "none" }}>
            {comments.map((c) => (
              <li className="my-3" key={c._id}>
                {c.comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
