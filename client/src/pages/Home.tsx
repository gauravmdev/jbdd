import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Utensils, Award, MapPin, ArrowRight, Star } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Modern Asymmetric Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-24 md:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/20">
                <Star className="h-4 w-4 fill-current" />
                <span>The Biryani King of Mumbai</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
                Authentic
                <span className="block text-primary mt-2">Moghlai Cuisine</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-muted-foreground font-normal">Since 1973</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Experience traditional dum biryani and finest Indian delicacies crafted with passion and perfected over five decades.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/menu">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 text-base px-8 h-12 transition-all duration-300">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-2 hover:bg-secondary/50 transition-all duration-200">
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-150">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src="/images/hero-biryani.jpg"
                  alt="Biryani"
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 p-6 bg-white/95 backdrop-blur-sm shadow-xl max-w-xs border border-border/50 ring-1 ring-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center ring-1 ring-primary/20">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">50+ Years</p>
                    <p className="text-sm text-muted-foreground font-medium">Of Excellence</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Modern Clean Cards */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ring-1 ring-primary/20">
                <Utensils className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Authentic Recipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional Moghlai recipes perfected over 50 years using time-honored cooking techniques.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ring-1 ring-primary/20">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Award Winning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized as Mumbai's Biryani King, serving the finest Moghlai food since 1973.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ring-1 ring-primary/20">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Multiple Locations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find us across Mumbai, bringing authentic Moghlai cuisine closer to you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Signature Dish Section - Split Layout */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src="/images/chicken-biryani.jpg"
                  alt="Chicken Biryani"
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium border border-accent/30">
                Signature Dish
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Authentic Dum Biryani
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Long grained basmati rice cooked with delicately spiced meat, flavored with aromatic spices and given a traditional dum over a wood fire. A culinary masterpiece passed down through generations.
              </p>
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moghlai Delicacies Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/20">
                Moghlai Specialties
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Tandoori & Curry Delights
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From succulent tandoori kebabs to rich butter chicken, our menu features the finest Moghlai dishes prepared with authentic recipes and premium ingredients.
              </p>
              <Link href="/menu">
                <Button size="lg" variant="outline" className="border-2 hover:bg-secondary/50 transition-all duration-200">
                  View Full Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src="/images/tandoori-kebab.jpg"
                  alt="Tandoori Kebab"
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Full Width with Overlay */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/mutton-biryani.jpg"
            alt="Mutton Biryani"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/75" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
              Our Heritage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              A Legacy Since 1973
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Jaffer Bhai's Delhi Darbar was founded with passion in the heart and hands that led to the best culinary art. Our philosophy has always been to be perfectionists in serving the finest Moghlai food with a style of our own.
            </p>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300 mt-2">
                Read Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - isolated from previous sections */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
