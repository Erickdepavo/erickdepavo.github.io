console.log('Global.js')

const AppStoreLink_PW = "https://youtube.com"

// Change links on runtime
window.onload = function(){
  document.getElementById("appStoreBadge_PW").href = AppStoreLink_PW
};
