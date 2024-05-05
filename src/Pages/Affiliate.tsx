import {useEffect, useState} from 'react';
import { testRequest, getAffiliate } from '../API/API';

function Page() {
    const [apiRespone, setApiResponse] = useState<object>();
    useEffect(() => {
        getAffiliate(150).then(response => {
            setApiResponse(response);
        });
    }, []);

    return (<div className="text-3xl">
        {JSON.stringify(apiRespone)}
    </div>);
}
export default Page;