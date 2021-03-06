import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';

class Home extends React.Component {
  // state = {
  //   images: [],
  // };
  // componentDidMount() {
  //   const randomPageNumber = Math.ceil(Math.random() * 20);
  //   axios
  //     .get(
  //       'https://picsum.photos/v2/list?page=' + randomPageNumber + '&limit=12'
  //     )
  //     .then((res) => {
  //       this.setState({ images: res.data });
  //     });
  // }

  render() {
    const images = this.props.images;
    const imagesList = images.length ? (
      images.map((image) => {
        const regex = /^.+((id)\/\d+)/gm;
        return (
          <div className="col s12 m6 l4" key={image.id}>
            <Link to={'/' + image.id}>
              <div className="card">
                <div className="card-image">
                  <img
                    src={
                      image.download_url.match(regex).toString() +
                      '/480/400.jpg'
                    }
                    alt={image.url}
                  />
                </div>
                <div className="card-content">
                  <p>Author: {image.author}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div className="center">No images available</div>
    );
    return (
      <div>
        <div className="container">
          <h4 className="center">Random Images</h4>
          <div className="row">{imagesList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Home);
