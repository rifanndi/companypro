import Abut from '../img/Abut.png';

const About =() => {
  return (
    <>
      <div style={{ marginTop: '4rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={Abut} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              Welcome to Java Charcoal, where our passion for grilling meets the finest charcoal
              briquettes in Indonesia. With a commitment to quality and excellence, we take pride in
              delivering an exceptional grilling experience for enthusiasts and professionals alike.
              Our journey began with the goal of providing you with the epitome of charcoal perfection.
            </p>
            <p className="main-p">
              At Java Charcoal, we believe in the art of grilling as a culinary adventure. Our
              carefully crafted charcoal briquettes are designed to enhance the flavors of your
              favorite dishes, creating memorable moments with family and friends. We invite you to
              explore the rich tradition of grilling with Java Charcoal and elevate your barbecue
              experience to new heights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
