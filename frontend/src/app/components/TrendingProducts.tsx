import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Nicense Raw Hazelnuts",
    description: "Premium Whole Natural Hazelnuts – Unroasted & Unsalted",
    price: "45.78 د.إ",
    image: "/product-hero-1/product-drynuts-front.png",
    color: "#daaa41",
  },
  {
    id: 2,
    name: "Nicense Freeze Dried Mulberry",
    description: "Antioxidant-Rich Crunchy Super Fruit Snack | Premium Quality",
    price: "107.45 د.إ",
    image: "/product-hero-2/product-dryfriuts-front.png",
    color: "#D41C5E",
  },
  {
    id: 3,
    name: "Premium Safawi Dates",
    description: "Natural Safawi Khajoor from Saudi Arabia | Soft & Rich Dates",
    price: "35.39 د.إ",
    image: "/product-hero-1/product-drynuts-front.png",
    color: "#A1B932",
  },
  {
    id: 4,
    name: "Premium Mabroom Dates",
    description: "Natural Mabroom Khajoor from Saudi Arabia | Soft Chewy Dates",
    price: "44.23 د.إ",
    image: "/product-hero-2/product-dryfriuts-front.png",
    color: "#daaa41",
  },
  {
    id: 5,
    name: "Blueberry Coated Chocolate",
    description: "Crunchy Candy Shell with Creamy White Chocolate & Real Blueberry Centre",
    price: "53.99 د.إ",
    image: "/product-hero-1/product-drynuts-front.png",
    color: "#0a1128",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-[#0a1128] mb-4">
            Trending <span className="text-[#D41C5E]">Products</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-[#daaa41]/40"></div>
            <svg className="w-6 h-6 text-[#daaa41]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
            </svg>
            <div className="h-[2px] w-16 bg-[#daaa41]/40"></div>
          </div>
          <p className="text-xl text-[#0a1128]/70 font-medium">Discover our most loved premium snacks.</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: product.color }}
              />

              {/* Product Image */}
              <div className="relative w-48 h-48 mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-out z-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col z-10 w-full">
                <h3 className="text-xl font-bold text-[#0a1128] mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-[#0a1128]/70 mb-6 flex-grow line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <span className="text-2xl font-black text-[#D41C5E]">
                    {product.price}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-[#0a1128] text-white flex items-center justify-center hover:bg-[#D41C5E] transition-colors shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0a1128] text-[#0a1128] font-bold rounded hover:bg-[#0a1128] hover:text-[#daaa41] transition-all duration-300 uppercase tracking-widest text-sm">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
