import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Heart, Leaf, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              Serving the finest Moghlai food since 1973
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Jaffer Bhai's Delhi Darbar, we believe in perfection. Our mission is to serve authentic Moghlai cuisine with passion and dedication, preserving traditional recipes while creating memorable dining experiences. We are committed to quality, authenticity, and bringing the rich flavors of Mughlai heritage to every plate.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Traditional Moghlai recipes passed down through generations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest ingredients and premium spices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Heritage</h3>
                <p className="text-muted-foreground">
                  Preserving culinary heritage for over five decades.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Passion</h3>
                <p className="text-muted-foreground">
                  Creating perfect biryani and Moghlai delicacies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/mutton-biryani.jpg"
                alt="Mutton Biryani"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">The Beginning</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  1973 saw the inception of Jaffer Bhai's Delhi Darbar at Grant Road, Mumbai. With passion in his heart and hands, Jaffer Bhai created the best culinary art. His philosophy was to be a perfectionist in every dish served.
                </p>
                <p>
                  Jaffer Bhai's Delhi Darbar Restaurants have been serving the finest Moghlai food since 1973, and we've been doing it with a style of all our own. Open throughout the week, we continue to delight food lovers with our signature biryanis and authentic Mughlai cuisine.
                </p>
                <p>
                  Today, we are proudly known as "The Biryani King of Mumbai," a testament to our commitment to excellence and our love for authentic Moghlai cuisine. Every dish we serve carries the legacy of Jaffer Bhai's vision and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/chicken-biryani.jpg"
            alt="Chicken Biryani"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The Art of Dum Biryani
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Our signature biryani is prepared using the traditional dum method, where long-grained basmati rice and perfectly spiced meat are slow-cooked together over a wood fire. This ancient technique seals in the flavors and aromas, creating a culinary masterpiece that has made us Mumbai's Biryani King.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
