import gryffindor from "../images/gryffindor.png";
import slytherin from "../images/slytherin.jpg";
import hufflepuff from "../images/hufflepuff.jpg";
import ravenclaw from "../images/ravenclaw.png";

function HouseBanners() {
  return (
    <div id="house-banner-section">
      <img
        className="banner-img"
        src={gryffindor}
        alt="Gryffindor house banner"
      />

      <img
        className="banner-img"
        src={slytherin}
        alt="Slytherin house banner"
      />

      <img
        className="banner-img"
        src={hufflepuff}
        alt="Hufflepuff house banner"
      />

      <img
        className="banner-img"
        src={ravenclaw}
        alt="Ravenclaw house banner"
      />
    </div>
  );
}

export default HouseBanners;
