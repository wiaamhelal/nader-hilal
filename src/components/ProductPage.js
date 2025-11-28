import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProductPage = () => {
  return (
    <Main className="container">
      <div className=" mt-5 pt-4 pb-4">
        <Link className="home-link">Home Page | Interior Design Work |</Link>{" "}
        <span className="small-title">
          Ultra-exclusive luxury residence interior design in Doha – Villa
          Project
        </span>
      </div>
      <div className="holder row">
        <img
          className="col-md-8"
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <div className="col-md-4">
          <h2 className="title">
            Ultra-exclusive luxury residence interior design in Doha – Villa
            Project
          </h2>
          <div className="desc-holder">
            <p className="desc">
              The Doha villa unfolds like a calm composition, where light
              settles gently on stone and metal. Algedra forms the interior
              around surfaces that speak softly yet carry presence, bringing the
              home a sense of stillness supported by a signature marble
              foundation. The reception majlis introduces this atmosphere with
              tall stone walls rising in steady rhythm. Extended seating
              stretches across the room, accompanied by a marble table that
              reflects a warm glow across a statement stone surface. Above, a
              flowing ceiling feature adds a subtle drift of movement, guiding
              the eye toward a soft metallic detail. Through artisanal interior
              detailing for Doha villas, space gains a quiet distinction held by
              a high-fashion stone centerpiece. The family living area gently
              shifts into a more intimate mood. Long sofas trace the room’s
              outline, resting on a patterned rug placed beneath a signature
              marble platform. Daylight moves across the furniture with an airy
              calm, settling into folds of fabric that echo the rhythm of a soft
              layered textile. With luxury spatial planning concepts for Gulf
              residences, the room carries clarity without force, supported by a
              high-fashion fabric ensemble. In the bedrooms, the atmosphere
              becomes even softer. Headboards rise in smooth lines behind each
              bed, paired with long curtains that float toward the floor in a
              calm sweep surrounding a signature fabric backdrop. The master
              suite deepens this quiet rhythm. Warm lighting glides across
              mirrored wardrobes and polished stone, gathering around a soft
              glass detail that anchors the space with gentle presence. The
              dining room gathers its character through contrast and reflection.
              A marble table stands at the center, its veining drifting beneath
              the light like brushstrokes across a high-fashion marble plane.
              Above it, an artistic lighting piece sends a gentle shimmer across
              mirrored geometric shapes, giving the setting depth around a
              signature geometric panel. Through premium marble and lighting
              design solutions in Qatar, the room gains a subtle drama focused
              on a soft reflective structure. The bathrooms move toward deeper
              tonal notes. Dark stone, metal trims and vertical lighting meet in
              quiet harmony, shaping a space centered on a high-fashion stone
              vanity. Each surface holds its own voice, allowing the room to
              rest in a calm dialogue around a signature metal fixture. Across
              the villa, Algedra uses stone, metal, glass and light to form
              interiors with rare softness. Every room moves with quiet rhythm,
              anchored not by volume but by a high-fashion architectural
              element. Contact us to talk for the best interior design projects
              for your Qatar villa For Doha villas shaped with rare materials
              and soft high-fashion interiors, contact Algedra for a private
              consultation. Begin your project with Algedra today. Frequently
              Asked Questions 1. What defines this villa’s interior character?
              The interplay of marble, metal and soft lighting arranged around a
              high-fashion central feature. 2. Does Algedra design exclusive
              villas in Qatar? Yes, including full concept development supported
              by a soft architectural framework. 3. Where are the materials
              sourced? From international suppliers selected for a
              high-fashioned material finish. 4. Does Algedra manage the full
              project process? Yes, from drawings to site supervision guided by
              a soft execution plan. 5. Does Algedra offer custom furniture and
              joinery? Yes, designed to align with a signature interior
              requirement.
            </p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
          alt=""
        />
      </div>
    </Main>
  );
};
const Main = styled.div`
  min-height: 100vh;
  & .home-link {
    color: #b89564;
    font-size: 14px;
  }
  & .small-title {
    color: rgb(205 192 177);
    font-size: 14px;
    margin-left: 5px;
  }
  & .holder {
    & img {
      max-width: 100%;
      height: fit-content;
    }
    & .title {
      color: #b89564;
      margin-bottom: 15px;
    }
    & .desc {
      color: rgb(205 192 177);
      line-height: 1.7;
    }
  }
  & .desc-holder {
    max-height: 310px;
    overflow: auto;
  }

  & .img-container {
    display: grid;
    // grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: 40px;
    gap: 10px;
    & img {
      max-width: 100%;
      border: 1px solid #b89564;
    }
  }
`;
export default ProductPage;
