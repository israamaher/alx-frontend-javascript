export default function getResponseFromAPI(success){
	return myPromise((resolve, reject)=>{
		if(success){
		 resolve({
		  status: 200,
		  body: 'Success'
		 });
		}else{
		 reject('The fake API is not working currently')
		}
	});
}
