import React, { useState, useEffect } from 'react';
import './AddProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

export default function Products() {
  SwiperCore.use([Autoplay]);

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Initialize with existing products
    setProducts([
      {
        id: 1,
        name: 'Chocolate Cone Ice-Cream',
        price: '4.99 - 10.99',
        image: 'image/product-1.png',
      },
      {
        id: 2,
        name: 'ButterScotch Cup Ice-Cream',
        price: '4.99 - 10.99',
        image: 'image/product-2.png',
      },
      // ... add other existing products
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
      );
      setEditingProduct(null);
    } else {
      const productToAdd = {
        id: products.length + 1,
        ...newProduct,
      };
      setProducts([...products, productToAdd]);
    }
    setNewProduct({ name: '', price: '', image: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Add/Update/Delete <span>Products</span>
      </h1>

      {/* Add/Edit Product Form */}
      <form onSubmit={handleAddProduct} className="add-product-form">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price Range"
          required
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <button type="submit" className="btn">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="box">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className="price">${product.price}</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button type="button" className="btn">
                    add to cart
                  </button>
                  <div className="product-actions">
                    <button
                      type="button"
                      onClick={() => handleEditProduct(product)}
                      className="edit-btn"
                      aria-label="Edit Product"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="delete-btn"
                      aria-label="delete product"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
