import Image from "next/image";

const CompanyLogos = () => {
  return (
    <div className="p-4 w-full max-w-7xl mx-auto flex items-center justify-between mt-10 flex-wrap gap-y-4">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div key={item} className="w-[100px] h-[100px]">
          <Image
            width={100}
            height={100}
            className="w-[100px] h-auto"
            alt={`logo ${item}`}
            src={`/logo/logo${item}.png`}
          />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
