async function getUsers(names) {
	let jobs = [];
	for (let name of names) {
		let job = fetch(`https://api.github.com/users/${name}`).then(
			okResponse => {
				if (okResponse.status != 200) {
					return null;
				} else {
					return okResponse.json();
				}
			},
			failResponse => {
				return null;
			}
		);
		jobs.push(job);
	}
		let results = await Promise.all(jobs);
	for (let result of results) {
		alert (result.login + " from " + result.location);
	}
	console.log(results);
}

let users = ['iliakan', 'remy', 'kriogenschik'];
getUsers(users);