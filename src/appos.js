const Home = () => {
  return (
    <div>
      <header>
        <div className="background-filter"></div>
        <Nav />
      </header>
      <main>
        <h2 className="featured">Featured Products</h2>
        <Category categoryList={categoryList} filterCategory={filterCategory} />
        <Products items={items} />
      </main>
    </div>
  );
};
