import { drizzle } from "drizzle-orm/mysql2";
import { menuCategories, menuItems } from "../drizzle/schema.js";

// Get database connection
const db = drizzle(process.env.DATABASE_URL);

// Menu data from the existing menuData.ts
const categories = [
  { id: 1, name: "Biryani", slug: "biryani", description: "Authentic dum biryani varieties", displayOrder: 1 },
  { id: 2, name: "Tandoori Starters", slug: "tandoori", description: "Grilled delicacies from the tandoor", displayOrder: 2 },
  { id: 3, name: "Chicken Curries", slug: "chicken", description: "Rich and flavorful chicken dishes", displayOrder: 3 },
  { id: 4, name: "Mutton Curries", slug: "mutton", description: "Tender mutton in aromatic gravies", displayOrder: 4 },
  { id: 5, name: "Vegetarian", slug: "vegetarian", description: "Delicious vegetarian options", displayOrder: 5 },
  { id: 6, name: "Breads", slug: "breads", description: "Freshly baked Indian breads", displayOrder: 6 },
];

const items = [
  // Biryani
  { categoryId: 1, name: "Chicken Dum Biryani", description: "Long grained basmati rice with tender chicken pieces", price: 32000, image: "/images/chicken-biryani.jpg", displayOrder: 1 },
  { categoryId: 1, name: "Mutton Dum Biryani", description: "Aromatic biryani with succulent mutton", price: 42000, image: "/images/mutton-biryani.jpg", displayOrder: 2 },
  { categoryId: 1, name: "Chicken Tikka Biryani", description: "Biryani with marinated tandoori chicken", price: 38000, image: "/images/chicken-biryani.jpg", displayOrder: 3 },
  { categoryId: 1, name: "Mutton Kheema Biryani", description: "Minced mutton biryani with aromatic spices", price: 40000, image: "/images/mutton-biryani.jpg", displayOrder: 4 },
  { categoryId: 1, name: "Egg Biryani", description: "Biryani with boiled eggs", price: 25000, image: "/images/biryani-plate.jpg", displayOrder: 5 },
  { categoryId: 1, name: "Veg Biryani", description: "Mixed vegetables in fragrant basmati rice", price: 22000, image: "/images/biryani-plate.jpg", displayOrder: 6 },
  { categoryId: 1, name: "Prawns Biryani", description: "Fresh prawns cooked with basmati rice", price: 48000, image: "/images/biryani-plate.jpg", displayOrder: 7 },
  { categoryId: 1, name: "Fish Biryani", description: "Tender fish pieces in aromatic biryani", price: 45000, image: "/images/biryani-plate.jpg", displayOrder: 8 },
  
  // Tandoori Starters
  { categoryId: 2, name: "Chicken Tikka", description: "Boneless chicken marinated in yogurt and spices", price: 28000, image: "/images/tandoori-kebab.jpg", displayOrder: 1 },
  { categoryId: 2, name: "Tandoori Chicken (Half)", description: "Chicken marinated in tandoori masala", price: 25000, image: "/images/tandoori-kebab.jpg", displayOrder: 2 },
  { categoryId: 2, name: "Tandoori Chicken (Full)", description: "Full chicken marinated in tandoori masala", price: 48000, image: "/images/tandoori-kebab.jpg", displayOrder: 3 },
  { categoryId: 2, name: "Chicken Seekh Kebab", description: "Minced chicken kebabs with aromatic spices", price: 26000, image: "/images/tandoori-kebab.jpg", displayOrder: 4 },
  { categoryId: 2, name: "Mutton Seekh Kebab", description: "Minced mutton kebabs grilled to perfection", price: 32000, image: "/images/tandoori-kebab.jpg", displayOrder: 5 },
  { categoryId: 2, name: "Chicken Malai Tikka", description: "Creamy chicken tikka with mild spices", price: 30000, image: "/images/tandoori-kebab.jpg", displayOrder: 6 },
  { categoryId: 2, name: "Chicken Hariyali Tikka", description: "Green chutney marinated chicken", price: 30000, image: "/images/tandoori-kebab.jpg", displayOrder: 7 },
  { categoryId: 2, name: "Tangdi Kebab", description: "Chicken drumsticks marinated and grilled", price: 28000, image: "/images/tandoori-kebab.jpg", displayOrder: 8 },
  
  // Chicken Curries
  { categoryId: 3, name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 32000, image: "/images/chicken-curry.jpg", displayOrder: 1 },
  { categoryId: 3, name: "Chicken Tikka Masala", description: "Tandoori chicken in rich masala gravy", price: 32000, image: "/images/chicken-curry.jpg", displayOrder: 2 },
  { categoryId: 3, name: "Chicken Curry", description: "Traditional chicken curry with spices", price: 28000, image: "/images/chicken-curry.jpg", displayOrder: 3 },
  { categoryId: 3, name: "Chicken Korma", description: "Mild chicken curry with cashew gravy", price: 30000, image: "/images/chicken-curry.jpg", displayOrder: 4 },
  { categoryId: 3, name: "Chicken Kadai", description: "Chicken cooked with bell peppers and tomatoes", price: 30000, image: "/images/chicken-curry.jpg", displayOrder: 5 },
  { categoryId: 3, name: "Chicken Handi", description: "Chicken cooked in traditional handi style", price: 32000, image: "/images/chicken-curry.jpg", displayOrder: 6 },
  { categoryId: 3, name: "Chicken Rogan Josh", description: "Kashmiri-style chicken curry", price: 32000, image: "/images/chicken-curry.jpg", displayOrder: 7 },
  
  // Mutton Curries
  { categoryId: 4, name: "Mutton Rogan Josh", description: "Aromatic mutton curry with Kashmiri spices", price: 38000, image: "/images/mutton-curry.jpg", displayOrder: 1 },
  { categoryId: 4, name: "Mutton Curry", description: "Traditional mutton curry", price: 36000, image: "/images/mutton-curry.jpg", displayOrder: 2 },
  { categoryId: 4, name: "Mutton Korma", description: "Mild mutton curry with cashew gravy", price: 38000, image: "/images/mutton-curry.jpg", displayOrder: 3 },
  { categoryId: 4, name: "Mutton Kadai", description: "Mutton cooked with bell peppers", price: 38000, image: "/images/mutton-curry.jpg", displayOrder: 4 },
  { categoryId: 4, name: "Mutton Handi", description: "Mutton in traditional handi preparation", price: 40000, image: "/images/mutton-curry.jpg", displayOrder: 5 },
  { categoryId: 4, name: "Mutton Kheema", description: "Minced mutton curry", price: 36000, image: "/images/mutton-curry.jpg", displayOrder: 6 },
  
  // Vegetarian
  { categoryId: 5, name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", price: 24000, image: "/images/paneer-dish.jpg", displayOrder: 1 },
  { categoryId: 5, name: "Paneer Tikka Masala", description: "Grilled paneer in rich masala", price: 26000, image: "/images/paneer-dish.jpg", displayOrder: 2 },
  { categoryId: 5, name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 24000, image: "/images/paneer-dish.jpg", displayOrder: 3 },
  { categoryId: 5, name: "Dal Makhani", description: "Black lentils in creamy gravy", price: 20000, image: "/images/dal.jpg", displayOrder: 4 },
  { categoryId: 5, name: "Dal Tadka", description: "Yellow lentils tempered with spices", price: 18000, image: "/images/dal.jpg", displayOrder: 5 },
  { categoryId: 5, name: "Veg Korma", description: "Mixed vegetables in cashew gravy", price: 22000, image: "/images/veg-curry.jpg", displayOrder: 6 },
  { categoryId: 5, name: "Aloo Gobi", description: "Potato and cauliflower curry", price: 18000, image: "/images/veg-curry.jpg", displayOrder: 7 },
  { categoryId: 5, name: "Bhindi Masala", description: "Okra cooked with onions and spices", price: 20000, image: "/images/veg-curry.jpg", displayOrder: 8 },
  
  // Breads
  { categoryId: 6, name: "Butter Naan", description: "Soft leavened bread with butter", price: 5000, image: "/images/naan.jpg", displayOrder: 1 },
  { categoryId: 6, name: "Garlic Naan", description: "Naan topped with garlic", price: 6000, image: "/images/naan.jpg", displayOrder: 2 },
  { categoryId: 6, name: "Cheese Naan", description: "Naan stuffed with cheese", price: 8000, image: "/images/naan.jpg", displayOrder: 3 },
  { categoryId: 6, name: "Plain Naan", description: "Classic leavened bread", price: 4000, image: "/images/naan.jpg", displayOrder: 4 },
  { categoryId: 6, name: "Tandoori Roti", description: "Whole wheat bread from tandoor", price: 3500, image: "/images/roti.jpg", displayOrder: 5 },
  { categoryId: 6, name: "Butter Roti", description: "Whole wheat bread with butter", price: 4000, image: "/images/roti.jpg", displayOrder: 6 },
  { categoryId: 6, name: "Laccha Paratha", description: "Layered whole wheat bread", price: 5000, image: "/images/paratha.jpg", displayOrder: 7 },
  { categoryId: 6, name: "Aloo Paratha", description: "Bread stuffed with spiced potatoes", price: 6000, image: "/images/paratha.jpg", displayOrder: 8 },
];

async function seed() {
  try {
    console.log("Seeding menu categories...");
    for (const category of categories) {
      await db.insert(menuCategories).values(category).onDuplicateKeyUpdate({ set: { id: category.id } });
    }
    console.log(`✓ Seeded ${categories.length} categories`);

    console.log("Seeding menu items...");
    for (const item of items) {
      await db.insert(menuItems).values(item);
    }
    console.log(`✓ Seeded ${items.length} menu items`);

    console.log("✓ Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
