console.log('Global.js')

const AppStoreLink_PW = "https://apps.apple.com/us/app/phone-widget/id1537333783"
const AppStoreLink_TC = "https://apps.apple.com/us/app/taxcon/id1317537747"

// Change links on runtime
window.onload = function(){
  document.getElementById("appStoreBadge_PW").href = AppStoreLink_PW
  document.getElementById("appStoreBadge_PW2").href = AppStoreLink_PW
  document.getElementById("appStoreBadge_TC").href = AppStoreLink_TC
  document.getElementById("appStoreBadge_TC2").href = AppStoreLink_TC
};