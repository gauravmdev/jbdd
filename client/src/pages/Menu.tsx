import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { menuCategories, menuItems, MenuItem } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("biryani");
  const { addItem } = useCart();

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Our Menu</h1>
            <p className="text-xl text-muted-foreground">
              Explore our selection of authentic Moghlai cuisine and signature biryanis
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-border sticky top-20 z-40 shadow-sm">
        <div className="container py-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-primary/90 shadow-sm"
                    : "hover:bg-secondary"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              {menuCategories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-muted-foreground mt-2">
              {filteredItems.length} items available
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No items found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
