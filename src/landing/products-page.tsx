import { products } from "../../public/products";
import { CardServices } from "../ui/components/card-services";

export const ProductsPage = () => {
  return (
    <div className=" flex flex-col p-7 space-y-10 ">
      <div className="bg-white rounded-2xl px-6 py-4">
        <span className="text-[34px]">Nossos produtos</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 pt-0 pl-0">
          {products.map((product: any) => {
            return (
              <CardServices
                key={product.name}
                name={product.name}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
