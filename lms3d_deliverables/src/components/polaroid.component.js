import slideData from '../js/services/carousel_data.json'
import Carousel from 'react-bootstrap/Carousel'

const Polaroid = () => {
  const { slides } = slideData
  return (
    <div className="p-2 mt-4 rounded col-8 col-md-12 col-lg-11 mx-auto polaroid text-primary text-center bg-light">
      <Carousel>
        {slides.map((slide) => {
          const { id, alt, picture, caption } = slide
          return (
            <Carousel.Item key={id}>
              <img className="d-block w-100" src={picture} alt={alt} />
              <div className="polaroid-caption">{caption}</div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Polaroid
