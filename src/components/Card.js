import AlertDialogSlide from "../components/btnModal"

function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"./img/"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3 text-center" > {/* Centering content */}
        <p className="card-text">
          {props.text}
        </p>
        
       
         <AlertDialogSlide>
         <button className="btn btn-primary" style={{ cursor: "pointer" }}> Detail</button>
         </AlertDialogSlide>
       
      </div>
    </div>
  );
}

export default Card;
