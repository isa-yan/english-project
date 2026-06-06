var starter2 = document.getElementById("starter2")
var starter1 = document.getElementById("starter1")
var canvas = document.getElementById('c');
var button = document.getElementById('button');
var circle = document.getElementById('circle');

starter1.addEventListener('animationend',(e)=>{
    if (e.animationName==='typewriting'){
        starter2.classList.add('starter')
        starter1.style.borderRightColor='rgb(73, 73, 73)';
        starter2.style.opacity=1;

    }
});

starter2.addEventListener('animationend',(e)=>{
    if (e.animationName==='typewriting'){
        button.style.opacity=1;
    }

})


document.addEventListener('keydown',(e)=>{
    if (e.key==="Enter"){
        canvas.classList.add('fadeout')
    }
});

canvas.addEventListener('animationend',(e)=>{
    if (e.animationName==='fadeout'){
        starter1.classList.add('starter')
        starter1.classList.add('blink')
        starter1.style.opacity=1;
        canvas.innerHTML="<br>";



    }
});


window.onload = function(argument) {
	var lyric = "statement was more tongue-in-cheek and something shed never say formally. Which, of course, I already understood. Well hear more from Tanya later. With groups like SoulCycle, “cult” works to describe members fierce fidelity to a cultural coterie that may very well remind us of some aspects of a Manson-level dangerous group—the monetary and time commitment, the conformism, and the exalted leadership (all of which certainly have the potential to turn toxic)—but not the wholesale isolation from outsiders or life-threatening lies and abuse. We know without needing to explicitly state it that the possibility of death or a physical inability to leave is not on the table. But, like everything in life, there is no good cult/bad cult binary; cultishness falls on a spectrum. Steven Hassan, a mental health counselor, author of The Cult of Trump, and one of the countrys foremost cult experts, has described an influence continuum representing groups from healthy and constructive to unhealthy and destructive. Hassan says that groups toward the destructive end use three kinds of deception: omission of what you need to know, distortion to make whatever theyre saying more acceptable, and outright lies. One of the major differences between so-called ethical cults (Hassan references sports and music fans) and noxious ones is that an ethical group will be up-front about what they believe in, what they want from you, and what they expect from your membership. And leaving comes with few, if any, serious consequences. “If you say I found a better band or Im not into basketball anymore, the other people wont threaten you,” Hassan clarifies. “You wont have irrational fears that youll go insane or be possessed by demons.”* Or, in the case of our former 3HO member, Tasha, turn into a cockroach. “To my core,” Tasha answered, when I asked if she truly believed the groups promise that if she committed a serious offense, like sleeping with her guru or taking her life, shed come back as the worlds most reviled insect. Tasha also believed that if you died in the presence of someone holy, youd reincarnate higher. Once, she spotted a cockroach in a public restroom and was convinced it was a swami who’d done something awful in a past life and was trying to come back on a higher vibration. “I was like, Oh my God, hes trying to die around me because I am an elevated teacher.’” Tasha shivered. When the cockroach scuttled up into the full sink, Tasha opened the plug so it wouldnt have the honor of drowning in her proximity. “I freaked out and ran out of the bathroom,” she recounted. “That was probably the pinnacle of my insanity.” By contrast, our CrossFitter Alyssa Clarke told me that the scariest possible outcome for her might be getting called lazy on Facebook if she skipped a workout. Or, if she decided to quit the box and start Spinning instead (heaven forbid), her old pals and paramours might slowly dissolve from her life. It is to qualify this wide gamut of cultlike communities that weve come up with colloquial modifiers like “cult”";
	var words = {};
	var words_attr = [];
	string_handle(lyric);

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'white';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px arial'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}

