<script>

  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });

  document.getElementById("btn").addEventListener("click", work);

function work() {
  document.getElementById("demo").innerHTML = "Submitted!";
  var userinfo = {};
  var laminas = 10;
  userinfo.region = document.getElementById("region").value;
  userinfo.nivel = document.getElementById("nivel").value;
  userinfo.cod_es = document.getElementById("cod_es").value;
  userinfo.departamento = document.getElementById("departamento").value;
  userinfo.municipio = document.getElementById("municipio").value;
  userinfo.localidad = document.getElementById("localidad").value;
  userinfo.jefe = document.getElementById("jefe").value;
  userinfo.telephone = document.getElementById("telephone").value;
  userinfo.email = document.getElementById("email").value;
  userinfo.panel = document.getElementById("panel").value;
  userinfo.recieved = document.getElementById("recieved").value;
  userinfo.submitted = document.getElementById("submitted").value;
  userinfo.ano = document.getElementById("ano").value;
  userinfo.semester = document.getElementById("semester").value;
  userinfo.labname = document.getElementById("labname").value;
  var table = {};
  
  for (var i = 1; i < laminas; i++){
    eval('table.cod' + i + '= document.getElementById("cod' + i + '").value;');'
    eval('table.res' + i + ' = document.getElementById("res' + i + '").value;');
    eval('table.esp' + i + ' = document.getElementById("esp' + i + '").value;');
    eval('table.pveaa' + i + ' = document.getElementById("pveaa' + i + '").value;');
    eval('table.pveas' + i + ' = document.getElementById("pveas' + i + '").value;');
    eval('table.lpv' + i + ' = document.getElementById("lpv' + i + '").value;');
    eval('table.pfeaa' + i + ' = document.getElementById("pfeaa' + i + '").value;');
    eval('table.pfeas' + i + ' = document.getElementById("pfeas' + i + '").value;');
    eval('table.lpf' + i + ' = document.getElementById("lpf' + i + '").value;');
  }

  var comments = {}; //comments table
  comments.c1 = document.getElementById("comment1").value;
  comments.c2 = document.getElementById("comment2").value;
  comments.c3 = document.getElementById("comment3").value;
  comments.c4 = document.getElementById("comment4").value;
  comments.c5 = document.getElementById("comment5").value;

  google.script.run.userclicked(table,comments,userinfo);

  window.location.reload();

  document.getElementById("region").value= "";
  document.getElementById("lab").value= "";
  document.getElementById("establecimiento").value= "";
  document.getElementById("departamento").value= "";
  document.getElementById("municipio").value= "";
  document.getElementById("localidad").value= "";
  document.getElementById("labname").value= "";
  document.getElementById("telephone").value= "";
  document.getElementById("email").value= "";
  document.getElementById("panel").value= "";
  document.getElementById("recieved").value= "";
  document.getElementById("submitted").value= "";
  }

</script>
