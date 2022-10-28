import React from 'react'
import './App.css'
import { useRef, useState, useMemo } from 'react'
import { nanoid } from 'nanoid'
import profileImg from "./assets/profile-img-3.jpg"
import { ImagesData } from './component/imagesdata'
 function App() {

  // create a useref called nameOfClass to get the div with a class name of 'object'
  const nameOfClass = useRef(null)
  const itemClass = useRef([])
  const rotateValue = useRef(0)
  const counter = useRef(0)


  function clickPrev(e) {

    if (counter.current >= -1) {
      counter.current -= 1
    }
    if (counter.current === -1) {

      counter.current = 14
    }

    if (e.target.id === "prev" || e.target.id === "p-btn") {
      rotateValue.current += 24
      // get the div whose ref is nameOfClass and add to its existing transform property another rotateY(-60deg)

      nameOfClass.current.style.transform = `rotateY(${rotateValue.current}deg)`
      itemClass.current.forEach((item) => {
        return item.style.transform = `rotateY(${-rotateValue.current}deg)`
      })
    }
    console.log(counter.current, window.innerWidth)
  }


  function clickNext(e) {


    if (counter.current >= -1) {
      counter.current += 1
    }
    if (e.target.id === "next" || e.target.id === "n-btn") {
      rotateValue.current -= 24
      // get the div whose ref is nameOfClass and add to its existing transform property another rotateY(-60deg)

      nameOfClass.current.style.transform = `rotateY(${rotateValue.current}deg)`
      itemClass.current.forEach((item) => {
        return item.style.transform = `rotateY(${-rotateValue.current}deg)`
      })
      if (counter.current === 15) {
        counter.current = 0
      }
    }
    console.log(counter.current)
  }
  console.log(counter.current)
  const divs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]
  return (
    <div>
  
      <div className="container">
        <div className="carousel" ref={nameOfClass}>

          {divs.map((item, index) => {
            return <div key={nanoid(35)} className={item}>
              <div ref={(element) => itemClass.current.push(element)} className="item">
                {<img loading="lazy" src={ImagesData[index].image} />}
              </div>

            </div>
          })}


        </div>
      </div>
      <div className='wrap-btn'>
      <div id="p-btn" onClick={clickPrev} className="prev-btn">
        <i id="prev" className="fas fa-chevron-left"></i>
      </div>
      <div  id="n-btn" onClick={clickNext} className="next-btn">
        <i id="next" className="fas fa-chevron-right"></i>
      </div>
      </div>
    </div>
  )
}
export default React.memo(App)