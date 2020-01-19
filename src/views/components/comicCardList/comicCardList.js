import React, { useEffect } from "react";
import { connect } from "react-redux";
import ComicCard from "./comicCard/comicCard";
import { getComic } from "../../../redux/effects";

const ComicCardList = props => {
  useEffect(() => {
    props.getComics();
  }, []);
  let result;
  if (props.comics.length > 0) {
    result = props.comics.map((c, i) => {
      console.log(c.thumbnail);
      return (
        <ComicCard
          key={i}
          title={c.title}
          image={c.thumbnail.path + `.${c.thumbnail.extension}`}
          description={c.description}
          auther="no"
        ></ComicCard>
      );
    });
  }
  return <div className="row">{result}</div>;
};

const mapStateToProps = state => {
  return {
    comics: state.comics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getComics: () => dispatch(getComic())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicCardList);
