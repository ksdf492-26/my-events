import { FaShoppingCart } from "react-icons/fa";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export function PaymentsCard() {
  const route = useRouter();
  const params = useSearchParams() as ReadonlyURLSearchParams;
  const payment = params.get("payment") ?? "no value"
  const id = params.get("id") ?? "no value";
  const price = Number(params.get("price") ?? "0");
  const quantity = Number(params.get("quantity") ?? "0");

  type Props = {
    id: string;
    quantity: number;
    price: number;
  };

  const [data, setData] = useState<Props>({
    id,
    quantity,
    price
  });

  const [totalPrice, setTotalPrice] = useState<number>(price * quantity);

  // Atualiza data e totalPrice quando params mudam
  useEffect(() => {
    setData({ id, quantity, price });
    setTotalPrice(price * quantity);
  }, [id, quantity, price]);

  const less = () => {
    if (data.quantity > 0) {
      const newQuantity = data.quantity - 1;
      setData({ ...data, quantity: newQuantity });
      setTotalPrice(data.price * newQuantity);
    }
  };

  const more = () => {
    const newQuantity = data.quantity + 1;
    setData({ ...data, quantity: newQuantity });
    setTotalPrice(data.price * newQuantity);
  };

  return (
    <div className="fixed inset-0 pointer-events-auto bg-sky-950/90 z-10 flex items-center justify-center ">
      {payment == "processing" && (
        <div className="bg-[#001F3D] w-[600px] h-[370px] rounded-xl shadow-lg shadow-black/40 flex flex-col items-center justify-start pt-4 animate-fadeIn">
          <div className="text-2xl font-medium text-white mb-4 relative w-full text-center">
            Deseja comprar {data.quantity} ingressos?
            <div
              className="font-bold absolute top-0 right-5 capitalize cursor-pointer"
              onClick={() => route.back()}
            >
              X
            </div>
          </div>

          <div className="flex items-center justify-between w-full p-4 border-b-2 border-b-gray-600 border-t-2 border-t-gray-600">
            <div className="font-semibold text-2xl">Ingressos</div>
            <div className="flex items-center justify-center gap-1">
              <FaShoppingCart size={30} />
              <div className="text-green-500 font-bold text-lg">
                {totalPrice.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="w-full pt-2 pl-4 pr-4 flex flex-col border-b-2 border-b-gray-600">
            <div className="flex justify-between w-full items-start">
              <div className="flex flex-col">
                <div className="font-semibold text-2xl">Entrada VIP</div>
                <div className="text-2xl text-green-500 font-semibold">
                  {data.price.toFixed(2)}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="w-8 h-8 !rounded-lg bg-sky-800"
                  onClick={less}
                >
                  -
                </button>
                <div className="font-bold text-2xl">{data.quantity}</div>
                <button
                  className="w-8 h-8 !rounded-lg bg-sky-800"
                  onClick={more}
                >
                  +
                </button>
              </div>
            </div>
            <small className="font-medium text-gray-500 mt-2 mb-2">
              ingressos à venda até 00/00/00
            </small>
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <Link
              href={`?payment=confirming&id=${data.id}&quantity=${data.quantity}&price=${totalPrice}`}
              className="font-bold !text-gray-400 hover:!text-gray-200 transition-all !text-2xl underline p-2"
            >
              Confirmar Compra
            </Link>
          </div>
        </div>
      )}

      {payment == "confirming" && (
        <div className="bg-[#001F3D] w-[650px] rounded-lg flex items-center pb-10 justify-center">
          <div className="flex flex-col items-center gap-2 h-full w-2/3">
            <div className="text-3xl font-semibold p-3">Compre com:</div>
            <div>
              <img className="w-[300px]" src="/Group 1574.png" alt="" />
            </div>
            <form className="w-full flex flex-col gap-3">
              <label className="text-xl flex flex-col w-full">
                <div>Nome do cartão</div>
                <input
                  className="w-full border-2 border-gray-400 p-1 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Confirme o nome do seu cartão"
                />
              </label>
              <label className="text-xl flex flex-col w-full">
                <div>Número do cartão</div>
                <input
                  className="w-full border-2 border-gray-400 p-1 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Confirme o número do seu cartão"
                />
              </label>
              <div className="w-full flex items-center justify-between gap-5">
                <label className="text-xl flex flex-col flex-1">
                  <div>Data de validade</div>
                  <input
                    className="w-full border-2 border-gray-400 p-1 rounded-lg focus:outline-none"
                    type="text"
                    placeholder="MM/AA"
                  />
                </label>
                <label className="text-xl flex flex-col flex-1">
                  <div>CVC</div>
                  <input
                    className="w-full border-2 border-gray-400 p-1 rounded-lg focus:outline-none"
                    type="text"
                    placeholder="CVC"
                  />
                </label>
              </div>
              <Link href={`?payment=sucess&id=${data.id}&quantity=${data.quantity}&price=${totalPrice}`} className="w-full !rounded-lg p-2 m-2 self-center bg-sky-900">
                Confirmar compra
              </Link>
            </form>
          </div>
        </div>
      )}
      {
        payment == "sucess" &&
        <div className="w-[600px] h-[500px] bg-[#001F3D] rounded-lg flex flex-col items-center">
            <div className="w-full flex items-center cursor-pointer justify-end p-4 text-3xl font-bold" onClick={()=> route.push(`/event/${id}`)}>
              X
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <img src="/fi-br-enter.png" className="" alt="" />
              <div className="text-3xl mt-5 text-center font-bold">
                Compra realizada com <br /> sucesso!
              </div>
            </div>
        </div>
      }
      {
        payment == "failure" &&
                <div className="w-[600px] h-[500px] bg-[#001F3D] rounded-lg flex flex-col items-center">
            <div className="w-full flex items-center justify-between p-4 text-3xl font-bold">
               <div className="cursor-pointer" onClick={()=> route.back()}>
                <img src="/fi-br-arrow-left.png" alt="" />
                </div>
                <div className="text-gray-600 font-medium text-[0.9rem]">
                  Problemas com a compra?
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <img src="/fi-br-ban.png" className="" alt="" />
              <div className="text-3xl mt-5 text-center font-bold">
                Algo deu errado. <br /> Tente novamente
              </div>
            </div>
        </div>
      }
    </div>
  );
}
