import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();

    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans});
    }

    render() {

        const image = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img    key={image.id}
                        src={image.urls.regular} 
                        alt={image.alt_description}
                        ref={this.imageRef}
                />
            </div>
        );
    }

}

export default ImageCard; 