import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const SectionInspiration = ({ data }) => {

  return (
    <section className="bg-[#F8F8F8] py-10 px-4 md:px-8">
      <div>
        <h2 className="text-[28px] md:text-3xl font-semibold mb-6 lg:max-w-275 lg:mx-auto" >Inspiration for your first order</h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="relative w-full lg:max-w-275 lg:mx-auto"
      >
        <CarouselContent >
          {data?.map((v, i) => {
            return (
              <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6 ">
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden">
                    <img src={v.image} alt={v.name || "Delicious pure veg dish"}
                      className="w-full h-full object-cover" />
                  </div>
                  <span className="mt-4 font-medium text-gray-700 text-center"> {v.name || "Food Item"}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 md:left-4 top-1/3 bg-white text-black shadow-md border-none hover:bg-gray-50 size-10 disabled:hidden" />
        <CarouselNext className="absolute right-0 md:right-4 top-1/3 bg-white text-black shadow-md border-none hover:bg-gray-50 size-10 disabled:hidden" />
      </Carousel>
    </section>
  )
}

export default SectionInspiration;
