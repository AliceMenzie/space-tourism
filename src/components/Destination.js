import data from './data/data.json';

export default function Destination() {


  return (
    <div>
      {data.destinations.map((attr) => (
          <div>
              {attr.name}
              {/* <img className="flag" alt='flag' src={attr.images.png}/> */}
              <img className="flag" alt='flag' src={attr.images.webp}/>
              
          </div>
      
      ))}
    </div>
  );
}
