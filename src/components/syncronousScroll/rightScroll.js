import React, { forwardRef } from "react";

const RightScroll = forwardRef(({ handleScroll }, ref) => {
  return (
    <div
      className="right-scroll"
      id="rightscroll"
      ref={ref}
      onScroll={(e) => handleScroll(e.target.id)}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum
        ex, est facilis saepe possimus quidem ipsa totam et ullam suscipit
        inventore, corrupti ducimus provident repellendus eum velit quasi
        pariatur corporis? Voluptatibus a, ipsam unde nisi ab explicabo animi
        veritatis consequuntur sed hic. In dolorem a, veritatis dicta magni
        inventore, at nobis quam aperiam quasi ipsa harum minima sapiente
        architecto laudantium eum officia distinctio sunt voluptate sit quisquam
        cum laborum? Nemo magnam vero sed enim. Id ipsum rem voluptatem quod
        dignissimos aperiam placeat quas, laudantium fugiat assumenda,
        blanditiis, delectus quasi temporibus explicabo nam vel saepe! Nemo
        necessitatibus amet nihil et!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum
        ex, est facilis saepe possimus quidem ipsa totam et ullam suscipit
        inventore, corrupti ducimus provident repellendus eum velit quasi
        pariatur corporis? Voluptatibus a, ipsam unde nisi ab explicabo animi
        veritatis consequuntur sed hic. In dolorem a, veritatis dicta magni
        inventore, at nobis quam aperiam quasi ipsa harum minima sapiente
        architecto laudantium eum officia distinctio sunt voluptate sit quisquam
        cum laborum? Nemo magnam vero sed enim. Id ipsum rem voluptatem quod
        dignissimos aperiam placeat quas, laudantium fugiat assumenda,
        blanditiis, delectus quasi temporibus explicabo nam vel saepe! Nemo
        necessitatibus amet nihil et!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum
        ex, est facilis saepe possimus quidem ipsa totam et ullam suscipit
        inventore, corrupti ducimus provident repellendus eum velit quasi
        pariatur corporis? Voluptatibus a, ipsam unde nisi ab explicabo animi
        veritatis consequuntur sed hic. In dolorem a, veritatis dicta magni
        inventore, at nobis quam aperiam quasi ipsa harum minima sapiente
        architecto laudantium eum officia distinctio sunt voluptate sit quisquam
        cum laborum? Nemo magnam vero sed enim. Id ipsum rem voluptatem quod
        dignissimos aperiam placeat quas, laudantium fugiat assumenda,
        blanditiis, delectus quasi temporibus explicabo nam vel saepe! Nemo
        necessitatibus amet nihil et!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum
        ex, est facilis saepe possimus quidem ipsa totam et ullam suscipit
        inventore, corrupti ducimus provident repellendus eum velit quasi
        pariatur corporis? Voluptatibus a, ipsam unde nisi ab explicabo animi
        veritatis consequuntur sed hic. In dolorem a, veritatis dicta magni
        inventore, at nobis quam aperiam quasi ipsa harum minima sapiente
        architecto laudantium eum officia distinctio sunt voluptate sit quisquam
        cum laborum? Nemo magnam vero sed enim. Id ipsum rem voluptatem quod
        dignissimos aperiam placeat quas, laudantium fugiat assumenda,
        blanditiis, delectus quasi temporibus explicabo nam vel saepe! Nemo
        necessitatibus amet nihil et!
      </div>
    </div>
  );
});

export default RightScroll;
