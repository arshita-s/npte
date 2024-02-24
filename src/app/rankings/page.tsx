import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPTE Rankings",
  description: "",
  // other metadata
};

const RankingsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="NPTE Rankings"
        description="This page is under construction. In the meantime, you can see the most up-to-date rankings below."
      />
      <section className="overflow-hidden">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full">
                <iframe src="https://docs.google.com/spreadsheets/d/1jJ5uUxGvOiIZNZIAdJbB4wAPosX03H6Sn9b8LL5VL_o" width="75%" height="700px" />
              </div>
            </div>
          </div>
      </section>
       
    </>
  );
};

export default RankingsPage;
