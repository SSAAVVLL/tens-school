import {useEffect, useState, Suspense} from 'react';
import { testRequest, getAffiliate } from '../API/Manager';
import IAffiliate from '../Models/Affiliate';
import VerySlowComponent from '../Components/VerySlowComponent';

function Page() {
    const [apiResponse, setApiResponse] = useState<IAffiliate[]>([]);
    useEffect(() => {
        getAffiliate(150).then(response => {
            setApiResponse(response);
        });
    }, []);

    const promise = fetch('https://tailwindcss.com/docs/text-color');
    return (
    <>
        <div className="text-3xl text-slate-900 text-center">
            {apiResponse.map((item: IAffiliate) => <div key={item._data.id}>{item.getAddress()}</div>)}
        </div>
    
        <Suspense fallback={<div className="text-black">Загрузка...</div>}>
            <VerySlowComponent promise={promise}/>
        </Suspense>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 px-12">
                Edit affiliate
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>
            </div>
        </div>
    </>
  );
}
export default Page;