// MV3(Chrome)はaction、MV2(Firefox)はbrowserAction
;(chrome.action || chrome.browserAction).onClicked.addListener(function () {
  chrome.tabs.create({ url: 'index.html' })
})
