import Hero from "@/components/landing/hero";
import ZeroTrust from "@/components/landing/zero-trust";
import ZeroTenants from "@/components/landing/zero-tenants";
import Benefite from "@/components/landing/benefite";
import Approach from "@/components/landing/approach";
import GetTouch from "@/components/landing/get-touch";
const LandingPage = () => {
  return (
    <div className="">
     <Hero />
     <ZeroTrust />
     <ZeroTenants />
     <Benefite />
     <Approach />
     <GetTouch />
     
    </div>
  );
};

export default LandingPage;
