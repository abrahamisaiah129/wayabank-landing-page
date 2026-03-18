import "../../../styles/genericjumbotron.scss";


function GenericJumbotron(props) {
  return (
    <div className="about-jumbotron pl-lg-4">
      <div className="mx-auto">
        <div className="pt-4 ml-lg-4 pl-lg-4 row">
          <div
            className="col-md-12 pt-4 pl-lg-4 mt-4 textArea"
            style={{
              backgroundImage: "url(/chat.png)",
              backgroundSize: "300px",
            }}
          >
            <div className="col-lg-12 text-center">
              <h1 className="section-title">{props.titleText}</h1>
              <div className="section-divider" />
              <p
                className="section-subtitle"
                dangerouslySetInnerHTML={{ __html: props.desc }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenericJumbotron;
