import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Star, Trophy, Zap, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Rewards() {
  const handleJoin = () => {
    toast.success("Feature coming soon! Stay tuned for our loyalty program launch.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Loyalty Program</h1>
            <p className="text-xl text-muted-foreground">
              Earn rewards with every order and enjoy exclusive benefits
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Join Delhi Darbar Rewards</h2>
            <p className="text-lg text-muted-foreground">
              Get rewarded for your love of authentic Moghlai cuisine! Earn points with every purchase and unlock free meals, exclusive offers, and special perks.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" onClick={handleJoin}>
              Join Now - It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">1. Earn Points</h3>
                <p className="text-muted-foreground">
                  Collect points for every rupee spent on your favorite biryanis and dishes
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">2. Redeem Rewards</h3>
                <p className="text-muted-foreground">
                  Use your points to get free meals, special dishes, and exclusive items
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">3. Unlock Perks</h3>
                <p className="text-muted-foreground">
                  Reach higher tiers for birthday rewards, priority ordering, and more
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards Menu */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Rewards Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">500 ★</div>
                <h3 className="text-xl font-bold text-foreground">Starter Dish</h3>
                <p className="text-muted-foreground">Any tandoori starter of your choice</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">1000 ★</div>
                <h3 className="text-xl font-bold text-foreground">Biryani</h3>
                <p className="text-muted-foreground">Any biryani from our menu</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">1500 ★</div>
                <h3 className="text-xl font-bold text-foreground">Main Course</h3>
                <p className="text-muted-foreground">Any chicken or mutton curry</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">2500 ★</div>
                <h3 className="text-xl font-bold text-foreground">Complete Meal</h3>
                <p className="text-muted-foreground">Full meal for two people</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/biryani-plate.jpg"
            alt="Biryani"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Member Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white space-y-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Birthday Special</h3>
              <p className="text-white/90">
                Celebrate with a complimentary biryani
              </p>
            </div>
            <div className="text-center text-white space-y-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Exclusive Offers</h3>
              <p className="text-white/90">
                Member-only promotions and early access
              </p>
            </div>
            <div className="text-center text-white space-y-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Bonus Point Days</h3>
              <p className="text-white/90">
                Earn double or triple points during promotions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Start Earning?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of biryani lovers who are already enjoying the benefits of our loyalty program.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" onClick={handleJoin}>
              Sign Up Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
