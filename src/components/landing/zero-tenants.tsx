
import { Card } from "@/components/ui/card";
const  tenants =[
  {
    id:1,
    title:"Assume a Hostile Environment",
    description:"There are malicious personas both inside and outside the environment. All users, devices, applications, environments, and all other NPEs are treated as untrusted.",
    image:"/security.svg",
  
},
{
  id:2,
  title:"Presume Breach",
  description:"There are hundreds of thousands of attempted cybersecurity attacks against critical systems every day. Consciously operate and defend resources with the assumption that an adversary has presence within your environment. Enhanced scrutiny of access and authorization decisions to improve response outcomes.",
  image:"/alert-circle.svg",
},  
{
  id:3,
  title:"Never Trust, Always Verify",
  description:"Deny access by default. Every device, user, application/workload, and data flow are authenticated and explicitly authorized using least privilege, multiple attributes, and dynamic cybersecurity policies.",
  image:"/fingerprint.svg",
},
{
  id:4,
  title:"Scrutinize Explicitly",
  description:"TAll resources are consistently accessed in a secure manner using multiple attributes (dynamic and static) to derive confidence levels for contextual access to resources. Access to resources is conditional and access can dynamically change based on action and confidence levels resulting from those actions.",
  image:"/search.svg",
},
{
  id:5,
  title:"Apply Unified Analytics",
  description:"Apply unified analytics for Data, Applications, Assets, Services (DAAS) to include behavioristics, and log each transaction",
  image:"/bar-chart.svg",
},
]
     
    

const ZeroTenants = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-[88px] py-[60px] justify-center items-center bg-[#1A2236]">
      <div className="flex w-full flex-col items-start gap-[37px]">
        <div className="flex w-full flex-col items-center gap-[15px]">
          <h6 className="text-[#FDED1B] font-Inter text-[30px] font-semibold leading-[24px]">
            Zero Trust Tenants
          </h6>
          <p className="text-white font-Inter text-[22px] text-center leading-[25px] font-normal">
            Zero Trust assumes breach is inevitable, focuses on least-privileged access, granular risk-based access control, security automation, real-time monitoring
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-[25px] flex-wrap">
          {tenants.map((item) => (
            <Card key={item.id} className="flex w-[calc(28%-24px)] h-[289px] flex-col p-4 items-start gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
            <img src={item.image} alt="" className="w-[24px] h-[24px] aspect-square" />
            <h6 className="text-[#FDED1B] font-Inter text-[16px] font-semibold leading-[20px]">
              {item.title}
            </h6>
            <p className="text-[#D6DEEA] text-justify font-Inter text-[12px] leading-[25px] font-normal">
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
