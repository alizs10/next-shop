import Image from "next/image";
import CopyIcon from "../../ui/icons/CopyIcon";
import PlusIcon from "../../ui/icons/PlusIcon";

function Payments() {
    return (
        <div className="mt-8 p-3">

            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="">
                    <tr>
                        <th scope="col" className="p-4 text-gray-400">
                            #
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Amount
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Order
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Status
                        </th>

                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Transaction
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    <tr className="">
                        <td className="p-4 w-4 text-white">
                            1
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">2023.01.23 - 16:59</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">$ 256</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="w-full flex justify-between items-center">
                                <div className="w-fit flex flex-nowrap gap-[4px]">
                                    <div className="w-10 h-10 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                        <Image src={'/assets/products/1/1.png'} alt="product" width={100} height={50} />
                                    </div>
                                    <div className="w-10 h-10 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                        <Image src={'/assets/products/2/1.png'} alt="product" width={100} height={50} />
                                    </div>
                                    <div className="w-10 h-10 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                        <Image src={'/assets/products/3/1.png'} alt="product" width={100} height={50} />
                                    </div>
                                    <div className="w-10 h-10 text-gray-300 flex justify-center items-center">
                                        <PlusIcon />
                                    </div>
                                </div>

                                <span className="cursor-pointer self-end text-md text-red-500 underline underline-offset-2">more details</span>
                            </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                            <span className="self-start rounded-md w-fit px-2 py-1 bg-emerald-50 text-emerald-600">success</span>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <button className="flex gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(239,68,68)] hover:shadow-[0_7px_15px_5px_rgb(239,68,68)] bg-red-500 text-white">
                                <span className="scale-90"><CopyIcon /></span>
                                <span>x3v561suvdavb3523ls2ssxs</span>
                            </button>
                        </td>
                    </tr>
                 

                </tbody>
            </table>

        </div>
    );
}

export default Payments;