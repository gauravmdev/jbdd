import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Grant Road (Original)",
    address: "Grant Road, Mumbai - 400 007",
    phone: "(+91 22) 2387 5656 / 5696 / 5697 / 5698",
    hours: "11:00 AM - 11:30 PM",
  },
  {
    id: 2,
    name: "Jogeshwari West",
    address: "EE Heights, Shop No: 3, Next to KFC, SV Road, Jogeshwari (W), Mumbai - 400 102",
    phone: "(+91-22) 2677 0011 / 22 / 33",
    hours: "11:00 AM - 11:30 PM",
  },
  {
    id: 3,
    name: "Bandra",
    address: "Bandra West, Mumbai",
    phone: "(+91 22) 2600 1234",
    hours: "11:00 AM - 11:30 PM",
  },
  {
    id: 4,
    name: "Andheri",
    address: "Andheri West, Mumbai",
    phone: "(+91 22) 2673 5656",
    hours: "11:00 AM - 11:30 PM",
  },
  {
    id: 5,
    name: "Malad",
    address: "Malad West, Mumbai",
    phone: "(+91 22) 2880 5656",
    hours: "11:00 AM - 11:30 PM",
  },
  {
    id: 6,
    name: "Borivali",
    address: "Borivali West, Mumbai",
    phone: "(+91 22) 2898 5656",
    hours: "11:00 AM - 11:30 PM",
  },
];

export default function Locations() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Locations</h1>
            <p className="text-xl text-muted-foreground">
              Find Delhi Darbar near you across Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card key={location.id} className="border-border hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {location.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Address</p>
                        <p className="text-foreground">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                        <p className="text-foreground">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Hours</p>
                        <p className="text-foreground">{location.hours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advance Orders Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Advance Orders</h2>
            <p className="text-lg text-muted-foreground">
              Planning a party or special event? We accept advance orders for bulk quantities.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-3xl font-bold text-primary">1800 123 5656</p>
              <p className="text-muted-foreground">
                Or call: (+91 22) 2387 5656 / 5657 / 5696 / 5697
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">More Locations Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              We're expanding across Mumbai! Stay tuned for new Delhi Darbar locations opening in your neighborhood. Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
