import fs from 'fs';

const getPath=(path)=>{
	return new Promise((resolve, reject)=>{
		fs(path, 'utf8', (err, data)=>{
			if (err){
				reject(err);
			}
			else{
				resolve(data);
			}
		})
	})
}

getPath('./New_Directory/text.txt')
       .then((result)=>console.log(result))
	   .catch((err)=>console.log(err.message));

