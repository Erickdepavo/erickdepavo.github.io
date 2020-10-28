console.log('Global.js')

const AppStoreLink_PW = "https://apps.apple.com/us/app/phone-widget/id1537333783"

// Change links on runtime
window.onload = function(){
  document.getElementById("appStoreBadge_PW").href = AppStoreLink_PW
};