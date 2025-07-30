
import { Card } from "@/components/ui/card";
const  tenants =[
  {
    id:1,
    title:"Proven Expertise",
    description:"Years of hands-on experience delivering cybersecurity at scale for enterprise and government sectors.",
    image:"/security.svg",
  
},
{
  id:2,
  title:"Zero Trust Leadership",
  description:"We specialize in secure-by-design Zero Trust strategies aligned with modern compliance and business needs.",
  image:"/alert-circle.svg",
},  
{
  id:3,
  title: "Mission-Driven Team",
  description: "Our team is driven by values — integrity, innovation, and dedication to client success.",
  image:"/fingerprint.svg",
},
// {
//   id:4,
//   title:"Mission-Driven Team",
//   description:"Our team is driven by values — integrity, innovation, and dedication to client success.",
//   image:"/search.svg",
// },
// {
//   id:5,
//   title:"Apply Unified Analytics",
//   description:"Apply unified analytics for Data, Applications, Assets, Services (DAAS) to include behavioristics, and log each transaction",
//   image:"/bar-chart.svg",
// },
]
     
    

const ZeroTenants = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-[88px] py-[60px] justify-center items-center bg-[#1A2236]">
      <div className="flex w-full flex-col items-start gap-[37px]">
        <div className="flex w-full flex-col items-center gap-[15px]">
          <h6 className="text-[#FDED1B] font-Inter text-[30px] font-semibold leading-[24px]">
            Our Mission & Vision
          </h6>
          <p className="text-white font-Inter text-[22px] text-center leading-[25px] font-normal">
            "Our mission is to advance resilient, adaptive cybersecurity by embedding Zero Trust principles into every layer of our operations—ensuring that no user, device, or system is inherently trusted, and access is continuously verified to protect critical assets, data, and infrastructure."
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-[45px] flex-wrap">
          {tenants.map((item) => (
            <Card key={item.id} className="flex w-[calc(28%-80px)] h-[289px] flex-col p-4 items-start gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
            <img src={item.image} alt="" className="w-[24px] h-[24px] aspect-square" />
            <h6 className="text-[#FDED1B] font-Inter text-[16px] font-semibold leading-[20px]">
              {item.title}
            </h6>
            <p className="text-[#D6DEEA]  font-Inter text-[12px] leading-[25px] font-normal">
              {item.description}
            </p>
          </Card>
         ))}
       
        </div>
      </div>
    </section>
  );
};

export default ZeroTenants;
