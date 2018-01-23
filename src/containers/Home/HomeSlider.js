import React from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component {
  render(){
    let opts = {continuous: true,auto:3000};
    return <div>
      <ReactSwipe className="carousel" swipeOptions={opts}>
        {this.props.lists.map((item,index)=>(
          <div key={index}>
            <a href={item.url}>
              <img src={item.photoUrl}/>
            </a>
          </div>
        ))}
      </ReactSwipe>
    </div>
  }
}
