import axios from "axios"

export const getJobList = async () => {
	const job = await axios.get(
		'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'
	)

    return job.data
    ;
};


export const searchJob =async (q) =>{
	const search =await axios.get(
		'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'
		)
	console.log(q)
}
