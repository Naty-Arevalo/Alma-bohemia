
import { Link } from 'react-router-dom'

const CategoriesHome = () => {

  const linksCategory = [
    {name:"Velas", to:"/Producto1", img:"/img/VELAS.jpg"},
    {name:"Difusores", to:"/Difusores", img:"/img/difusor-vidrio.jpg"},
    {name:"Home Spray", to:"/HomeSpray", img:"/img/difusor-auto.jpg"},
    {name:"Complementos", to:"/Complementos", img:"/img/bandejas-ceramica.jpg"},
  ]
  return (
    <section className="section-categories ">
        <h1 className="font-titulo">Nuestras Categorias</h1>
        <div  className="categories-content">
        {linksCategory.map((linkCateg,i)=>(
          
            <Link className='category-card' to={linkCateg.to} key={i}>
              <img 
                src={linkCateg.img}
                alt={linkCateg.name} 
                className='img-categories'
                />
                <h2 className='text-category'>{linkCateg.name}</h2>
            </Link>
           
        ))}
       </div> 
          
       
      </section>
  )
}

export default CategoriesHome




{/* <Link to="/Producto1" className="category-card">
            <img
              src="/img/VELAS.jpg"
              alt="img-categories"
              className="img-categories"
            />
            <h2 className="text-category">Velas</h2>
          </Link>
          <Link to="/Difusores" className="category-card">
            <img
              src="/img/difusor-vidrio.jpg"
              alt="img-categories"
              className="img-categories"
            />
            <h2 className="text-category">Difusores</h2>
          </Link>
          <Link to="/HomeSpray" className="category-card">
            <img
              src="/img/difusor-auto.jpg"
              alt="img-categories"
              className="img-categories"
            />
            <h2 className="text-category">Home Spray</h2>
          </Link>
          <Link to="/Complementos" className="category-card">
            <img
              src="/img/bandejas-ceramica.jpg"
              alt="img-categories"
              className="img-categories"
            />
            <h2 className="text-category">Complementos</h2>
          </Link> */}