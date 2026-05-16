import { useState } from "react";
import PalmsListingCard from "@/components/PalmsListingCard";
import { useQuery } from "@tanstack/react-query";
import { type Property } from "@shared/schema";
import { PropertyCard } from "@/components/PropertyCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Homes() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [bedroomsFilter, setBedroomsFilter] = useState<string>("all");
  const [bathroomsFilter, setBathroomsFilter] = useState<string>("all");
  const [sqftMin, setSqftMin] = useState<string>("");
  const [sqftMax, setSqftMax] = useState<string>("");
  const [amenityFilter, setAmenityFilter] = useState<string>("all");

  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  const filteredProperties = properties?.filter((property) => {
    if (statusFilter !== "all" && property.status !== statusFilter) return false;
    if (priceMin && property.price < parseInt(priceMin)) return false;
    if (priceMax && property.price > parseInt(priceMax)) return false;
    if (bedroomsFilter !== "all" && property.bedrooms !== parseInt(bedroomsFilter)) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Available Homes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury homes currently available in Shawood Homes community. 
              Each property offers exceptional quality and stunning desert views.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Min Price"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="w-32"
                />
                <span className="text-gray-500">-</span>
                <Input
                  type="number"
                  placeholder="Max Price"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="w-32"
                />
              </div>

              <Select value={bedroomsFilter} onValueChange={setBedroomsFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Bedrooms</SelectItem>
                  <SelectItem value="3">3+ Bedrooms</SelectItem>
                  <SelectItem value="4">4+ Bedrooms</SelectItem>
                  <SelectItem value="5">5+ Bedrooms</SelectItem>
                  <SelectItem value="6">6+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredProperties?.length || 0} homes found
              </span>
              <Button
                variant="outline"
                onClick={() => {
                  setStatusFilter("all");
                  setPriceMin("");
                  setPriceMax("");
                  setBedroomsFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Property Listings */}
      <section className="py-20">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Live MLS Listings - Summerlin West
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Authentic property listings updated directly from the MLS. Dr. Duffy's exclusive access to luxury homes $450K-$4M.
            </p>
            
            <div dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,TC" price-min="450000" price-max="4000000"></realscout-office-listings>`
            }} />

            <PalmsListingCard />

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                🔒 Exclusive MLS Access • Updated Every 15 Minutes • Dr. Duffy's Personal Listings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:702-222-1964"
                  className="btn-primary"
                >
                  Schedule Private Showing
                </a>
                <a 
                  href="mailto:sales@shawoodhomes.com"
                  className="btn-secondary"
                >
                  Get Property Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Duffy has access to off-market properties and upcoming listings. 
            Get notified first about new Shawood Homes opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Set Up Property Alerts
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Dr. Duffy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
