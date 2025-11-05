import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/data/menuData";
import { Plus } from "lucide-react";

interface ProductCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export default function ProductCard({ item, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {item.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">₹{item.price}</span>
            <Button
              size="sm"
              onClick={() => onAddToCart(item)}
              className="bg-primary hover:bg-primary/90 shadow-sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
