const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

let posts=[];

const homeStartingContent =  "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.";
const aboutContent = "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.";
const contactContent="Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.";
//get methods

app.get('/',(req,res)=>{
	res.render('home',{homecontent:homeStartingContent,postsvalue:posts});
});
app.get('/about',(req,res)=>{
	res.render('about',{aboutcontent:aboutContent});
});
app.get('/contact',(req,res)=>{
	res.render('contact',{contactcontent:contactContent});
});
app.get('/compose',(req,res)=>{
	res.render('compose',{});
});
app.get('/posts/:postname',(req,res)=>{
	posts.forEach((ele)=>{
		if(_.lowerCase(ele.title)===_.lowerCase(req.params.postname))
			res.render('posts',{element:ele});
	});
})

//post methods

app.post('/compose',(req,res)=>{
	let newpost={title:req.body.myposttitle,
	             content:req.body.mypostcontent}
	posts.push(newpost);
	res.redirect('/');                          
});

app.listen(process.env.PORT||3000,()=>{
	console.log('server running on port 3000');
});