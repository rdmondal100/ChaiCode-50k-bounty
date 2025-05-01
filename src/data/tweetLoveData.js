 const tweetIds = [
	{ id: "1904224504328733039", featured: true },
	{ id: "1910405500635664554", featured: true },
	{ id: "1910400980593574204", featured: true },
	{ id: "1904224504328733039", featured: false },
	{ id: "1910405500635664554", featured: true },
	{ id: "1910371930860929195", featured: false },
	{ id: "1910028187192435136", featured: true },
	{ id: "1908945982525735101", featured: false },
	{ id: "1910196260746723481", featured: true },
	{ id: "1910696141286432865", featured: false },
	{ id: "1909950286128468318", featured: true },
	{ id: "1909306314553278973", featured: true },
  ];
  

  const seen = new Set();
  const tweetPostIdFromServices = [];
  tweetIds.forEach(tweet => {
	if (!seen.has(tweet.id)) {
		tweetPostIdFromServices.push(tweet);
	  seen.add(tweet.id);
	}
  });

  export {tweetPostIdFromServices}