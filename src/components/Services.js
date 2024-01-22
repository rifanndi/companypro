import Card from "./Card";

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Products</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Shisha Briquette Charcoal" img="card1.png" text="Cube briquettes made from coconut charcoal are a type of charcoal that is made from the shells of coconuts. The shells are first burned at high temperatures to remove any moisture and impurities, and then the resulting charcoal is compressed into cube-shaped briquettes. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Barbeque Charcoal" img="card2.png" text="A briquette is a compressed block of coal dust or other combustible biomass material such as charcoal…" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Hardwood Lump Charcoal" img="card3.png" text="Hardwood charcoal is our best-selling product. In terms of quality, charcoal made of hardwood…" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
