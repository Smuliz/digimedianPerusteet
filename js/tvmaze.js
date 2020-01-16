$(function() {
    const apiUrl ='http://api.tvmaze.com/search/shows?';
    
    const haku = function(osoite, takaisinkutsu) {
        $.getJSON(osoite, takaisinkutsu);
    };
   
    const naytaTulos = function(tulos) {
        const kohde = $('#list');
        kohde.empty();
        $.each(tulos, function(indeksi, sarja) {
            if (sarja.show.image === null) {
                sarja.show.image = {
                    medium: 'http://placekitten.com/210/295',
                };
            }
            if (sarja.show.officialSite === null) {
                sarja.show.officialSite = "-";

            }
            
            if (sarja.show.summary.length === 0) {
                sarja.show.summary = "-";
            }

            if (sarja.show.genres.length === 0) {
                sarja.show.genres = "-";
            }
            const ohjelma = $(
                `
                <div class="container-fluid">

                    <div class="card border-dark mb-3">
                    <div class="row no-gutters">
                        <div class="col-lg-2 col-sm-4 col-5">
                        <div class="card-img-top text-center">
                            <img src="${sarja.show.image.medium}" >
                        </div>
                        </div>
                        <div class="col-lg-10 col-sm-8 col-7">
                            <div class="card-body >
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><h2 class="card-title">${sarja.show.name}</h2></li>
                                    <li class="list-group-item"><p class="card-text"><b>Summary:</b> ${sarja.show.summary}</p></li>
                                    <li class="list-group-item"><p><b>Genres:</b> ${sarja.show.genres}</p></li>
                                    <li class="list-group-item"><p><b>Official site:</b> <a href="${sarja.show.officialSite}">Click here</p></li>
                                </ul>
                            </div>
                        
                    
                        </div>
                    </div>
                    </div>
                </div>`
            );
            kohde.append(ohjelma);
        });
    };


    const lomake = $('form');
    lomake.submit(function(evt) {
        evt.preventDefault();
        const querystring = lomake.serialize();
        haku(apiUrl + querystring, naytaTulos)
    });

});



//
//const haku = function(sarja, takaisinkutsu) {
  //  const haku = function(haunTulos) {
    //    takaisinkutsu(haunTulos);
    //}
   // $.getJSON(osoite, haku);
//};


//const naytaTulos = function(tulos) {
   // console.log(tulos);
//}


