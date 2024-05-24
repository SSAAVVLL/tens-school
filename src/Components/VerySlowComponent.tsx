// @ts-nocheck
export default function(props) {
    let i;
    const docFetch = use(props.promise);
    return (<div className="text-black">
            Я загрузился
        </div>)
   
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
    if (promise.status === 'fulfilled') {
      return promise.value;
    } else if (promise.status === 'rejected') {
      throw promise.reason;
    } else if (promise.status === 'pending') {
      throw promise;
    } else {
      promise.status = 'pending';
      
      promise.then(
        result => {
          promise.status = 'fulfilled';
          promise.value = result;
        },
        reason => {
          promise.status = 'rejected';
          promise.reason = reason;
        },      
      );
      throw promise;
    }
  }