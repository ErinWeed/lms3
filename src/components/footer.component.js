const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-light">
      <div className="row justify-content-around align-items-center container-lg mx-auto">
        <blockquote className=" blockquote col-9 col-xl-3 border py-3 my-3 rounded text-center">
          {' '}
          <p>“To plant a garden is to believe in tomorrow.” </p>
          <footer className="blockquote-footer">Audrey Hepburn</footer>
        </blockquote>
        <div className="col-11 col-xl-8 row justify-content-center">
          <div className="col-10 col-md-4">
            <h5 className="py-2">Favorite Books</h5>
            <ul>
              <li>
                <a
                  className="link-light"
                  href="https://shop.floretflowers.com/collections/books/products/cut-flower-garden-signed-copy"
                  target="_blank"
                >
                  Cut Flower Garden
                </a>
              </li>
              <li>
                <a
                  href="https://thegardenersworkshop.com/product/book-cool-flowers-by-lisa-mason-ziegler/"
                  className="link-light"
                  target="_blank"
                >
                  Cool Flowers
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Complete-Gardener-Monty-Don/dp/1405342706/ref=sr_1_20"
                  className="link-light"
                  target="_blank"
                >
                  The Complete Gardener
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/DIY-Hydroponic-Gardens-Inexpensive-Growing/dp/0760357595/ref=sr_1_3"
                  className="link-light"
                  target="_blank"
                >
                  DIY Hydroponic Gardens
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Aquaponic-Gardening-Step-Step-Vegetables/dp/086571701X/ref=sr_1_3"
                  className="link-light"
                  target="_blank"
                >
                  Aquaponic Gardening
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10 col-md-4">
            <h5 className="py-2">Local Garden Stores</h5>
            <ul>
              <li>
                <a
                  href="https://www.millcreekgardens.com/"
                  className="link-light"
                  target="_blank"
                >
                  Millcreek Gardens
                </a>
              </li>
              <li>
                <a
                  href="https://glovernursery.com/"
                  className="link-light"
                  target="_blank"
                >
                  Glover Nursery
                </a>
              </li>
              <li>
                <a
                  href="https://www.cactusandtropicals.com/"
                  className="link-light"
                  target="_blank"
                >
                  Cactus &amp; Tropicals
                </a>
              </li>
              <li>
                <a
                  href="https://westerngardens.com/"
                  className="link-light"
                  target="_blank"
                >
                  Western Garden Cetners
                </a>
              </li>
              <li>
                <a
                  href="https://www.moonlightgardensupply.com/"
                  className="link-light"
                  target="_blank"
                >
                  Moonlight Garden Supply
                </a>
              </li>
              <li>
                <a
                  href="https://utahwatergardens.com/"
                  className="link-light"
                  target="_blank"
                >
                  Utah Water Gardens
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10 col-md-4">
            <h5 className="py-2">Garden Inspiration</h5>
            <ul>
              <li>
                <a
                  href="https://www.redbuttegarden.org/"
                  className="link-light"
                  target="_blank"
                >
                  Red Butte Garden
                </a>
              </li>
              <li>
                <a
                  href="https://thanksgivingpoint.org/attractions-tickets/ashton-gardens/"
                  className="link-light"
                  target="_blank"
                >
                  Thanksgiving Point Gardens
                </a>
              </li>
              <li>
                <a
                  href="https://conservationgardenpark.org/"
                  className="link-light"
                  target="_blank"
                >
                  Conservation Garden Park
                </a>
              </li>
              <li>
                <a
                  href="https://www.butchartgardens.com/"
                  className="link-light"
                  target="_blank"
                >
                  Butchart Gardens
                </a>
              </li>
            </ul>
          </div>
          {/*end of row*/}
        </div>
        <p className="text-center py-3">© 2023 Weed Gardens</p>
      </div>
    </footer>
  )
}

export default Footer
