import { Link, useParams } from 'react-router-dom'
import {
  categoryMeta,
  getProductsByCategory,
  isProductCategory,
  type ProductCategory,
} from '../data/products'
import { store } from '../data/store'
import './Products.css'
import './Home.css'
import './About.css'

export function Products() {
  const { category } = useParams()
  const active =
    category && isProductCategory(category) ? (category as ProductCategory) : null
  const list = getProductsByCategory(active)
  const title = active ? categoryMeta[active].label : 'All products'
  const description = active
    ? categoryMeta[active].description
    : 'Browse medicines, OTC, wellness, Ayurvedic, cosmetics, and surgical items available at our Kanpur store.'

  return (
    <>
      <section className="page-hero">
        <div className="container fade-up">
          <p className="eyebrow">Products</p>
          <h1>{title}</h1>
          <p className="section-copy" style={{ marginTop: '0.85rem' }}>
            {description}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="catalog-filters" role="tablist" aria-label="Product categories">
            <Link
              className={`filter-chip ${!active ? 'is-active' : ''}`}
              to="/products"
            >
              All
            </Link>
            {store.categories.map((item) => (
              <Link
                key={item.slug}
                className={`filter-chip ${active === item.slug ? 'is-active' : ''}`}
                to={`/products/${item.slug}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="product-grid">
            {list.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-card-top">
                  <span className="product-cat">
                    {categoryMeta[product.category].label}
                  </span>
                  <h3>
                    {product.name}
                    {product.strength ? ` ${product.strength}` : ''}
                  </h3>
                  <p>{product.form}</p>
                </div>
                <div className="product-card-bottom">
                  <p>
                    <strong>Use:</strong> {product.use}
                  </p>
                  <a
                    className="btn btn-secondary product-ask"
                    href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
                      `Hi, is ${product.name}${product.strength ? ` ${product.strength}` : ''} available at Davaindia Chaitanya Vihar, Kanpur?`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="section-copy">No products found in this category yet.</p>
          )}

          <p className="catalog-note">
            Product names are based on public Davaindia listings and store materials. Stock and
            MRP may vary — call or WhatsApp the Kanpur store to confirm availability. Prescription
            medicines are dispensed as per applicable regulations.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Compare &amp; save</p>
          <h2 className="section-title">Typical savings by category</h2>
          <div className="savings-table-wrap">
            <table className="savings-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Davaindia avg.</th>
                  <th>Market avg.</th>
                  <th>You save</th>
                </tr>
              </thead>
              <tbody>
                {store.savings.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>{row.dava}</td>
                    <td>{row.market}</td>
                    <td className="save">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
            <a className="btn btn-primary" href={`tel:${store.phone}`}>
              Call {store.phoneDisplay}
            </a>
            <Link className="btn btn-secondary" to="/contact">
              Store directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
