import { products } from "../../assets/products";
import { CardServices } from "../../ui/components/card-services";

export const ProductsPage = () => {
  return (
    <section id="products" className=" flex flex-col p-7 space-y-10">
      <div className="bg-white rounded-2xl px-6 py-4">
        <span className="text-[34px]">Nossos produtos mais vendidos</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 pt-0 pl-0">
          {products
            .sort((a: any, b: any) => b.qnt - a.qnt)
            .slice(0, 3)
            .map((product: any) => {
              return (
                <CardServices
                  key={product.name}
                  name={product.name}
                  description={product.description}
                  imageUrl="https://placehold.co/150x150?text=Foto+do+produto"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
