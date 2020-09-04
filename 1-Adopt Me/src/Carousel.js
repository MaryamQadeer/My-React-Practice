import React from "react";

class Carousel extends React.Component{
    state ={
        photos :[],
        active:0
    };

    static getDerivedStateFromProps({media}){
        let photos = ['http://placeorgi.com/600/600'];
        if(media.length){
            photos =media.map(({large}) => large);
            console.log(media);
        }
        return {photos};
    }

    handleIndexClick = (event) => {
        this.setState({
            active: +event.target.dataset.index, // + is unary, shorthand for converting string coming from DOM into number, you could've also used parseInt or something, Note that everything coming from DOM is of type string
        })
    }

    render(){
        const {photos, active} = this.state;
        return (
            <div className="carousel">
            <img src={photos[active]} alt="animal" />
            <div className="carousel-smaller">
                {
                    photos.map((photo,index) => (
                        // eslint-disable-next-line
                        <img 
                            key={photo} 
                            onClick={this.handleIndexClick} 
                            data-index = {index}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))
                }
            </div>
        </div>
        );
    }
}

export default Carousel;