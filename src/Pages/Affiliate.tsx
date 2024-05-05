import {useEffect, useState} from 'react';
import { testRequest } from '../API';

function Page() {
    const [apiRespone, setApiResponse] = useState<object>();
    useEffect(() => {
        testRequest().then(response => {
            setApiResponse(response);
        });
    }, []);

    return (<div>
        {JSON.stringify(apiRespone)}
    </div>);
}
export default Page;