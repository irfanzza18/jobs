import axios from "axios"


export const getJobList = async (page) => {
	let halaman = page
	const job = await axios.get(
		
		'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page='+halaman
	)
		// console.log(job)
    return job.data
    ;
};

export const searchJob =async (p) =>{
      
	// console.log("ini page",page);
	let page=""
	var description = ""
	var location = ""
	var type = ""
	var res = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page='+page+"&description="+description+
	"&location="+location+"&type="+type;

	// const search =await axios.get(res)
	// console.log(search.data)
	// // console.log(search.data)
	// setJob(search.data)
	// setIsLoading(false)
	
  }


// export const searchJob =async (q) =>{
	
// 	var str1 = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=";
//     var str2 = q;
// 	var res = str1 + str2 ;
// 	console.log(res)
// 	const search =await axios.get(res)
// 	return search.data
	
// }

// export const searchJob =async (q) =>{
	
// 	var str1 = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=";
//     var str2 = q;
// 	var res = str1 + str2 ;
// 	console.log(res)
// 	const search =await axios.get(res)
// 	return search.data
	
// }

