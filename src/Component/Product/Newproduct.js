import React from 'react';

const products = [
  {
    id: 1,
    name: "Professional Pinstripe Blazer",
    category: "Activewear",
    price: 109.99,
    image: "/item/imge/1coll.png"
  },
  {
    id: 2,
    name: "Relaxed Fit Joggers",
    category: "Work &amp",
    price: 250.00,
    image: "/item/imge/2coll.png"
  },
  {
    id: 3,
    name: "Urban Chic Ensemble",
    category: "Evening Dresses",
    price: 224.95,
    image: "/item/imge/3coll.png"
  },
  {
    id: 4,
    name: "Weekend Wanderlust Wardrobe",
    category: "Activewear",
    price: 119.95,
    image: "/item/imge/4coll.png"
  },
];

export default function Product() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif italic text-center mb-12">Most Popular</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative aspect-[3/4] mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-sm text-gray-400">{product.category}</p>
                <h2 className="font-sans text-sm   ">{product.name}</h2>
                <p className="text-gray-500 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}