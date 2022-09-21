import React, { useEffect, useState } from 'react'





const News = () => {
  const [movie, setMovie] = useState([]);
  const fetchMovieData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    setMovie(await response.json());


  }
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>List Of Movies</h1>
      </div>
      <div className="container">
        <div className="row" >
          {movie.map((curenEle) => {
            return (

              <div className="col-md-4" key={curenEle.score}>
                <div className="my-3">
                  <div className="card" >
                    <img className="card-img-top" src={curenEle.show.image.original} alt="Card image cap" style={{"height":"250px"}} />
                    <div className="card-body">
                      <h5 className="card-title">{curenEle.show.name}({curenEle.score})</h5>
                      <span className="card-text">{curenEle.show.summary ? curenEle.show.summary.slice(0, 88) : ""}</span>
                      <a href={curenEle.show.url} target="_blank" rel="noreferrer" className="btn-sm btn-dark">Read More</a>

                  <p className="card-text"><small className="text-muted">premiered:{curenEle.show.premiered}</small></p>
             

                    </div>
                  </div>

                </div>
              </div>

            )
          })}

        </div>




      </div>

    </>
  )








}
export default News
