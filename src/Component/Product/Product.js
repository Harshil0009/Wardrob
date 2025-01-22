import React from 'react';

const products = [
  {
    id: 1,
    name: "Timeless Classic Collection",
    category: "Work &amp",
    price: 124.9,
    image: "/item/imge/1coll.png",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "emerald", "red", "white"],
  },
  {
    id: 2,
    name: "Bohemian Rhapsody Attire",
    category: "Casual",
    price: 145.5,
    image: "/item/imge/2coll.png",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "emerald", "red"],
  },
  {
    id: 3,
    name: "Midnight Gala Maxi Dress",
    category: "Evening Dresses",
    price: 175.0,
    image: "/item/imge/3coll.png",
    sizes: ["L", "M", "S", "XS"],
    colors: ["black", "emerald", "red", "white"],
  },
  {
    id: 4,
    name: "Power Suit Ensemble",
    category: "Casual",
    price: 125.5,
    image: "/item/imge/4coll.png",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "emerald", "red", "white"],
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
                <p className="text-sm text-gray-500">{product.category}</p>
                <h2 className="font-serif text-lg">{product.name}</h2>
                <p className="text-gray-900">${product.price.toFixed(2)}</p>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="h-8 w-8 rounded-none border border-gray-300 hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border border-gray-200 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}