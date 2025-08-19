import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Menu, Star, Shield, Heart, Smile } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
                <img
                  src="/1.png"
                  alt="Dentologie"
                  className="h-16 transition-transform hover:scale-105"
                />
              </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Book Appointment Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    Book Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Appointment</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and we'll contact you to schedule your appointment.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Email" />
                    <Textarea placeholder="Preferred appointment time and any special requests" />
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Submit Request
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-lg hover:text-teal-600">Home</a>
                  <a href="#" className="text-lg hover:text-teal-600">About</a>
                  <a href="#" className="text-lg hover:text-teal-600">Services</a>
                  <a href="#" className="text-lg hover:text-teal-600">Contact</a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-4">
                        Book Appointment
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request Appointment</DialogTitle>
                        <DialogDescription>
                          Fill out the form below and we'll contact you to schedule your appointment.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Email" />
                        <Textarea placeholder="Preferred appointment time and any special requests" />
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">
                          Submit Request
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-24 overflow-hidden min-h-[600px]">
        {/* Abstract Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-40 h-40 bg-orange-400 rounded-full opacity-80"></div>
          <div className="absolute top-24 right-24 w-32 h-32 bg-pink-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-teal-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-16 right-16 w-28 h-28 bg-orange-300 rounded-full opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-300 rounded-full opacity-60"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
            Dentistry<br />
            Redesigned
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Grand Street Dental has redefined the dental experience and set a new standard
            for patient care and aesthetic dentistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                      Book Your Appointment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Request Appointment</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll contact you to schedule your appointment.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Your Name" />
                      <Input placeholder="Phone Number" />
                      <Input placeholder="Email" />
                      <Textarea placeholder="Preferred appointment time and any special requests" />
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Submit Request
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (403) 226-9627
                </Button>
              </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Experience Himalayan Hygiene
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Buffalo Run Dental with excellence, compassion, and cutting-edge technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Dedicated to Your Oral Health
              </h3>
              <p className="text-gray-600 mb-6">
                Dr. Ben brings years of experience and a passion for dental excellence to Buffalo Run Dental.
                His commitment to staying current with the latest dental technologies and techniques ensures
                that every patient receives the highest quality care.
              </p>
              <p className="text-gray-600 mb-8">
                Our practice is built on the foundation of trust, comfort, and personalized care.
                We believe that every patient deserves a positive dental experience, and we work
                tirelessly to make that a reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Expert Care</h4>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Compassionate</h4>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">5-Star Service</h4>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/055/204/602/non_2x/modern-dental-clinic-interior-featuring-a-bright-turquoise-color-scheme-dental-chair-and-professional-dental-equipment-in-a-clean-environment-free-photo.jpg"
                alt="Modern dental clinic with turquoise interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care from general dentistry to advanced cosmetic procedures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smile className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>General Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive oral exams, cleanings, fillings, and preventive care
                  to maintain your optimal oral health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>Cosmetic Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Teeth whitening, veneers, bonding, and smile makeovers to enhance
                  your natural beauty and confidence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>Restorative Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Crowns, bridges, implants, and other advanced treatments to restore
                  function and appearance to damaged teeth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular check-ups, X-rays, and educational guidance to prevent
                  dental problems before they start.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smile className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>Emergency Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Prompt treatment for dental emergencies, pain relief, and urgent
                  dental care when you need it most.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-10 w-10 text-teal-600 mb-4" />
                <CardTitle>Oral Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tooth extractions, wisdom teeth removal, and minor oral surgical
                  procedures in a comfortable environment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Leader in Cosmetic Dentistry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img
                src="https://ext.same-assets.com/1147173900/3301775674.jpeg"
                alt="Dr. Jennifer Plotnick in dental office"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Leader in Cosmetic Dentistry</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We take great pride in crafting incredibly lifelike porcelain veneers
                that will transform your smile. Click on the link below to see our
                extensive collection of smile transformations.
              </p>
            </div>
          </div>

          {/* Before/After Gallery */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img src="https://ext.same-assets.com/1147173900/3192935308.jpeg" alt="Before dental work" className="w-full rounded-lg shadow-md" />
                <img src="https://ext.same-assets.com/1147173900/3532443874.jpeg" alt="After dental work" className="w-full rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-500">Veneer Revision 10 veneers</p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img src="https://ext.same-assets.com/1147173900/346122953.jpeg" alt="Before dental work" className="w-full rounded-lg shadow-md" />
                <img src="https://ext.same-assets.com/1147173900/2833432514.jpeg" alt="After dental work" className="w-full rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-500">4 porcelain veneers</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" className="bg-yellow-200 hover:bg-yellow-300 border-yellow-300 font-semibold">
              VIEW BEFORE & AFTER GALLERY
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to schedule your appointment? We're here to help you achieve your best smile.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(403) 226-9627</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-teal-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Buffalo Run Area, Calgary, AB</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-teal-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Visit</CardTitle>
                <CardDescription>
                  Book your appointment online or call us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Email" />
                <Textarea placeholder="Preferred appointment time and any special requests" />
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Request Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <div className="flex items-center">
            <img
              src="/1.png"
              alt="Dentologie"
              className="h-16 transition-transform hover:scale-105"
            />
          </div>
              <p className="text-gray-300 my-10">
                Your trusted partner in oral health, providing exceptional dental care
                with a personal touch.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-teal-400">About Dr. Ben</a></li>
                <li><a href="#" className="hover:text-teal-400">Our Services</a></li>
                <li><a href="#" className="hover:text-teal-400">Book Appointment</a></li>
                <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>(403) 226-9627</p>
                <p>Buffalo Run Area, Calgary, AB</p>
                <p>info@buffalorundental.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Buffalo Run Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
