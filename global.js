const AppStoreLink_PW = "https://apps.apple.com/us/app/phone-widget/id1537333783"
const AppStoreLink_TC = "https://apps.apple.com/us/app/taxcon/id1317537747"

// Change links on runtime
window.onload = function(){
  console.log('Global.js')

  const PW_IDs = ["appStoreBadge_PW", "appStoreBadge_PW2"]
  for (const id of PW_IDs) {
    const element = document.getElementById(id)
    if (element) {
      element.href = AppStoreLink_PW
      console.log('href in',id,'set')
    }
  }

  const TC_IDs = ["appStoreBadge_TC", "appStoreBadge_TC2"]
  for (const id of TC_IDs) {
    const element = document.getElementById(id)
    if (element) {
      element.href = AppStoreLink_TC
      console.log('href in',id,'set')
    }
  }

  /*
  document.getElementById("appStoreBadge_PW").href = AppStoreLink_PW
  document.getElementById("appStoreBadge_PW2").href = AppStoreLink_PW
  document.getElementById("appStoreBadge_TC").href = AppStoreLink_TC
  document.getElementById("appStoreBadge_TC2").href = AppStoreLink_TC
  */
};