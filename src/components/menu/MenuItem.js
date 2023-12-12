import React from "react";

const MenuItem = () => {
  return (
    <div className="p-4 text-center bg-gray-200 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-black/25">
      <div className="text-center">
        <img src="/pizza.png" alt="pizza" className="block mx-auto max-h-24" />
      </div>

      <h4 className="my-3 text-xl font-semibold">Pepperoni Pizza</h4>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        hic voluptas consectetur fugit odit velit quisquam libero numquam est
        suscipit.
      </p>
      <button className="px-8 py-2 mt-4 text-white rounded-full bg-primary">
        Add to cart $16
      </button>
    </div>
  );
};

export default MenuItem;
