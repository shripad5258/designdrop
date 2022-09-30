import React from "react";

//Images
import ImgA from "../../../../img/articles pages/understanding construction drw/A-ar1.png"
import ImgB from "../../../../img/articles pages/understanding construction drw/B-ar1.png"
import ImgC from "../../../../img/articles pages/understanding construction drw/C-ar1.png"
import ImgD from "../../../../img/articles pages/understanding construction drw/D-ar1.png"
import ImgE from "../../../../img/articles pages/understanding construction drw/E-ar1.png"
import ImgF from "../../../../img/articles pages/understanding construction drw/F-ar1.png"

//CSS
import "./article.css";

function ArticleOne() {
  return (
    <>
      <div className="container">
        <div className="home-Article">
          <div className="home-Article-container">
            <div className="HMArticleTitle">
              <h1>Understanding Construction Drawings</h1>
            </div>
            <p>
              A construction drawing is an umbrella term for the technical
              drawings which provide graphic representation and guidelines
              for...
            </p>
         
            <img  src={ImgA} alt="" />
            <p>
              Construction drawings can appear to be quite daunting when you
              don’t know how to read them, and to an untrained eye, can merely
              seem like an incoherent jumble of lines and shapes. However,
              understanding their intricacies is an integral part of being an
              architect as these drawings can tell you a lot about a project
              once you learn how to read and produce them. …And so in this
              article we provide you with all the information you need to
              understand their complexities, and how to best communicate your
              project through the various different types of drawings. Firstly…
            </p>
            <h2>What are construction drawings?</h2>
            <p>
              A construction drawing is an umbrella term for the technical
              drawings (usually a whole set of drawings) which provide graphic
              representation and guidelines for a project that is to be built.{" "}
            </p>
            <p>
              These drawings are a part of the information prepared by the
              design team in order to provide important instructions regarding
              the proposed building and how it is to be constructed.
            </p>
            <p>
              These drawings are not sketches or crudely dimensioned layouts,
              they are technical and refined information documents that ensure
              the smooth running of your project.{" "}
            </p>
            <p>
              We must make sure that these drawings provide precise dimensions,
              details, and are according to the specification document (the
              document which entails pre-agreed workmanship, materials, etc.)
              included in the contract.
            </p>
            <img src={ImgB} alt="" />
            <p>
              Depending on the author of the project and the project itself, the
              specifications might be detailed in the construction drawings as
              well. But it is better practice to keep these documents separate
              to avoid disparity between the two if a change is made in one
              document but the other is not updated.
            </p>
            <p>
              As mentioned previously, these drawings usually consist of a set
              that includes all floor plans, multiple sections, elevations,
              structural drawings, etc. A detailed overview of these drawings is
              also discussed further down in this article
            </p>
            <p>
              Another area to keep in mind is that many people get confused when
              they hear the words “Blueprint” or “Architectural drawing” but all
              of these are a part of construction drawings.{" "}
            </p>
            <p>
              In practice, many people may also refer to each separate drawing
              on its own. For example, instead of saying construction drawing,
              one may simply call it a plan or an elevation depending on which
              drawing they are talking about.
            </p>
            <h2>What is the importance of construction drawings?</h2>
            <p>
              Those of us that have not experienced these drawing before, tend
              to overlook the significance of the information they provide even
              though they are an imperative part of a project. As these drawings
              can essentially be seen as a map that will lead the construction
              team towards a successful completion of the project.
            </p>
            <p>
              Construction drawings must be concise and well-thought-out, as
              they are not only used as a guide for the construction process but
              also have legal significance. They are included in the
              construction contract and tender documents, which makes them a
              vitally important part of the agreement between the construction
              company/contractor and the client.
            </p>
            <p>
              Overall, it is quite clear that construction drawings are integral
              to our project as they provide the contractor with all the
              information that may be required on-site. They also provide the
              client with a realistic depiction of what the finished product
              will look like and ensure smooth execution of the design.
            </p>
            <img src={ImgC} alt="" />
            <h2>How are the drawings made?</h2>
            <p>
              With the advent of time, architecture has changed and so have the
              methods of its creations. Until the late 1980s, most construction
              drawings were handmade but digital drafting became pervasive in
              the industry over the next few years.
            </p>
            <p>
              Nowadays, handmade drawings are rare and most people prefer to
              make these drawing through some digital software such as AutoCAD,
              REVIT or Rhino etc.
            </p>
            <p>But are all construction drawings made by architects?</p>
            <p>
              While an architect may have enough expertise to create not only
              the architectural drawings (plans, sections, etc.) but also the
              structural and mechanical (plumbing/electrical) drawings.
            </p>
            <p>
              This mostly happens in small-scale projects and sometimes external
              specialists are hired. This point is elaborated on below in
              detail.
            </p>
            <h2>Types of construction drawings</h2>
            <p>
              As mentioned previously, generally when we talk about construction
              drawings, we are referring to plans, sections, window/door
              schedules, and elevations. But sometimes they may include
              information drawings for other professionals such as electrical
              plans, plumbing plans, and HVAC (heating, ventilation, and air
              conditioning) system details.
            </p>
            <p>
              The exact constituents of the set vary from project to project,
              depending upon the scale and specifications along with the needs
              of the client. In most small-scale projects, an architect will
              provide the client with all the drawings required for the
              construction process.
            </p>
            <p>
              But again, for complex, large-scale, or specialty projects (e.g.
              large-scale industries, airports, malls, etc.), an increased level
              of information and external collaboration with specialists might
              be required.
            </p>
            <p>
              Hence, the construction documents on these projects will include
              drawings that might not be required in other projects.
            </p>
            <p>
              For ease of understanding, we can divide these drawings into the
              following categories:\
            </p>
            <p>
              {" "}
              Architectural Drawings: Site plan, Floor plans, Sections,
              Elevations, Furniture, plan, Door and Window schedule.
            </p>
            <p>
              Structural Drawings:Structural Plans, Detail drawings of specific
              parts (joints, connections, foundation, floor, etc.). Roof and
              ceiling plans.{" "}
            </p>
            <p>
              Mechanical Drawings: Include information on mechanical work i.e.
              plumbing and drainage, HVAC, fire protection, transportation
              (elevator, lifts, escalators)
            </p>
            <p>
              Keep in mind that these categories are not concrete and may
              overlap at various points if the project requires and/or permits.{" "}
            </p>
            <img src={ImgD} alt="" />
            <h2>What can you learn from a construction drawing?</h2>
            <p>
              Each construction drawing has its purpose and specific information
              that it contains, but one thing they all have in common is that
              they are all made to scale. For example, 1/12” = 1’ (one-twelfth
              on an inch on paper will be equal to one foot in reality).
            </p>
            <p>
              The following portion elaborates upon the information that
              different construction drawings impart:
            </p>
            <h2>Site Plan </h2>
            <p>
              Put simply, a “Plan” refers to the top view of an object, and so a
              Site Plan is essentially a map that shows the extent of the
              proposed site.
            </p>
            <p>
              This is created after a careful and thorough analysis of the
              proposed area for construction and the new construction is marked
              on it, this provides the contractor with the exact dimensions,
              access point, greenery, existing physical features, and other
              details of the site.
            </p>
            <p>
              More often than not, the neighboring context is also included in
              the site plan as it might impact the functionality of the proposed
              structure/building.
            </p>
            <h2>Floor Plan </h2>
            <p>
              Floor plans are a fully detailed 2D map of the inside of the
              building. Each floor within a building has its separate floor
              plans e.g. a building with 3 floors will have 3 distinct floor
              plans with each detailing the components of its respective floor.
              This plan also provides distinction between each room i.e. it
              provides annotations for the bathrooms, bedrooms, kitchen, etc.
            </p>
            <p>
              Floor plans provide dimensions of walls, rooms, openings (doors,
              windows), as well as furniture placement and the specific
              materials that should be used.
            </p>
            <img src={ImgE} alt="" />
            <h2>Elevations </h2>
            <p>
              Elevations are essentially an overview of the exterior faces of
              the building. They are drawn as a vertical depiction of the
              building if one was to look straight at it from the outside. Most
              buildings have 4 elevations that portray the exterior from all
              four directions.
            </p>
            <p>
              Elevations are useful because not only do they specify the
              material and height details for the building but also provide an
              insight into what the building might look like from the outside,
              once it is constructed.
            </p>
            <h2>Sections </h2>
            <p>
              Sections are extremely useful drawings especially when you are
              dealing with multiple floors in a project. They are similar to
              elevations in that they both present a vertical depiction of the
              project but as the name might suggest, sections only show a
              specific part instead the entire view.
            </p>
            <p>
              A section provides us with the hidden details that can be seen if
              the building were to be cut vertically. These details are
              incredibly important as they provide us with the detailing of the
              structure of the buildings (position of lintels, foundation,
              columns, beams, etc.).
            </p>
            <h2>Detail Drawings </h2>
            <p>
              Since mostly the scale of the drawings is so small that it is
              impossible to see the minute detailing in various components. For
              this purpose, blown-up drawings of just those specific components
              are provided to the contractor and builders.
            </p>
            <p>
              The scale is much bigger than that of regular drawings (for
              example it might be around 1”= 10’ while normal drawings are
              around 1”= 20’ or 1”=40’ (for commercial projects).
            </p>
            <p>
              The details include those of window and door frames, stairs,
              connections, and joints between two components. Detail drawings
              vary in every project depending on what that project includes.
            </p>
            <p>
              For example, the details of a spiral staircase will be completely
              different from those of a normal staircase.
            </p>
            <img src={ImgF} alt="" />
            <h2>Window/Door Schedule</h2>
            <p>
              Since a building will have multiple windows and doors of different
              sizes in various locations around the house, a window and door
              schedule is attached with the other blueprints.
            </p>
            <p>
              A schedule will include in detail, all specifications regarding
              each window or door that is to be installed in the building.
              Window schedules are usually longer than door schedules and
              include details about the size, kind, location, materiality, etc.
              of the window.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleOne;
