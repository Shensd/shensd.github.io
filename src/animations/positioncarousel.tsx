import React from 'react'

import './positioncarousel.css';

type CarouselParams = {
    preface : string,
    titles : string[]
}

type CarouselState = {
    title : string,
    position: number,
    animation: string
}

enum animation {
    in = "transition-in",
    out = "transition-out"
}

class PositionCarousel extends React.Component<CarouselParams, CarouselState> {

    tick() {

        this.setState({
            animation : animation.out
        });

        setTimeout(()=> {
            this.setState({
                title : this.props.titles[(this.state.position)],
                position : (this.state.position+1) % this.props.titles.length
            });
    
            this.setState({
                animation : animation.in
            });
        }, 1000)
    }

    componentWillMount() {
        this.setState({
            title : this.props.titles[0],
            position : 1,
            animation: animation.out
        });

        this.tick();
    }

    componentDidMount() {
        setInterval(() => this.tick(), 3000);
    }

    render() {
        return (
            <div className='position-carousel'>
                <h2>{this.props.preface}</h2><h2 className={this.state.animation}>{this.state.title}</h2>
            </div>
        )
    }
}

export default PositionCarousel;