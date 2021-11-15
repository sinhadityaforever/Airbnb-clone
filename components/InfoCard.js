import Image from "next/dist/client/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition transform duration-200 ease out first:border-t ">
      <div className="relative h-30 w-56 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>Private rooms just for you</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl ">{price}</p>
            <p className="text-right font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
{
}
