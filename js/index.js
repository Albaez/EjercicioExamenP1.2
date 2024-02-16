fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const lista = document.getElementById("lista");
    data.forEach((producto) => {
      lista.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>                           
                                <p class="card-text">${producto.description}</p>
                                <p class="card-text">Precio: $${producto.price}</p>
                                <p class="card-text">Categoría: ${producto.category}</p>                          
                        </div>
                    </div>
                </div>
            `;
    });
  })
  .catch((error) => console.error("Error al cargar los productos:", error));
