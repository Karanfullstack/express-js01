const App = () => {
  const [products, setProducts] = React.useState([]);
  const [form, setForm] = React.useState({});
  React.useEffect(() => {
    fetchProducts();
  }, []);
  function fetchProducts() {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.price) {
      return;
    }
    fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => () => {
        fetchProducts();
      });
  };

  const updateForm = (event, field) => {
    setForm({...form, [field]: event.target.value});
  };

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Add a product</li>
        </ul>
        <div className="card-body">
          <form onClick={handelSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={() => updateForm(event, "name")}
              placeholder="Product name.."
              className="form-control mt-3"
            />

            <input
              type="text"
              value={form.price}
              onChange={() => updateForm(event, "price")}
              placeholder="Product price.."
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>

      <ul className="list-group mt-5 ">
        {products.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div>
                <strong>{item.name} </strong>
                Price: {item.price}
              </div>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
