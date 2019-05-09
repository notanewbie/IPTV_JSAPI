cn = 0;
pn = 0;
function returnFile(Fdata) {
content = "";
waiting = true;
  fdata = Fdata
  var xhttp = new XMLHttpRequest();
  z = 0
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/" + fdata, false);
  xhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
  xhttp.send();
  //alert(z)
  //alert(xhttp.responseText)
  return xhttp.responseText;
}
function parseCodes(url) {
t = returnFile(url);
chanz = []
z = 1;
logos = [];
while(t.split('tvg-logo="')[z]) {
logos[z - 1] = t.split('tvg-logo="')[z].split('"')[0];
z = z + 1;
}
z=1;
titles = [];
while(t.split('",')[z]) {
titles[z - 1] = t.split('",')[z].split("\n")[0];
z = z + 1;
}
z=2;
urls = [];
a = 0;
while(t.split('\n')[z]) {
urls[a] = t.split('\n')[z].split("\n")[0];
z = z + 2;
a = a + 1;
}
z=0;
while(titles[z]) {
chanz[z] = { name: titles[z], logo: logos[z], url: urls[z] }
z = z + 1;
}
return chanz;
}
packs = [];
function addPack(r) {
packs[cn] = parseCodes(r);
cn = cn + 1;
}
//addPack("tinyurl.com/lsusnews");
function compileChannels() {
channels = [];
b = 0;
while(channels[b]) {
b = b + 1;
}
y = 0;
while(packs[y]) {
a = 0;
while(packs[y][a]) {
channels[b] = packs[y][a];
a = a + 1;
b = b + 1;
}
y = y + 1;
}
}
function Search(q) {
z = 0;
results = [];
r = 0;
while(channels[z]) {
if(channels[z].name.indexOf(q) > -1) {
results[r] = channels[z];
r = r + 1;
}
z = z + 1;
}
return results;
}
//compileChannels();