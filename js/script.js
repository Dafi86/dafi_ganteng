async function load() {
  let data = await fetch("data.json");
  data = await data.json();
  console.log(data);
  let component = "";

  data.forEach((teman) => {
    component += ` <div class="main-container">
      <div boox="boox-container">
      <div class="card-container">
      <article class="card-article">
      <img src="${teman.fotoselfie}" class="card-img>
      <div class="card-data">
      <h2 class="card-title">About My Friend</h2>
      <span class="card-description"> 
      Nama  : ${teman.nama} <br>
      NIM   : ${teman.nim}  <br>
      TTL   : ${teman.ttl}  <br>
      Alamat: ${teman.alamat}<br>
      No.Hp : ${teman.no}
      </span>
      <a href="#" class="card-button">Read More</a>
      </div>
      </article>
      </div>
      </div>
      `;
  });
  document.getElementById("main").innerHTML = component;
}

load();
