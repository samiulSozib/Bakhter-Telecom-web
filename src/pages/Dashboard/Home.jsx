import RecentOrders from "../../components/ecommerce/RecentOrders";
import PageMeta from "../../components/common/PageMeta";
import FastCard from "../../components/ecommerce/FirstCard"
import SliderCard from "../../components/ecommerce/SliderCard"
import InfoCard from "../../components/ecommerce/InfoCard"

export default function Home() {
 
  return (
    <>
      <PageMeta
        title="Tak Telecom"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        

        <div className="col-span-12 xl:col-span-7">
          < FastCard/>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <SliderCard />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
        
          <InfoCard />

        </div>


        <div className="col-span-12 xl:col-span-12">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
