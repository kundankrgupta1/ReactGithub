import './Restaurants.css'

function Pagination({current, onChange, total}) {
  let page = [];
  for(let i=1; i<=total; i++){
    page.push(i);
  }
  
  return (
  <div data-testid = "page-container">
    {page.map((num, index)=> (
      <button key={index} onClick={()=> onChange(num)} className={num === current ? 'active' : null}>{num}</button>
    ))}
  </div>
 
  );
}

export default Pagination;
