const Header = () => {
  return (
    <div className="header">

      <div className="logo">Magazines</div>

      <div className="menu">
        <a>Home</a>
        <a>Blog</a>
        <a>Category</a>
        <a>Product</a>
        <a>Login</a>
        <a>Customer</a>
        <span className="cart">🛒 0</span>
      </div>

    </div>
  );
};

export default Header;