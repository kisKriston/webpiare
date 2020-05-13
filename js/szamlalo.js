var szamlalojs=new function() {
	
	this.hatarido_d='';
	this.hatarido=0;
	this.akt_ido=0;
	this.ido=0;
	this.maradek=0;
	this.nap=0;
	this.ora=0;
	this.perc=0;
	this.masodperc=0;
	
	this.akt_ido_beallit=function() {
		this.akt_ido=Date.now();
		this.ido=this.hatarido-this.akt_ido;		
	}
	
	this.init=function(hatarido) {
		
		this.hatarido_d=hatarido;
		this.hatarido=Date.parse(this.hatarido_d);
		
		$('#hatarido').html(new Date(this.hatarido_d).getFullYear()+'-'+String((new Date(this.hatarido_d).getMonth()+1)).padStart(2,'0')+'-'+String(new Date(this.hatarido_d).getDate()).padStart(2,'0'));
		
		this.akt_ido_beallit();
		
		if (this.ido<0) this.ido=0;
		
		this.hatralevo_megallapit();
		
		this.szamok_frissit(1);
		
		this.futtatas();
		
	}
	
	this.hatralevo_megallapit=function() {

		// nap
		
		this.nap=String(Math.floor(this.ido/86400000)).padStart(2,'0');
		
		this.maradek=this.ido%86400000;
		
		// ora
		
		this.ora=String(Math.floor(this.maradek/3600000)).padStart(2,'0');
		
		this.maradek=this.maradek%3600000;
		
		// perc

		this.perc=String(Math.floor(this.maradek/60000)).padStart(2,'0');
		
		this.maradek=this.maradek%60000;
		
		// masodperc
		
		this.masodperc=String(Math.floor(this.maradek/1000)).padStart(2,'0');
		
	}
	
	this.szamok_megjelenitese=function() {
			$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(1)').html(this.nap[0]);
			$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo',this.nap[0]);
			$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(2)').html(this.nap[1]);
			$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo',this.nap[1]);
	
			$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(1)').html(this.ora[0]);
			$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(1)').data('elozo',this.ora[0]);
			$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(2)').html(this.ora[1]);
			$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(2)').data('elozo',this.ora[1]);
	
			$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(1)').html(this.perc[0]);
			$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(1)').data('elozo',this.perc[0]);
			$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(2)').html(this.perc[1]);
			$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(2)').data('elozo',this.perc[1]);
			
			$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(1)').html(this.masodperc[0]);
			$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(1)').data('elozo',this.masodperc[0]);
			$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(2)').html(this.masodperc[1]);
			$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(2)').data('elozo',this.masodperc[1]);
			
			/********** for mobile view **********/

			$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)').html(this.nap[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo',this.nap[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)').html(this.nap[1]);
			$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo',this.nap[1]);
	
			$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)').html(this.ora[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo',this.ora[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)').html(this.ora[1]);
			$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo',this.ora[1]);
	
			$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)').html(this.perc[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo',this.perc[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2)').html(this.perc[1]);
			$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo',this.perc[1]);
			
			$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)').html(this.masodperc[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo',this.masodperc[0]);
			$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2)').html(this.masodperc[1]);
			$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo',this.masodperc[1]);
	}
	
	
	this.szamok_frissit=function(init) {
		
		if (init==1) {
			this.szamok_megjelenitese();
		}
		else {
			
			// melyek valtanak?
			
			var elemek=new Array();
			
			if (this.nap[0]!=$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(1)');
			if (this.nap[1]!=$('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(1) > div:nth-of-type(2)');
			
			if (this.ora[0]!=$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(1)');
			if (this.ora[1]!=$('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(2) > div:nth-of-type(2)');

			if (this.perc[0]!=$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(1)');
			if (this.perc[1]!=$('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(3) > div:nth-of-type(2)');
			
			if (this.masodperc[0]!=$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(1)');
			if (this.masodperc[1]!=$('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo > div:nth-of-type(4) > div:nth-of-type(2)');

			/********** for mobile view **********/

			if (this.nap[0]!=$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)');
			if (this.nap[1]!=$('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)');
			
			if (this.ora[0]!=$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)');
			if (this.ora[1]!=$('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)');

			if (this.perc[0]!=$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)');
			if (this.perc[1]!=$('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2)');
			
			if (this.masodperc[0]!=$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)');
			if (this.masodperc[1]!=$('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2)').data('elozo')) elemek.push('.visszaszamlalo-mobile > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2)');
			
			elemek=elemek.join(',');
			
			// fordul
			
			$(elemek).css({
				'transform' : 'rotatex(90deg)',
	  		'-webkit-transform' : 'rotatex(90deg)'			
	  	});
	  	
	  	setTimeout(function(){  
	  		
	  		// megjelenites 
	  		
	  		szamlalojs.szamok_megjelenitese();
	  		
	  		// visszafordul
	  		
				$(elemek).css({
					'transform' : 'rotatex(0deg)',
		  		'-webkit-transform' : 'rotatex(0deg)'			
		  	});	  		
	  		
	  		
	  	}, 200);
	  	
		}
		
	}
	
	this.futtatas=function() {
		
		this.akt_ido_beallit();
		
		if (this.ido>0) {
		
			this.hatralevo_megallapit();
			this.szamok_frissit(0);	
		
			setTimeout(function(){ szamlalojs.futtatas(); }, 1000);
			
		}
		
	}
	
	
}