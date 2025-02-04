
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournament Invitation",
  description: "",
  // other metadata
};

const BlogSidebarPage = () => {
  
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl pt-10 font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Tournament Invitation
                </h1>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    2025 National Parliamentary Tournament of Excellence
                  </p>
                  <iframe src="https://docs.google.com/document/d/1hZZTyUI6F3iRlwiR4rUeGNEmxOIG91ihBR0sfJ1-aHo/edit" width="100%" height="600px" />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Key Information
                </h3>
                <div className="px-8 py-6">
                  <h4><b>Location: </b>McKendree University</h4>
                  <h4><b>Date: </b>March 12-14, 2025</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
